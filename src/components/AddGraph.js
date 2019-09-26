import axios from "axios";
import { Field, Form, withFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";

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

        <Field
          type="text"
          name="legs"
          placeholder='["leg1", "leg2", "leg3", "leg4"]'
        />
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
      legs: legs || ""
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
