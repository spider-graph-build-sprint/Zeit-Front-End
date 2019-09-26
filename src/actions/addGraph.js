import { axize } from "../utils";

// export const ADD_GRAPH_START = "ADD_GRAPH_START";
// export const ADD_GRAPH_SUCCESS = "ADD_GRAPH_SUCCESS";
// export const ADD_GRAPH_FAILURE = "ADD_GRAPH_FAILURE";

// export const addGraph = (history, graphData) => {
//   return dispatch => {
//     dispatch({ type: ADD_GRAPH_START });
//     axize()
//       .post("https://spider-back-end.herokuapp.com/api/graph", graphData)
//       .then(res => {
//         console.log("The response from posting a GRAPH is", res.data);
//         dispatch({ type: ADD_GRAPH_SUCCESS, payload: res.data });
//         history.push("/graphlist");
//       })
//       .catch(err => {
//         console.log(err);
//         dispatch({ type: ADD_GRAPH_FAILURE, payload: err.response });
//       });
//   };
// };

import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const LoginForm = ({ values, errors, touched, status }) => {
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    if (status) {
      setAnimals([...animals, status]);
    }
  }, [status]);

  return (
    <div className="animal-form">
       <div className="loginFormTitle">welcome back</div>
      <Form>
        <Field type="text" name="graphName" placeholder="Graph Name" />
        {touched.graphName && errors.graphName && (
          <p className="error">{errors.graphName}</p>
        )}

        <Field type="text" name="legs" placeholder='["leg1", "leg2", "leg3", "leg4"]' />
        {touched.legs && errors.legs && <p className="error">{errors.legs}</p>}

        <button>Login</button>

      </Form>
    </div>
  );
};
const FormikLoginForm = withFormik({
  mapPropsToValues({ graphName, legs }) {
    return {
      graphName: graphName || "",
      legs: legs || "",
    };
  },
  validationSchema: Yup.object().shape({
    graphName: Yup.string().required("You must add a graphName"),
    legs: Yup.string().required("You must enter the legs")
  }),
  //You can use this to see the values
  handleSubmit(values, { setStatus }) {
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        setStatus(res.data);
      })
      .catch(err => console.log(err.res));
  }
})(LoginForm);

export default FormikLoginForm;