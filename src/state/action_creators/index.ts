import {ActionType} from '../action-types';
import {Action} from '../actions';
import {ListItem} from '../item-templates';
import {savedList} from '../data';
import {Dispatch} from 'redux';

export const addToSavedList = (listItem:string) => {
    return async (dispatch:Dispatch<Action>) =>{
        dispatch({
            type: ActionType.ADD_TO_SAVED_LIST,
            error:"",
            data: savedList
        });
        try{
            const savedListItem:ListItem = {
                item:listItem,
                completed:false,
                empty:false,
                id:savedList.length
            }
            savedList.push(savedListItem);
        }catch(err){
            if (err instanceof Error) {
                dispatch({
                    type:ActionType.ADD_TO_SAVED_LIST_ERROR,
                    error: err.message,
                })
            }
        }
    }
}

export const removeFromSavedList = (listItem:ListItem) => {
    return async (dispatch:Dispatch<Action>) =>{

        try{
            const index = savedList.map((item) => {
                return item.id
            }).indexOf(listItem.id);

            savedList.splice(index, 1);
            dispatch({
                type: ActionType.REMOVE_FROM_SAVED_LIST,
                error:"",
                data: savedList
            });
        }catch(err){
            if (err instanceof Error) {
                dispatch({
                    type:ActionType.ADD_TO_SAVED_LIST_ERROR,
                    error: err.message,
                })
            }
        }
    }
}

export const markCompleteSavedListItem = (listItem:ListItem) => {
    return async (dispatch:Dispatch<Action>) => {
        //Toggle between completed states on click
        if(!listItem.completed){
            listItem.completed = true;
        }else{
            listItem.completed = false;
        }

        dispatch({
            type: ActionType.MARK_COMPLETE_SAVED_LIST_ITEM,
            error:"",
            data: savedList
        });
    }
}