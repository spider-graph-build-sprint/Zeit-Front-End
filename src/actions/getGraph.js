import axios from "axios";

export const GET_GRAPH_START = "GET_GRAPH_START";
export const GET_GRAPH_SUCCESS = "GET_GRAPH_SUCCESS";
export const GET_GRAPH_FAILURE = "GET_GRAPH_FAILURE";

export const getGraph = () => {
  const graphId = JSON.parse(localStorage.getItem("graphData")).graph_id;
  return dispatch => {
    dispatch({ type: GET_GRAPH_START });
    axios
      .get(`https://spider-back-end.herokuapp.com/api/graph/${graphId}`)
      .then(res => {
        console.log(res);
        dispatch({ type: GET_GRAPH_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: GET_GRAPH_FAILURE, payload: err.response });
      });
  };
};
