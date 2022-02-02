import {useState} from 'react';
import {useTypedSelector} from '../hooks/useTypedSelector';
import {useActions} from '../hooks/useActions';
import { ListItem } from '../state';

const SavedEsstentialsList: React.FC =() =>{
    const [item, setItem] = useState('');

    //Let the react use the action created in redux
    const {addToSavedList, removeFromSavedList, markCompleteSavedListItem} = useActions();

    //UseSelector has no idea of redux store and
    //So no idea about essentials state defined in store
    //Need a way to let useSelector know about type of data in redux state
    //Define the state in the reducers/index.ts
    const {error,data} = useTypedSelector((state)=>state.essentials);

    //Add the item to the saved list
    const onSubmit = (event:React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();

        addToSavedList(item);
        setItem("");
    }
    //Remove item from list on double click
    const removeItem = (value:ListItem) =>{
        console.log(value);
        removeFromSavedList(value);
    }

    //Mark complete
    const markComplete = (e:React.MouseEvent<HTMLLIElement>, value:ListItem) =>{
        console.log(value);
        markCompleteSavedListItem(value);
    }

    return <div>
        <form className="ItemRowHead" onSubmit = {onSubmit}>
            <input placeholder = "What to buy?" value = {item} onChange = {(e)=>{setItem(e.target.value)}}/>
            <button>Add To List</button>
        </form>
        {error && <h3> {error}</h3>}
        <ul className="ListContainer">
            {!error && data && data.map(value =>(
                <div>
                    <li
                    className={'ItemRow'}
                    style={{
                        textDecoration: value.completed ? 'line-through' : 'none',
                    }}
                    key={value.item}
                    onDoubleClick = {() => removeItem(value)}
                    onClick={(e)=>markComplete(e, value)}
                    >
                        {value.item}

                    </li>
                </div>

            ))}
        </ul>

    </div>
}

export default SavedEsstentialsList;