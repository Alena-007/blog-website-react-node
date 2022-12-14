import React from 'react';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { SinglePost } from 'components/SinglePost/SinglePost';

export const Single = () => {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
};
