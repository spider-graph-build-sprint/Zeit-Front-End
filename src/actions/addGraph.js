import { axize } from "../utils";

export const ADD_GRAPH_START = "ADD_GRAPH_START";
export const ADD_GRAPH_SUCCESS = "ADD_GRAPH_SUCCESS";
export const ADD_GRAPH_FAILURE = "ADD_GRAPH_FAILURE";

export const addGraph = (history, graphData) => {
  return dispatch => {
    dispatch({ type: ADD_GRAPH_START });
    axize()
      .post("https://spider-back-end.herokuapp.com/api/graph", graphData)
      .then(res => {
        console.log("The response from posting a GRAPH is", res.data);
        dispatch({ type: ADD_GRAPH_SUCCESS, payload: res.data });
        history.push("/graphlist");
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ADD_GRAPH_FAILURE, payload: err.response });
      });
  };
};
