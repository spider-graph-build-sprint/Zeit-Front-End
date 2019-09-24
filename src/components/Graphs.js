import React from "react";
import { Radar } from "react-chartjs-2";
//--------------------------------------This Page is no longer in use------------------------------------------

// class Graphs extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       chartData:props.chartData
//     }
//   }
function Graphs(props) {
  // static defaultProps = {
  //   displayTitle:true,
  //   displayLegend: true,
  //   legendPosition:'right',
  //   location:'City'
  // }

  return (
    <div className="chart">
      <Radar
        data={chartData}
        options={{
          title: {
            display: props.displayTitle,
            text: "Largest Cities In " + props.location,
            fontSize: 25
          },
          legend: {
            display: props.displayLegend,
            position: props.legendPosition
          }
        }}
      />
      {/* <Bar
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Largest Cities In '+this.props.location,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />

        <Line
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Largest Cities In '+this.props.location,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />

        <Pie
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Largest Cities In '+this.props.location,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        /> */}
    </div>
  );
}

export default Graphs;
