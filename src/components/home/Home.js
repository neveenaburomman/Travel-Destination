
import Header from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";


export default function Home (props){
   
   
    return(
        <>
       
       <Header />

      <Tours theData ={props.jsonData} />

      <Footer />

      </>
    );

  }
  
  