import React from "react";
import {withRouter} from "react-router-dom";

const GraphCard = props => {
    console.log(props.imgUrl);
    return (
        <div onClick={() => props.history.push(props.name)} className="graphCard">
            <p>{props.name}</p>
            <img src={props.imgUrl} alt="radar graph"/>
        </div>
    );
}

export default withRouter(GraphCard);