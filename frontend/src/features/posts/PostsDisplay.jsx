import React from 'react';
import { useQuery } from '@tanstack/react-query';
import usePosts from './usePosts';

const PostsDisplay = () => {
  const posts = usePosts();
  const { isLoading, error, data } = useQuery({
    queryKey: ['posts'],
    queryFn: () => { return posts.getAllPosts(); },
  });

  const postDisplay = data?.map((post) => {
    return (
      <div>
        <p>
          {post.body}
        </p>
        <p>
          {post.createdBy?.username}
        </p>
      </div>
    );
  });
  if (isLoading) return 'Loading..';
  if (error) return `An Error has occured: ${error.message}`;
  return (
    <div>
      <div>PostsDisplay</div>
      <span>{postDisplay}</span>
    </div>
  );
};

export default PostsDisplay;
