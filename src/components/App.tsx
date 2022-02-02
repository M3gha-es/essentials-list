import {Provider} from 'react-redux';
import { useState } from "react";
import {store} from '../state';
import SavedEsstentialsList from './SavedEsstentialsList';
import CompletedEsstentialsList from './CompletedEssentialsList';

const App:React.FC = () => {
    const [showSavedList, setShowSavedList] = useState(true);
    const [showCompletedList, setCompletedList] = useState(false);


    //Show the Saved List of items or completed list of items
    const viewSavedList = () =>{
        //toggle if same button is clicked multiple times
        //Hide the completed list
        setCompletedList(false);
        if(!showSavedList)
            setShowSavedList(true);

    }
    const viewCompletedList = () =>{
        //toggle if same button is clicked multiple times
        //Hide the saved list
        setShowSavedList(false);
        if(!showCompletedList)
            setCompletedList(true);

    }
    return <Provider store = {store}>
        <div className = "Container">
            <h1> Essentials List <span>Demo App</span></h1>
            {showSavedList ? <SavedEsstentialsList /> : null}
            {showCompletedList ? <CompletedEsstentialsList /> : null}

            <div className="footer">
                <button onClick = {viewSavedList} className = "footerButtons">My Items</button>
                <button onClick = { viewCompletedList} className = "footerButtons">Items Purchased</button>

            </div>
            <div className="message">
                <p> Click on an item on purchase and double click to remove the item from list</p>
            </div>
        </div>
    </Provider>
};

export default App;