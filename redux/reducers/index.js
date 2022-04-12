import { combineReducers } from 'redux'
import adminReducer from './admin.reducer'
import basicReducer from './basic.reducer'
import userReducer from './user.reducer'
import gameReducer from './game.reducer'
import todoReducer from './todo.reducer'
import boardReducer from './board.reducer'

const rootReducer = combineReducers({
    adminReducer,
    basicReducer,
    userReducer,
    gameReducer,
    todoReducer,
    boardReducer
})
export default rootReducer