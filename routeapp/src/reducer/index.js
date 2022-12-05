import { combineReducers } from 'redux';

const initialState = {
  data: [],
  selectedPostId: '',
  selectedPostdetails: '',
};

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return {
        ...state,
        data: [...action.payload],
      };
    case 'SET_LOADING_DELETE_POST':
      return {
        ...state,
        onDeleteLoading: action.payload,
      };
    case 'SET_LOADING_ADD-POST':
      return {
        ...state,
        addPostLoading: action.payload,
      };
    case 'SET_EDIT_POST_ID':
      return {
        ...state,
        selectedPostId: action.payload,
      };
    case 'SET_LOADING_EDIT_POST':
      return {
        ...state,
        onEditLoading: action.payload,
      };
    case 'SET_SELECTED_POST_DETAILS':
      return {
        ...state,
        selectedPostdetails: action.payload,
      };
  }
  return state;
};

export default combineReducers({
  dummyReducer: () => '',
  input: inputReducer,
});
