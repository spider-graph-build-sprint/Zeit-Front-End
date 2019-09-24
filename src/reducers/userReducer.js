import {
  GET_USER_DATA_FAILURE,
  GET_USER_DATA_START,
  GET_USER_DATA_SUCCESS
} from "../actions/getUserData";
import {
  GET_USERS_GRAPH_FAILURE,
  GET_USERS_GRAPH_START,
  GET_USERS_GRAPH_SUCCESS
} from "../actions/getUserGraphs";
import {
  LOGIN_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS
} from "../actions/userLogin";

const initialState = {
  isLoading: false,
  errorMessage: "",
  userData: {},
  userGraphs: []
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false, userData: action.payload };
    case LOGIN_FAILURE:
      return { ...state, errorMessage: action.payload };
    case GET_USER_DATA_START:
      return { ...state, isLoading: true };
    case GET_USER_DATA_SUCCESS:
      return { ...state, isLoading: false, userData: action.payload };
    case GET_USER_DATA_FAILURE:
      return { ...state, errorMessage: action.payload };
    case GET_USERS_GRAPH_START:
      return { ...state, isLoading: true };
    case GET_USERS_GRAPH_SUCCESS:
      return { ...state, isLoading: false, userGraphs: action.payload };
    case GET_USERS_GRAPH_FAILURE:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}

export default userReducer;
