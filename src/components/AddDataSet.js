import { Field, Form, withFormik } from "formik";
import React from "react";
import { connect } from "react-redux";
import * as Yup from "yup";
import { addDataSets } from "../reducers/graphs/actions";

const AddDataSet = ({ history, addDataSets, errors, touched, status }) => {
  return (
    <div className="addDataSet-form">
      <div className="addDataSeFormTitle">welcome back</div>
      <Form>
        <Field type="text" name="title" placeholder="DataSet Name" />
        {touched.title && errors.title && (
          <p className="error">{errors.title}</p>
        )}

        <Field type="text" name="points1" placeholder="points1" />
        {touched.points1 && errors.points1 && (
          <p className="error">{errors.points1}</p>
        )}
        <Field type="text" name="points2" placeholder="points2" />
        {touched.points2 && errors.points2 && (
          <p className="error">{errors.points2}</p>
        )}
        <Field type="text" name="points3" placeholder="points3" />
        {touched.points3 && errors.points3 && (
          <p className="error">{errors.points3}</p>
        )}

        <button type="submit">Add DataSet</button>
      </Form>
    </div>
  );
};
const FormikDataSetForm = withFormik({
  mapPropsToValues({ title, points1, points2, points3 }) {
    return {
      title: title || "",
      points1: points1 || "",
      points2: points2 || "",
      points3: points3 || ""
    };
  },
  validationSchema: Yup.object().shape({
    title: Yup.string().required("You must add a title"),
    points1: Yup.string().required("You must enter the points"),
    points2: Yup.string().required("You must enter the points"),
    points3: Yup.string().required("You must enter the points")
  }),
  //You can use this to see the values
  handleSubmit(values, { props }) {
    const title = values.title;
    const points1 = values.points1;
    const points2 = values.points2;
    const points3 = values.points3;

    props.addDataSets(
      { title, points: [points1, points2, points3] },
      props.name,
      props.history
    );
  }
})(AddDataSet);
const mapPropsToState = state => {
  return {
    isAuth: state.user.isAuth
  };
};

export default connect(
  mapPropsToState,
  { addDataSets }
)(FormikDataSetForm);
