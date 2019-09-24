import React, { useState } from "react";
import { Bar, Line, Polar, Radar } from "react-chartjs-2";

// const [chartData, setChartData] = useState({});
const intiLabels = [
  "Boston",
  "Worcester",
  "Springfield",
  "Lowell",
  "Cambridge",
  "New Bedford"
];

var dynamicColors = function() {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  return "rgba(" + r + "," + g + "," + b + "," + 0.6 + ")";
};
const intiDataset = [
  {
    label: "dataset 1",
    data: [617594, 181045, 153060, 106519, 105162, 905072],
    // backgroundColor: "rgba(255, 99, 132, 0.6)"
    backgroundColor: dynamicColors()
  },
  {
    label: "dataset 2",
    data: [105162, 181045, 617594, 153060, 806519, 95072],
    // backgroundColor: "rgba(54, 162, 235, 0.6)"
    backgroundColor: dynamicColors()
  },
  {
    label: "dataset 3",
    data: [181045, 617594, 106519, 105162, 95072, 153060],
    // backgroundColor: "rgba(255, 206, 86, 0.6)"
    backgroundColor: dynamicColors()
  },
  {
    label: "dataset 4",
    data: [95072, 153060, 181045, 617594, 105162, 106519],
    // backgroundColor: "rgba(75, 192, 192, 0.6)"
    backgroundColor: dynamicColors()
  },
  {
    label: "dataset 5",
    data: [106519, 153060, 181045, 617594, 95072, 105162],
    // backgroundColor: "rgba(153, 102, 255, 0.6)"
    backgroundColor: dynamicColors()
  },
  {
    label: "dataset 6",
    data: [181045, 105162, 95072, 106519, 153060, 617594],
    // backgroundColor: "rgba(255, 159, 64, 0.6)"
    backgroundColor: dynamicColors()
  },
  {
    label: "dataset 7",
    data: [106519, 181045, 105162, 95072, 617594, 153060],
    // backgroundColor: "rgba(255, 99, 132, 0.6)"
    backgroundColor: dynamicColors()
  }
];
function Graph() {
  const [graph, setGraph] = useState("");
  const [state, setState] = useState({newLegName: ""});
  const [dataset] = useState(intiDataset);
  const [labels, setLabels] = useState(intiLabels);

  const data = {
    labels: [...labels],
    datasets: [...dataset]
  };
  function handleChanges(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setLabels([...labels, state.newLegName]);
    // console.log(state);
  }
  // ExportChart({ format: "jpg" });
  // Bar, Line, Radar, Polar, ;
  return (
    <div className="graphPage">
      <h2>Welcome to Spider Graphs R Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="new leg name"
          onChange={handleChanges}
          name="newLegName"
          value={state.newLegName}
        />
        <button type="submit"> add leg </button>
      </form>
      <Radar data={data} />
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
