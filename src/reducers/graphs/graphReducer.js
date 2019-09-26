import {
    ADD_DATASET_FAILURE,
    ADD_DATASET_START,
    ADD_DATASET_SUCCESS,
    GET_GRAPHS_FAILURE,
    GET_GRAPHS_START,
    GET_GRAPHS_SUCCESS,
    DELETE_DATASET_FAILURE,
    DELETE_DATASET_START,
    DELETE_DATASET_SUCCESS,
    DELETE_GRAPH_FAILURE,
    DELETE_GRAPH_START,
    DELETE_GRAPH_SUCCESS,
    ADD_GRAPH_START,
    ADD_GRAPH_SUCCESS,
    ADD_GRAPH_FAILURE,
    EDIT_GRAPH_START,
    EDIT_GRAPH_SUCCESS,
    EDIT_GRAPH_FAILURE,
} from "./types";

const initialState = {
    isLoading: false,
    error: "",
    name: null,
    legs: [],
    datasets: [],
    graphs: [],
};

const reducers = (state = initialState, {type, payload}) => {
    switch (type) {
        //Empty Graph
        case ADD_GRAPH_START:
            return {
                ...state,
                error: "",
                isLoading: true,
            };
        case ADD_GRAPH_SUCCESS:
            return {
                ...state,
                error: "",
                name: payload.name,
                legs: payload.legs,
                isLoading: false,
            };
        case ADD_GRAPH_FAILURE:
            return {
                ...state,
                error: payload.data.error,
                isLoading: false,
            };

        case EDIT_GRAPH_START:
            return {
                ...state,
                error: "",
                isLoading: true,
            };
        case EDIT_GRAPH_SUCCESS:
            return {
                ...state,
                error: "",
                name: payload.name,
                legs: payload.legs,
                isLoading: false,
            };
        case EDIT_GRAPH_FAILURE:
            return {
                ...state,
                error: payload.data.error,
                isLoading: false,
            };

        //Dashboard CRUD operations
        //Get graphs
        case GET_GRAPHS_START:
            return {
                ...state,
                isLoading: true,
                error: "",
            };
        case GET_GRAPHS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: "",
                graphs: payload,
            };
        case GET_GRAPHS_FAILURE:
            return {
                ...state,
                error: payload.data.error,
                isLoading: false,
            };

        //Delete graph
        case DELETE_GRAPH_START:
            return {
                ...state,
                error: "",
                isLoading: true,
            };
        case DELETE_GRAPH_SUCCESS:
            return {
                ...state,
                error: "",
                isLoading: false,
                graphs: state.graphs.filter(graph => graph.name !== payload.name)
            };
        case DELETE_GRAPH_FAILURE:
            return {
                ...state,
                error: payload.data.error,
                isLoading: false,
            };

        //Managing datasets CRUD operations
        //Add dataset
        case ADD_DATASET_START:
            return {
                ...state,
                error: "",
                isLoading: true,
            };
        case ADD_DATASET_SUCCESS:
            return {
                ...state,
                error: "",
                isLoading: false,
                datasets: [...state.datasets, payload]
            };
        case ADD_DATASET_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload.data.error,
            };

        //Delete dataset
        case DELETE_DATASET_START:
            return {
                ...state,
                error: '',
                isLoading: true,
            };
        case DELETE_DATASET_SUCCESS:
            const newArr = state.datasets.filter(dataset => dataset.name !== payload.name);
            return {
                ...state,
                datasets: newArr,
                error: '',
                isLoading: false,
            };
        case DELETE_DATASET_FAILURE:
            return {
                ...state,
                error: payload.data.error,
                isLoading: false,
            };

        default:
            return state;
    }
};

export default reducers;
