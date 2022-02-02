import {ActionType} from '../action-types';
import { ListItem } from '../item-templates';

//Defines different types actions that Reducers use

//type must be defined as add_to_saved_list
interface AddToSavedListAction {
    type:ActionType.ADD_TO_SAVED_LIST,
    error:string,
    data:ListItem []
}


interface RemoveFromSavedListAction {
    type:ActionType.REMOVE_FROM_SAVED_LIST,
    error:string,
    data:ListItem []
}

interface AddToSavedListErrorAction {
    type:ActionType.ADD_TO_SAVED_LIST_ERROR,
    error:string
}

interface MarkCompleteSavedListItemAction {
    type:ActionType.MARK_COMPLETE_SAVED_LIST_ITEM,
    error:string,
    data:ListItem []
}

//define all possible actions that be used by the reducers
export type Action =
                    AddToSavedListAction
                    | RemoveFromSavedListAction
                    |AddToSavedListErrorAction
                    |MarkCompleteSavedListItemAction

