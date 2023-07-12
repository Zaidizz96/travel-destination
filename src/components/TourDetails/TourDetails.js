import { useState } from "react";
import jsonData from "../../data/data.json";
import { useParams } from "react-router-dom";
import  "./TourDetails.css";

function TourDetails() {
    const routeParams = useParams();
    const [showLess,setShowLess] = useState(false);
 
    const tourObj = jsonData.filter(tour => tour.id === routeParams.id)[0];

    return (
        <div key={routeParams.id}>
            <strong>{tourObj.name}</strong><br/>
            <img src={tourObj.image}/><br/>
            <strong>{tourObj.price}</strong><br/>
            <p>{showLess == true ? tourObj.info : tourObj?.info.substring(0, 200)}</p>
            {showLess == true ? <button onClick={() => setShowLess(false)}> Show less</button> : 
            <button onClick={() => setShowLess(true)}> Show more</button>}
        </div>
    )
}
export default TourDetails;
