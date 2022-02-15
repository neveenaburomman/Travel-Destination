import './Tour.css';

export default function Tour(props){

 return(
    
    <div id="tour">
    
                
                <h4>{props.each.name}</h4>
                <img src={props.each.image} alt="theimage"/>
                <hr></hr>

                
                </div>   
          
);

 }
