export enum PostsActionTypes {
  LOAD_POSTS_STARTED = 'LOAD_POSTS_STARTED',
  LOAD_POSTS_SUCCEEDED = 'LOAD_POSTS_SUCCEEDED',
}

export interface FetchPostsAction {
  type: PostsActionTypes.LOAD_POSTS_STARTED
}

export interface FetchPostsSucceeded {
  type: PostsActionTypes.LOAD_POSTS_SUCCEEDED
  payload: any[]
}

export interface FetchPostsSucceeded {
  type: PostsActionTypes.LOAD_POSTS_SUCCEEDED
  payload: any[]
}
export interface PostsState {
  items: any[],
  loading: boolean
}

export type PostAction = FetchPostsAction | FetchPostsSucceeded

