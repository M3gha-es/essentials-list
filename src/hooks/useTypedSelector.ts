//This file helps you use the type export that you have created
import {useSelector, TypedUseSelectorHook} from 'react-redux';
import {RootState} from '../state';

//Instead of using useSelector now we can use useTypedSelector
//As react is not aware of the type of data defined in redux store
//We need to create a RootState that defines the type of data being returned from store
//We then have to export that so that react can use the newly defined RootState

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
