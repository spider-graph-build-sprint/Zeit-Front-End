import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { editGraph } from "../reducers/graphs/actions";

const LegEditor = props => {
  const [visible, setVisible] = useState(false);
  const [newLabels, setNewLabels] = useState([]);

  const handleChange = e => {
    const newLabelsCopy = [...newLabels];
    newLabelsCopy[e.target.name] = e.target.value;
    setNewLabels([...newLabelsCopy]);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.setLabels(newLabels);
    props.editGraph();
  };

  useEffect(() => {
    if (visible)
      document.querySelector("#legEditorForm").style.display = "block";
    else document.querySelector("#legEditorForm").style.display = "none";
  }, [visible]);

  useEffect(() => {
    setNewLabels(props.labels);
  }, [props.labels]);

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
        {newLabels.map((label, idx) => {
          return (
            <input
              onChange={e => handleChange(e)}
              name={idx}
              key={idx}
              value={newLabels[idx]}
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
