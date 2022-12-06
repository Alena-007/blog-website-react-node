import React from 'react';

export const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6102161/pexels-photo-6102161.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Alyona</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
      </div>
      <p className="singlePostDescr">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aut recusandae quos beatae
        expedita tempora, repudiandae, iusto totam quam eaque doloremque odio doloribus deserunt,
        rerum voluptatem voluptates architecto eveniet quaerat! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Iure aut recusandae quos beatae expedita tempora, repudiandae,
        iusto totam quam eaque doloremque odio doloribus deserunt, rerum voluptatem voluptates
        architecto eveniet quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
        aut recusandae quos beatae expedita tempora, repudiandae, iusto totam quam eaque doloremque
        odio doloribus deserunt, rerum voluptatem voluptates architecto eveniet quaerat! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Iure aut recusandae quos beatae expedita
        tempora, repudiandae, iusto totam quam eaque doloremque odio doloribus deserunt, rerum
        voluptatem voluptates architecto eveniet quaerat!
      </p>
    </div>
  );
};
