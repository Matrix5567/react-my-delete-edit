import { useParams } from 'react-router-dom';
import { editPost, getPost } from '../action';
import { connect } from 'react-redux';
import React, { useEffect, useRef, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

const Edit = ({ editPost, getPost, posts }) => {
  const [post, setPost] = useState('');
  const params = useParams();

  const postId = params.id;

  console.log('??????????', postId);
  console.log('getpost???', posts.selectedPostdetails);
  useEffect(() => {
    getPost(postId);
  }, []);

  const datasubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    const invalue = document.getElementById('invalue').value;
    editPost(posts.selectedPostId, {
      invalue: invalue,
    });
  };

  return (
    <div>
      <form onSubmit={datasubmit}>
        <input
          id="invalue"
          type={'text'}
          defaultValue={posts.selectedPostdetails.invalue}
        />
        <button type={'submit'}>Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { posts: state.input };
};

export default connect(mapStateToProps, {
  editPost,
  getPost,
})(Edit);
