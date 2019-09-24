import { axize } from "../utils";

export const GET_USERS_GRAPH_START = "GET_USERS_GRAPH_START";
export const GET_USERS_GRAPH_SUCCESS = "GET_USERS_GRAPH_SUCCESS";
export const GET_USERS_GRAPH_FAILURE = "GET_USERS_GRAPH_FAILURE";

export const getUserGraphs = () => {
  return dispatch => {
    dispatch({ type: GET_USERS_GRAPH_START });
    axize()
      .get(`https://spider-back-end.herokuapp.com/api/users/graphs`)
      .then(res => {
        console.log("getUserGraphs.js action:", res);
        dispatch({ type: GET_USERS_GRAPH_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log(err.response);
        dispatch({ type: GET_USERS_GRAPH_FAILURE, payload: err.response });
      });
  };
};
