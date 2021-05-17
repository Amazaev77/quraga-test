export enum PhotosActionTypes {
  LOAD_PHOTOS_STARTED = 'LOAD_PHOTOS_STARTED',
  LOAD_PHOTOS_SUCCEEDED = 'LOAD_PHOTOS_SUCCEEDED'
}

export interface FetchPhotosAction {
  type: PhotosActionTypes.LOAD_PHOTOS_STARTED
}

export interface FetchPhotosSucceeded {
  type: PhotosActionTypes.LOAD_PHOTOS_SUCCEEDED
  payload: any[]
}
export interface PhotosState {
  items: any[],
  loading: boolean
}

export type PhotoAction = FetchPhotosAction | FetchPhotosSucceeded

