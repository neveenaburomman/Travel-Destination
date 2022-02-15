
import "./Tours.css";
import { Link } from 'react-router-dom';
import Tour from './tour/Tour';

 export default function Tours (props){
    

    return(
        <>
        <div className="card">

            {props.theData.map((each) => {

         return (
                    
            <Link to = {`/city/${each.id}`}> 
            <Tour key={each.id} data={each}/>


             </Link>
                    
                );
            })}
        </div>
       </> 
    );
}