import { PhotoAction, PhotosActionTypes, PhotosState } from "./types/photo";
import { Dispatch } from "redux";


const initialState: PhotosState = {
  items: [],
  loading: true,
}

export default function reducer(state = initialState, action: PhotoAction): PhotosState {
  switch (action.type) {
    case PhotosActionTypes.LOAD_PHOTOS_STARTED:
      return {
        ...state,
        loading: true,
      }
    case PhotosActionTypes.LOAD_PHOTOS_SUCCEEDED:
      return {
        ...state,
        loading: false,
        items: action.payload,
      }
    default:
      return state
  }
}

export const loadPhotos = () => {
  return async (dispatch: Dispatch<PhotoAction>) => {
    dispatch({ type: PhotosActionTypes.LOAD_PHOTOS_STARTED })

    const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=20')
    const photos = await response.json();

    dispatch({type: PhotosActionTypes.LOAD_PHOTOS_SUCCEEDED, payload: photos})
  }
}