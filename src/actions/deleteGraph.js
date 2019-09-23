import axios from "axios";

export const DELETE_GRAPH_START = "DELETE_GRAPH_START";
export const DELETE_GRAPH_SUCCESS = "DELETE_GRAPH_SUCCESS";
export const DELETE_GRAPH_FAILURE = "DELETE_GRAPH_FAILURE";

export const deleteGraph = (history, graphId) => {
  return dispatch => {
    dispatch({ type: DELETE_GRAPH_START });
    axios
      .delete(`https://spider-back-end.herokuapp.com/api/graph/${graphId}`)
      .then(res => {
        console.log("deleteGraph.js action", res);
        dispatch({ type: DELETE_GRAPH_SUCCESS, payload: graphId });
        history.push("/graphlist");
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: DELETE_GRAPH_FAILURE, payload: err.response });
      });
  };
};
