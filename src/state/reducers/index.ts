import {combineReducers} from 'redux';
import savedListReducer from './savedListReducer';

//Combine all reducers here to pass it to the store
//Combine the 3 reducers
//1.savedList
//2.currentList
//3.suggestedList
const reducers = combineReducers({
    essentials:savedListReducer
});

export default reducers;

//The reducers created is  a type of function which internally
//calls reducers and give back objects with structures mentioned
//in the reducers (In our case in 'essentials:savedListReducer' format )
export type RootState = ReturnType <typeof reducers> ;