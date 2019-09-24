import {
  ADD_GRAPH_FAILURE,
  ADD_GRAPH_START,
  ADD_GRAPH_SUCCESS
} from "../actions/addGraph";
import {
  DELETE_GRAPH_FAILURE,
  DELETE_GRAPH_START,
  DELETE_GRAPH_SUCCESS
} from "../actions/deleteGraph";
import {
  EDIT_GRAPH_FAILURE,
  EDIT_GRAPH_START,
  EDIT_GRAPH_SUCCESS
} from "../actions/editGraph";
import {
  GET_GRAPH_FAILURE,
  GET_GRAPH_START,
  GET_GRAPH_SUCCESS
} from "../actions/getGraph";

const initialState = {
  isLoading: false,
  errorMessage: "",
  allGraph: []
};

function graphReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GRAPH_START:
      return { ...state, isLoading: true };
    case GET_GRAPH_SUCCESS:
      return { ...state, isLoading: false, allGraph: action.payload };
    case GET_GRAPH_FAILURE:
      return { ...state, errorMessage: action.payload };
    case DELETE_GRAPH_START:
      return { ...state, isLoading: true };
    case DELETE_GRAPH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allGraph: state.allGraph.filter(graph => graph.id !== action.payload)
      };
    case DELETE_GRAPH_FAILURE:
      return { ...state, errorMessage: action.payload };
    case ADD_GRAPH_START:
      return { ...state, isLoading: true };
    case ADD_GRAPH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allGraph: [...state.allGraph, action.payload]
      };
    case ADD_GRAPH_FAILURE:
      return { ...state, errorMessage: action.payload };
    case EDIT_GRAPH_START:
      return { ...state, isLoading: true };
    case EDIT_GRAPH_SUCCESS:
      const filteredGraph = state.allGraph.filter(
        graph => graph.id !== action.payload.graphId
      );
      const updatedGraph = [...filteredGraph, action.payload.graphData];

      updatedGraph.sort(function(a, b) {
        return parseFloat(a.id) - parseFloat(b.id);
      });

      return { ...state, isLoading: false, allGraph: updatedGraph };
    case EDIT_GRAPH_FAILURE:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}

export default graphReducer;
