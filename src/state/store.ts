import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
//Create a redux store here to  hold the complete state tree
//Initial state is empty
export const store = createStore(reducers, {} , applyMiddleware(thunk));