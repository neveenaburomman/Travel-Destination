
import "./Tours.css";

 export default function Tours (props){
    

    return(
        <>
        
            {props.theData.map((each) => {

         return (
                    <div className="card">
                    <h4>{each.name}</h4>
                    <img src={each.image} alt="the image"/>

                    </div>
                );
            })}
        
       </> 
    );
}