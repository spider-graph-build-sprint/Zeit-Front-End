import React, { useEffect, useState } from "react";
import { Bar, Line, Polar, Radar } from "react-chartjs-2";
import { connect } from "react-redux";
import { deleteGraph, getGraph } from "../reducers/graphs/actions";
// import DataSetEditor from "./DataSetEditor";
// import LegEditor from "./LegEditor";

// const [chartData, setChartData] = useState({});
const intiLabels = ["test", "test2", "test3"];

var dynamicColors = function() {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  return "rgba(" + r + "," + g + "," + b + "," + 0.6 + ")";
};

const intiDataset = [
  {
    label: "Boston",
    data: [61, 76, 35],
    // backgroundColor: "rgba(255, 99, 132, 0.6)"
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

  // this is passed into the chart comonent
  const data = {
    labels: [...labels],
    datasets: [...dataSet]
  };

  useEffect(() => {
    props.getGraph(props.match.params.name);
  }, []);

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
      {console.log("props.name", props.name, props.legs, props.datasets)}

      <h2>Welcome to Spider Graphs R Us</h2>
      <button onClick={() => deleteGraph()}>Delete This Graph </button>
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

      {/* <LegEditor labels={labels} setLabels={setLabels} /> */}
      {/* <DataSetEditor dataSet={dataSet} setDataSet={setDataSet} /> */}
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
const mapPropsToState = state => {
  console.log(
    "mapProps",
    state.graph.name,
    state.graph.legs,
    state.graph.datasets
  );
  return {
    isAuth: state.user.isAuth,
    name: state.graph.name,
    legs: state.graph.legs,
    datasets: state.graph.datasets
  };
};

export default connect(
  mapPropsToState,
  { getGraph, deleteGraph }
)(Graph);

// export default Graph;
