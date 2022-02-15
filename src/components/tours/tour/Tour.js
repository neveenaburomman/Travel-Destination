import './Tour.css';

export default function Tour(props){

 return(
    
    <div id="tour">
    
                
                <h3 id ="text" >{props.citydata.name}</h3>
                <br></br>
                <img src={props.citydata.image} alt="theimage"/>
                <hr></hr>

                
                </div>   
          
);

 }
