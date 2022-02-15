import "./TourDetails.css";
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function TourDetails(props) {

    const [showDetails, setShowDetails] = useState(false);
    const { id } = useParams();

    function handleTheClick() {
        setShowDetails(!showDetails)
    }

    let theDetailsOfTour = props.jsonArray.filter(each => each.id == id)

    return (
        <>
            <Header />
            <div className="theDetails">

                <h2 id="name"> 📍 {theDetailsOfTour[0].name} </h2>

                <hr></hr>
                <h4 > {showDetails ? theDetailsOfTour[0].info : `${theDetailsOfTour[0].info.substring(0, 250)}`}
                    {showDetails ? <button onClick={handleTheClick}>Less</button>
                        : <button onClick={handleTheClick}> More </button>}
                        
                    <h3> The Cost Of This Trip 💵=  {theDetailsOfTour[0].price}   </h3>
                </h4>
                <img src={theDetailsOfTour[0].image}></img>





            </div>
            <Footer />
        </>


    );

}
