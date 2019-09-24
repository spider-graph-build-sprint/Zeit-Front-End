import React from "react";
// import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom";

// const onGraphCardClick = (props) => {
//     props.history.push(props.path);
// }



const GraphCard = props => {
    return (
        // <Link to={props.path}>
            <div onClick={() => props.history.push(props.path)} className="graphCard">
                <p>{props.name}</p>
                <img src={props.imgUrl} alt="radar graph"/>
            </div>
        // </Link>
    );
}

export default withRouter(GraphCard);