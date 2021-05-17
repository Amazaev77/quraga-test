import {ProfileAction, ProfileActionTypes, ProfileState} from './types/profile'
import {Dispatch} from "redux";

const initialState: ProfileState = {
  profile: {},
  isLoading: false,
  error: null,
  isLoggedIn: !!localStorage.getItem('isLoggedIn'),
}

export default function reducer(state = initialState, action: ProfileAction): ProfileState {
  switch (action.type) {
    case ProfileActionTypes.AUTH_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    case ProfileActionTypes.AUTH_SUCCEEDED:
      return {
        ...state,
        profile: action.payload,
        isLoading: false,
        error: null,
        isLoggedIn: true,
      }
    case ProfileActionTypes.AUTH_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    case ProfileActionTypes.PROFILE_LOGOUT:
      return {
        profile: {},
        isLoading: false,
        error: null,
        isLoggedIn: false,
      }
    default:
      return state
  }
}

export const loadProfile = (login?: string, password?: string | number) => {
  return async (dispatch: Dispatch<ProfileAction>, getState: Function) => {
    dispatch({ type: ProfileActionTypes.AUTH_STARTED })

    const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const profile = await res.json()

    const isLoggedIn = getState().profile.isLoggedIn

    if (isLoggedIn || (login === 'Admin' && password === 12345)) {
      localStorage.setItem('isLoggedIn', "true")

      dispatch({ type: ProfileActionTypes.AUTH_SUCCEEDED, payload: profile })
    } else {
      localStorage.setItem('isLoggedIn', '')

      dispatch({ type: ProfileActionTypes.AUTH_FAILED, payload: 'Server error' })
    }
  }
}

export const logout = () => {
  localStorage.removeItem('isLoggedIn')

  return { type: ProfileActionTypes.PROFILE_LOGOUT }
}
