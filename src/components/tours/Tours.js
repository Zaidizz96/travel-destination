import jsonData from "../../data/data.json";
import "./Tours.css";

function Tours() {
    return(
        <div className="tourClass">
           {jsonData.map((obj , i) => (
            <div key={i}>
                <label>{obj.name}</label>
                <img src={obj.image}/>
            </div>
           ))}
        </div>
    )
}
export default Tours;