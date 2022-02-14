
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";

export default function Home (props){
   
   
    return(
        <>
       
       <Header />

      <Tours theData ={props.jsonData} />

      <Footer />

      </>
    );

  }
  
  