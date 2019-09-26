import React from "react";
import { connect } from "react-redux";
import { deleteGraph } from "../reducers/graphs/actions";

const GraphCard = props => {
  return (
    <div onClick={() => props.history.push(props.path)} className="graphCard">
      <p>{props.name}</p>
      <img src={props.imgUrl} alt="radar graph" />
      <button onClick={() => deleteGraph()}>X</button>
    </div>
  );
};

const mapPropsToState = state => {
  return {
    isAuth: state.user.isAuth
  };
};

export default connect(
  mapPropsToState,
  { deleteGraph }
)(GraphCard);

// export default withRouter(GraphCard);
