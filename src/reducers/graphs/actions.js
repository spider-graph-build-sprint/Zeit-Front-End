import { axiosWithAuth } from "../../utils/axiosWithAuth";
import {
  ADD_DATASET_FAILURE,
  ADD_DATASET_START,
  ADD_DATASET_SUCCESS,
  ADD_GRAPH_FAILURE,
  ADD_GRAPH_START,
  ADD_GRAPH_SUCCESS,
  DELETE_DATASET_FAILURE,
  DELETE_DATASET_START,
  DELETE_DATASET_SUCCESS,
  DELETE_GRAPH_FAILURE,
  DELETE_GRAPH_START,
  DELETE_GRAPH_SUCCESS,
  EDIT_DATASET_FAILURE,
  EDIT_DATASET_START,
  EDIT_DATASET_SUCCESS,
  EDIT_GRAPH_FAILURE,
  EDIT_GRAPH_START,
  EDIT_GRAPH_SUCCESS,
  GET_GRAPHS_FAILURE,
  GET_GRAPHS_START,
  GET_GRAPHS_SUCCESS
} from "./types";

export const addDataSet = (history, graphData) => {
  return dispatch => {
    dispatch({ type: ADD_GRAPH_START });
    axiosWithAuth()
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

export const editGraph = (history, graphId, graphData) => {
  return dispatch => {
    dispatch({ type: EDIT_GRAPH_START });
    axiosWithAuth()
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

export const deleteGraph = name => {
  return dispatch => {
    dispatch({ type: DELETE_GRAPH_START });
    axiosWithAuth()
      .delete(`/api/graphs/${name}`)
      .then(res => {
        dispatch({ type: DELETE_GRAPH_SUCCESS, payload: name });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: DELETE_GRAPH_FAILURE, payload: err.response });
      });
  };
};

export const getGraphs = () => {
  return dispatch => {
    dispatch({ type: GET_GRAPHS_START });
    const token = localStorage.getItem("token");
    console.log(token);
    axiosWithAuth()
      .get(`/api/graphs`)
      .then(res => {
        console.log(res);
        dispatch({ type: GET_GRAPHS_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: GET_GRAPHS_FAILURE, payload: err.response });
      });
  };
};

//* DATASET

export const addDataSets = (history, graphData) => {
  return dispatch => {
    dispatch({ type: ADD_DATASET_START });
    axiosWithAuth()
      .post("https://spider-back-end.herokuapp.com/api/graph", graphData)
      .then(res => {
        console.log("The response from posting a GRAPH is", res.data);
        dispatch({ type: ADD_DATASET_SUCCESS, payload: res.data });
        history.push("/graphlist");
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ADD_DATASET_FAILURE, payload: err.response });
      });
  };
};

export const editDataSet = (history, graphId, graphData) => {
  return dispatch => {
    dispatch({ type: EDIT_DATASET_START });
    axiosWithAuth()
      .put(
        `https://spider-back-end.herokuapp.com/api/graph/${graphId}`,
        graphData
      )
      .then(res => {
        console.log(res);
        dispatch({
          type: EDIT_DATASET_SUCCESS,
          payload: { graphId: graphId, graphData: res.data }
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: EDIT_DATASET_FAILURE, payload: err.response });
      });
  };
};

export const deleteDataSet = name => {
  return dispatch => {
    dispatch({ type: DELETE_DATASET_START });
    axiosWithAuth()
      .delete(`/api/graphs/${name}`)
      .then(res => {
        dispatch({ type: DELETE_DATASET_SUCCESS, payload: name });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: DELETE_DATASET_FAILURE, payload: err.response });
      });
  };
};
