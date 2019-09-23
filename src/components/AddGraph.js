import React, { useState } from "react";

const AddGraph = () => {
  const [state, setState] = useState({});
  const [labels, setLabels] = useState([{ value: null }]);
  const [labelData, setLabelData] = useState([{ value: null }]);

  console.log("labels", labels);
  function handleSubmit(e) {
    e.preventDefault();
    setState({ ...state, labels, state });
  }
  console.log("state", state);
  function handleChanges(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }
  function handleChange(i, event) {
    const values = [...labels];
    values[i].value = event.target.value;
    setLabels(values);
  }

  function handleAdd() {
    const values = [...labels];
    values.push({ value: null });
    setLabels(values);
  }

  function handleRemove(i) {
    const values = [...labels];
    values.splice(i, 1);
    setLabels(values);
  }

  return (
    <>
      <form className="addGraph">
        <input
          type="text"
          name="title"
          placeholder="Graph Title"
          value={state.title}
          onChange={handleChanges}
        />

        {labels.map((labels, idx) => {
          return (
            <div className="graphPoint" key={`${labels}-${idx}`}>
              <input
                type="text"
                placeholder="Enter text"
                onChange={e => handleChange(idx, e)}
              />
              <button type="button" onClick={() => handleRemove(idx)}>
                X
              </button>
            </div>
          );
        })}
        <button
          className="addFriendButton"
          type="button"
          onClick={() => handleAdd()}
        >
          + Add Label
        </button>

        <br />
        <input
          type="text"
          name="dataset"
          placeholder="Graph dataset Label"
          value={state.datasetLabel}
          onChange={handleChanges}
        />

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
};

export default AddGraph;
