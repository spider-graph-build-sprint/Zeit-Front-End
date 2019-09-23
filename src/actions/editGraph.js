import { axize } from "../utils";

export const EDIT_GRAPH_START = "EDIT_GRAPH_START";
export const EDIT_GRAPH_SUCCESS = "EDIT_GRAPH_SUCCESS";
export const EDIT_GRAPH_FAILURE = "EDIT_GRAPH_FAILURE";

export const editGraph = (history, graphId, graphData) => {
  return dispatch => {
    dispatch({ type: EDIT_GRAPH_START });
    axize()
      .put(
        `https://spider-back-end.herokuapp.com/api/graph/${graphId}`,
        graphData
      )
      .then(res => {
        console.log(res);
        dispatch({
          type: EDIT_GRAPH_SUCCESS,
          payload: { graphId: graphId, graphData: res.data }
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: EDIT_GRAPH_FAILURE, payload: err.response });
      });
  };
};
