import './App.css';
import Home from "./components/home/Home";
const jsonArray = require("./data/db.json");

export default function App(){
  return(

    <Home  jsonData={jsonArray}/>
  );
}
