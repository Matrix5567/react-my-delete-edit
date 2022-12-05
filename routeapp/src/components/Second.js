import { Outlet, Link } from 'react-router-dom';
import { setPosts, deletePost } from '../action';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

const Second = ({ setPosts, posts, deletePost }) => {
  useEffect(() => {
    setPosts();
  }, []);

  const onDel = (id) => {
    deletePost(id);
  };

  return (
    <div>
      <h1>Second page</h1>
      <nav>
        <ul>
          <li>
            <Link className="btn btn-primary" to="/">
              First
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary" to="/third">
              Third
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      {posts.data.map((item, index) => (
        <div key={index}>
          <p>{item.invalue}</p>
          <button type="button" onClick={() => onDel(item.id)}>
            Delete
          </button>
          <Link className="btn btn-warning" to={`/edit/${item.id}`}>
            Edit
          </Link>
          <Outlet />
        </div>
      ))}
    </div>
  );
};
const mapStateToProps = (state) => {
  return { posts: state.input };
};

export default connect(mapStateToProps, {
  setPosts,
  deletePost,
})(Second);
