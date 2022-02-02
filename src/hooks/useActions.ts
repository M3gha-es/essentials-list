//This file helps us bind all the actionCreators that we have created in redux
//to dispatch object for the react to use
import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../state';

export const useActions = () => {

    //dispatch object for the react to use
    const dispatch = useDispatch();

    //bind all the actions such as addToSavedListAction
    //and removeFromSavedListAction to react dispatch object
    return bindActionCreators(actionCreators, dispatch);
}