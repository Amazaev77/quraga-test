import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import photos from './ducks/photos'
import posts from './ducks/posts'
import profile from './ducks/profile'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  photos,
  posts,
  profile,
})

const logger = createLogger({
  collapsed: true,
  diff: true,
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
)

export type RootState = ReturnType<typeof rootReducer>
