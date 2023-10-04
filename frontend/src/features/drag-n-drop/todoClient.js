import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:3500',
});

export const getTodos = async () => {
  const response = await client.get('/todos');
  return response.data;
};

export const addTodo = async (todo) => {
  return client.post('/todos', todo);
};

export const updateTodo = async (todo) => {
  return client.patch(`/todos/${todo.id}`, todo);
};

export const deleteTodo = async ({ id }) => {
  return client.delete(`/todos/${id}`, id);
};

export default client;
