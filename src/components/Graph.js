import React, { useState } from "react";
import { Bar, Line, Polar, Radar } from "react-chartjs-2";

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
    data: [617594, 181045, 153060, 106519, 105162, 905072],
    // backgroundColor: "rgba(255, 99, 132, 0.6)"
    backgroundColor: dynamicColors()
  },
  {
    label: "San Diego",
    data: [105162, 181045, 617594, 153060, 806519, 95072],
    // backgroundColor: "rgba(54, 162, 235, 0.6)"
    backgroundColor: dynamicColors()
  }
];

function Graph() {
  // for changing graph type with buttons buttons
  const [graph, setGraph] = useState("");


  // state is a record of what's in the form itself
  const [state, setState] = useState({ label: "" });

  // load initial datasets into state
  const [dataSet, setDataSet] = useState(intiDataset);

  // load labels into state

  const [labels, setLabels] = useState(intiLabels);

  // this is passed into the chart comonent
  const data = {
    labels: [...labels],
    datasets: [...dataSet]
  };

  // used to maintain link between input changes and state
  function handleChanges(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }
  // function handleDataset(e) {
  //   setState({ ...state, [e.target.name]: e.target.value });
  // }
  function handleSubmit(e) {
    e.preventDefault();


    // the new label get's added to the end of the labels list.
    setLabels([...labels, state.label]);

  }
  function handleDataSubmit(e) {
    e.preventDefault();

    // the new label get's added to the end of the labels list.
    setDataSet([...dataSet, state.dataSet]);
  }

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

      <form onSubmit={handleDataSubmit}>
        <input
          name="title"
          type="text"
          placeholder="new leg name"
          onChange={handleChanges}
        />
        <input
          name="dataset"
          type="text"
          placeholder="new leg name"
          onChange={handleChanges}
          name="newLegName"
          value={state.newLegName}
        />
        <button type="submit"> add leg </button>
      </form>


      <Radar data={data} />

      {
        labels.map(label=>{
          return <p className="labels">{label}</p>
        })
      }

      {
        dataSet.map(data=>{
          return <p>{data.data.join(', ')}</p>
        })
      }

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