import React from 'react';

export const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/10443212/pexels-photo-10443212.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDescr">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur corrupti nulla velit,
        voluptatibus id dignissimos expedita facere similique! Possimus sint molestiae odit deleniti
        rem excepturi illo repellat fuga at porro. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Aspernatur corrupti nulla velit, voluptatibus id dignissimos expedita
        facere similique! Possimus sint molestiae odit deleniti rem excepturi illo repellat fuga at
        porro. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur corrupti nulla
        velit, voluptatibus id dignissimos expedita facere similique! Possimus sint molestiae odit
        deleniti rem excepturi illo repellat fuga at porro.
      </p>
    </div>
  );
};
