import {combineReducers} from 'redux';

import userReducer from './user/user.reducer';



export default combineReducers({
    user: userReducer
})

// const userReducer = (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//       case "SET_CURRENT_USER":
//         return { ...state, currentUser: action.payload };
//       default:
//         return state;
//     }
//   };