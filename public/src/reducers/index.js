import {combineReducers} from 'redux'

const userReducer = (user = null, action) => {

    if(action.type === 'CHANE_USER'){
        
        return action.payload
    }
    return user
}



export default combineReducers({
    user: userReducer,
   
})