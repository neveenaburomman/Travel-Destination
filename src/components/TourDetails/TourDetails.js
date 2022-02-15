import "./TourDetails.css";
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Header from "../header/Header";
import Footer from "../Footer/Footer";

export default function TourDetails(props) {

    const [showDetails,setShowDetails] = useState(false);
    const {id} = useParams();
   
    function handleTheClick()
    {
        setShowDetails(!showDetails)
    }





    return (
        <>
            <Header />
            <div className="theDetails">








            </div>
            <Footer />
         </>   

          
);

}
