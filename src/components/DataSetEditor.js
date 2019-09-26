import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { editGraph } from "../reducers/graphs/actions";

const LegEditor = props => {
  const [visible, setVisible] = useState(false);
  const [newDataSet, setNewDataSet] = useState([]);

  const handleChange = e => {
    const newDataSetCopy = [...newDataSet];
    newDataSetCopy[e.target.name] = e.target.value;
    setNewDataSet([...newDataSetCopy]);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.setDataSet(newDataSet);
    props.editGraph();
  };

  useEffect(() => {
    if (visible)
      document.querySelector("#legEditorForm").style.display = "block";
    else document.querySelector("#legEditorForm").style.display = "none";
  }, [visible]);

  useEffect(() => {
    setNewDataSet(props.datasets);
  }, [props.datasets]);

  return (
    <div className="legEditor">
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        Edit leg names
      </button>
      <form id="legEditorForm" onSubmit={handleSubmit}>
        {newDataSet.map((label, idx) => {
          return (
            <input
              onChange={e => handleChange(e)}
              name={idx}
              key={idx}
              value={newDataSet[idx]}
              placeholder={label}
            ></input>
          );
        })}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
const mapPropsToState = state => {
  return {
    isAuth: state.user.isAuth
  };
};

export default connect(
  mapPropsToState,
  { editGraph }
)(LegEditor);
// export default LegEditor;
