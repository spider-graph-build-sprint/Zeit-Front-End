import React, { useState } from "react";
import { Bar, Line, Polar, Radar } from "react-chartjs-2";
import LegEditor from "./LegEditor";

// const [chartData, setChartData] = useState({});
const intiLabels = [
  "Population",
  "Income Level",
  "Education Index",
  "Housing Affordability",
  "Prison Population",
  "Normalized GDP"
];

var dynamicColors = function() {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  return "rgba(" + r + "," + g + "," + b + "," + 0.6 + ")";
};

const intiDataset = [
  {
    label: "Boston",
    data: [61, 18, 15, 10, 10, 90],
    // backgroundColor: "rgba(255, 99, 132, 0.6)"
    backgroundColor: dynamicColors()
  },
  {
    label: "San Diego",
    data: [10, 18, 61, 15, 80, 95],
    // backgroundColor: "rgba(54, 162, 235, 0.6)"
    backgroundColor: dynamicColors()
  }
];

function Graph(props) {
  // for changing graph type with buttons buttons
  const [graph, setGraph] = useState("");

  // state is a record of what's in the form itself
  const [state, setState] = useState({ label: "" });

  // load initial datasets into state
  const [dataSet, setDataSet] = useState(intiDataset);

  // load labels into state

  const [labels, setLabels] = useState(intiLabels);

  // const [editing, setEditing] = useState(false);

  // const [editedGraphData, setEditedGraphData] = useState({ label: "" });
  // function handleChange(e) {
  //   setEditedGraphData({ ...editedGraphData, [e.target.name]: e.target.value });
  //   console.log("editedGraphData", editedGraphData);
  // }

  // this is passed into the chart comonent
  const data = {
    labels: [...labels],
    datasets: [...dataSet]
  };

  // used to maintain link between input changes and state
  function handleChanges(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
    console.log("state", state);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // the new label get's added to the end of the labels list.
    setLabels([...labels, state.label]);
  }

  // }
  //--------------------------------------------------------------
  // ExportChart({ format: "jpg" });
  // Bar, Line, Radar, Polar, ;
  return (
    <div className="graphPage">
      <h2>Welcome to Spider Graphs R Us</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="label"
          type="text"
          placeholder="new leg name"
          onChange={handleChanges}
        />
        <button type="submit"> add leg </button>
      </form>

      <Radar data={data} />

      <LegEditor labels={labels} setLabels={setLabels} />
      <h2>Other viewing Options</h2>

      <div className="graphButtons">
        {/* <button onClick={() => setGraph(<Radar data={data} />)}>Radar</button> */}
        <button onClick={() => setGraph(<Bar data={data} />)}>Bar Chart</button>

        <button onClick={() => setGraph(<Line data={data} />)}>
          Line Chart
        </button>

        <button onClick={() => setGraph(<Polar data={data} />)}>
          Polar Chart
        </button>
      </div>
      <div className="graph">{graph}</div>
      {/* <button onClick={() => toBase64Image()}>Save as png</button> */}
    </div>
  );
}
export default Graph;
