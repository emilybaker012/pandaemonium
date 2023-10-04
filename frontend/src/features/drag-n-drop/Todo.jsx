/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { FaTrash } from 'react-icons/fa';
import { MdOutlineAdd } from 'react-icons/md';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {
  getTodos, addTodo, updateTodo, deleteTodo,
} from './todoClient';

const Todo = () => {
  const [newTodo, setNewTodo] = useState('');
  const queryClient = useQueryClient();

  const {
    isLoading,
    isError,
    error,
    data,
  } = useQuery(
    {
      queryKey: ['todos'],
      queryFn: getTodos,
      select: (data) => { return data.sort((a, b) => { return b.id - a.id; }); },
    },
  );

  const [todos, setTodos] = useState(data || []);

  useEffect(() => {
    const arrayIdsOrder = JSON.parse(localStorage.getItem('taskOrder'));
    if (!arrayIdsOrder && data?.length) {
      const idsOrderArray = data.map((task) => { return task.id; });
      localStorage.setItem('taskOrder', JSON.stringify(idsOrderArray));
    }
    let myArray;
    if (arrayIdsOrder?.length && data?.length) {
      myArray = arrayIdsOrder.map((pos) => {
        return data.find((el) => { return el.id === pos; });
      });

      const newItems = data.filter((el) => {
        return !arrayIdsOrder.includes(el.id);
      });

      if (newItems?.length) myArray = [...newItems, ...myArray];
    }
    setTodos(myArray || data);
  }, [data]);
  const addTodoMutation = useMutation(addTodo, {
    onSuccess: () => {
      // Invalidates cache and refetch
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  const updateTodoMutation = useMutation(updateTodo, {
    onSuccess: () => {
      // Invalidates cache and refetch
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  const deleteTodoMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      // Invalidates cache and refetch
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoMutation.mutate({ userId: 1, title: newTodo, completed: false });
    setNewTodo('');
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const tasks = [...todos];
    const [reorderItem] = tasks.splice(result.source.index, 1);
    tasks.splice(result.destination.index, 0, reorderItem);
    const idsOrderArray = tasks.map((task) => { return task.id; });
    localStorage.setItem('taskOrder', JSON.stringify(idsOrderArray));
    setTodos(tasks);
  };

  const handleDelete = (id) => {
    const arrayIdsOrder = JSON.parse(localStorage.getItem('taskOrder'));

    if (arrayIdsOrder?.length) {
      const newIdsOrderArray = arrayIdsOrder.filter((num) => { return num !== id; });
      localStorage.setItem('taskOrder', JSON.stringify(newIdsOrderArray));
    }

    deleteTodoMutation.mutate({ id });
  };
  const newItemSection = (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo">Enter a new todo item</label>
      <div className="new-todo">
        <input
          type="text"
          id="new-todo"
          value={newTodo}
          onChange={(e) => { return setNewTodo(e.target.value); }}
          placeholder="Enter new todo"
        />
      </div>
      <button type="button" className="submit" onClick={handleSubmit}>
        <MdOutlineAdd />
      </button>
    </form>
  );

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isError) {
    content = <p>{error.message}</p>;
  } else {
    content = (
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => {
            return (
              <section {...provided.droppableProps} ref={provided.innerRef}>
                {todos?.map((todo, index) => {
                  return (
                    <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
                      {(provided) => {
                        return (
                          <article
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >
                            <div className="todo">
                              <input
                                type="checkbox"
                                checked={todo.completed}
                                id={todo.id}
                                onChange={() => {
                                  return updateTodoMutation.mutate(
                                    { ...todo, completed: !todo.completed },
                                  );
                                }}
                              />
                              <label htmlFor={todo.id}>{todo.title}</label>
                            </div>
                            <button className="trash" type="button" onClick={() => { return handleDelete(todo.id); }}>
                              <FaTrash />
                            </button>
                          </article>
                        );
                      }}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </section>
            );
          }}
        </Droppable>
      </DragDropContext>
    );
  }
  return (
    <main>
      <h1>Todo List</h1>
      {newItemSection}
      {content}
    </main>
  );
};

Todo.propTypes = {};

export default Todo;
