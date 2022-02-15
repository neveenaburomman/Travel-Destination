import './App.css';
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import TourDetails from "./components/TourDetails/TourDetails";
const TourData = require("./data/db.json");


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home jsonData={TourData} />} />

        <Route path="/city/:id" element={<TourDetails jsonArray={TourData} />} />
      </Routes>



    </>
  );
}
