import PostService from '../service';

export const setPosts = () => async (dispatch) => {
  await new Promise((res) => setTimeout(res, 1000));
  const { data } = await PostService.listPosts();
  dispatch({
    type: 'SET_POSTS',
    payload: data,
  });
};

export const addPost = (payload) => async (dispatch) => {
  await new Promise((res) => setTimeout(res, 1000));
  const { data } = await PostService.createPost(payload);
  //dispatch(setPosts());
};

export const deletePost = (id) => async (dispatch) => {
  console.log('action del', id);
  await new Promise((res) => setTimeout(res, 1000));
  const { data } = await PostService.deletePost(id);

  dispatch(setPosts());
};

export const editPost = (id, payload) => async (dispatch) => {
  dispatch({ type: 'SET_EDIT_POST_ID', payload: id });
  await new Promise((res) => setTimeout(res, 1000));
  const { data } = await PostService.updatePost(id, payload);
  dispatch(setPosts());
};

export const getPost = (id) => async (dispatch) => {
  dispatch({ type: 'SET_EDIT_POST_ID', payload: id });
  await new Promise((res) => setTimeout(res, 1000));
  const { data } = await PostService.getPostDetails(id);

  dispatch({ type: 'SET_SELECTED_POST_DETAILS', payload: data });
};
