import { combineReducers } from 'redux'

import notes from './notes'
import authentication from './authentication'

export default combineReducers({
  notes,
  authentication
})