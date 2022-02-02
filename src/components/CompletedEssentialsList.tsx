import {useTypedSelector} from '../hooks/useTypedSelector';

const CompletedEssentialsList:React.FC = () =>{
    const {error,data} = useTypedSelector((state)=>state.essentials);

    return <div>
        {error && <h3> {error}</h3>}
        <h3 className="ItemRow" >Purchase complete:</h3>
        <ul className="ListContainer">
            {!error && data && data.map(value =>(
                value.completed?
                <li
                className={'ItemRow'}
                key={value.item}
                >
                    {value.item}
                </li>
                :null

            ))}
        </ul>
    </div>
}

export default CompletedEssentialsList;