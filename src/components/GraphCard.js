import React from "react";
import {withRouter} from "react-router-dom";

const GraphCard = props => {
    return (
        <div onClick={() => props.history.push(props.path)} className="graphCard">
            <p>{props.name}</p>
            <img src={props.imgUrl} alt="radar graph"/>
        </div>
    );
}

export default withRouter(GraphCard);