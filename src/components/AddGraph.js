import { Field, Form, withFormik } from "formik";
import React, { useState } from "react";
import { connect } from "react-redux";
import * as Yup from "yup";
import { addGraph } from "../reducers/graphs/actions";

const AddGraph = ({ values, errors, touched, status }) => {
  const [state, setState] = useState([]);
  // useEffect(() => {
  //   if (status) {
  //     setAnimals([...animals, status]);
  //   }
  // }, [status]);

  function handleSubmit(e) {
    e.preventDefault();

    setState({ ...state, state });

    const postObj = {
      expense: {
        name: state.name,
        legs: [state.legs],
        datasets: [
          {
            title: state.title,
            points: [state.points]
          }
        ]
      }
    };

    addGraph(postObj);
  }

  return (
    <div className="add-graph-form">
      <div className="add-graph-form-title">New Graph</div>
      <Form>
        <Field type="text" name="name" placeholder="Graph Name" />
        {touched.name && errors.name && <p className="error">{errors.name}</p>}

        <Field
          type="text"
          name="legs"
          placeholder='["leg1", "leg2", "leg3", "leg4"]'
        />
        {touched.legs && errors.legs && <p className="error">{errors.legs}</p>}

        <Field type="text" name="title" placeholder="DataSet Title" />
        {touched.title && errors.title && (
          <p className="error">{errors.title}</p>
        )}
        <Field
          type="text"
          name="points"
          placeholder='["Data Points 1", "Data Points 2", "Data Points 3", "Data Points 4"]'
        />
        {touched.points && errors.points && (
          <p className="error">{errors.points}</p>
        )}

        <button onClick={handleSubmit}>Submit</button>
      </Form>
    </div>
  );
};
const AddGraphForm = withFormik({
  mapPropsToValues({ name, legs, title, points }) {
    return {
      name: name || "",
      legs: legs || "",
      title: title || "",
      points: points || ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("You must add a name"),
    legs: Yup.string().required("You must enter the legs"),
    title: Yup.string().required("You must enter the Data Set Title"),
    points: Yup.string().required("You must enter the Data Points")
  })
  //You can use this to see the values
  // handleSubmit(values, { setStatus }) {
  //   axios
  //     .post("https://reqres.in/api/users/", values)
  //     .then(res => {
  //       setStatus(res.data);
  //     })
  //     .catch(err => console.log(err.res));
  // }
})(AddGraph);

const mapPropsToState = state => {
  return {
    isAuth: state.user.isAuth
  };
};

export default connect(
  mapPropsToState,
  { addGraph }
)(AddGraphForm);
