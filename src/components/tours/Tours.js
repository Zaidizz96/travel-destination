
import jsonData from "../../data/data.json";
import Tour from "./tour/Tour";
import "./Tours.css";

function Tours() {
    
    return (
        <div className="tourClass">
            {jsonData.map((element, index) => (
               <Tour tour={element} key={index}/>
            ))}
        </div>
    )
}
export default Tours;