import {ActionType} from '../action-types';
import {Action} from '../actions';
import {ListItem} from '../item-templates';

//On search to essentials we any of the following states:
//1. existingList: List of string
//2. savedList: List of string
//3. currentList: List of string
interface EssentialsState {
    error:string,
    data:ListItem[];
}

const initialState = {
    error:"",
    data: []
};

//Reducer to define the action
//Return list of essentials
//On failure, return  empty list
//Two arguments:
//1. state : interface EssentialsState
//2. action: this contains data/message to user
const reducer = (
    state:EssentialsState = initialState,
    action:Action) =>{
    switch(action.type){
        default: return state;
        case ActionType.ADD_TO_SAVED_LIST:
            return {error:action.error, data:action.data};
         case ActionType.REMOVE_FROM_SAVED_LIST:
            return {error:action.error,data:action.data};
        case ActionType.MARK_COMPLETE_SAVED_LIST_ITEM:
            return {error:action.error,data:action.data};

    }
};

export default reducer;