export enum ProfileActionTypes {
  AUTH_STARTED = 'AUTH_STARTED',
  AUTH_SUCCEEDED = 'AUTH_SUCCEEDED',
  AUTH_FAILED = 'AUTH_FAILED',
  PROFILE_LOGOUT = 'PROFILE_LOGOUT'
}

export interface FetchProfileAction {
  type: ProfileActionTypes.AUTH_STARTED
}

export interface FetchProfileSucceeded {
  type: ProfileActionTypes.AUTH_SUCCEEDED
  payload: any[]
}

export interface AuthFailed {
  type: ProfileActionTypes.AUTH_FAILED
  payload: string
}

export interface ProfileLogout {
  type: ProfileActionTypes.PROFILE_LOGOUT
}

export interface ProfileState {
  profile: object,
  isLoading: boolean,
  error: string | null,
  isLoggedIn: boolean
}

export type ProfileAction = FetchProfileAction | FetchProfileSucceeded | AuthFailed
 | ProfileLogout

