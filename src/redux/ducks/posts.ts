import {PostAction, PostsActionTypes, PostsState} from "./types/post";
import {Dispatch} from "redux";

const initialState: PostsState = {
  items: [],
  loading: true,
}

export default function reducer(state = initialState, action: PostAction): PostsState {
  switch (action.type) {
    case PostsActionTypes.LOAD_POSTS_STARTED:
      return {
        ...state,
        loading: true,
      }
    case PostsActionTypes.LOAD_POSTS_SUCCEEDED:
      return {
        ...state,
        items: action.payload,
        loading: false,
      }
    default:
      return state
  }
}

export const loadPosts = () => {
  return async (dispatch: Dispatch<PostAction>) => {
    dispatch({ type: PostsActionTypes.LOAD_POSTS_STARTED })

    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
    const posts = await response.json()

    dispatch({ type: PostsActionTypes.LOAD_POSTS_SUCCEEDED, payload: posts })
  }
}
