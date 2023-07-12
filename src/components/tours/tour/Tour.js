import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./Tour.css"
function Tour(props) {
    return (
        <Fragment>
            <div className="tour" key={props?.key} >
                <Link to={`/city/${props?.tour?.id}`}>
                    <h3>{props?.tour?.name}</h3>
                </Link>
                <img src={props?.tour?.image} />
            </div>
        </Fragment>
    )
}
export default Tour;

