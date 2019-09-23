import React, { Component } from 'react';
import Graphs from './Graphs';

class Graph extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets:[
          {
            label:'dataset 1',
            data:[
              617594,
              181045,
              153060,
              106519,
              105162,
              905072
            ],
            backgroundColor:'rgba(255, 99, 132, 0.6)'
          },
                    {
            label:'dataset 2',
            data:[
              105162,
              181045,
              617594,
              153060,
              806519,
              95072
            ],
            backgroundColor:'rgba(54, 162, 235, 0.6)'
          },
                    {
            label:'dataset 3',
            data:[
              181045,
              617594,
              106519,
              105162,
              95072,
              153060
            ],
            backgroundColor:'rgba(255, 206, 86, 0.6)'
          },
                    {
            label:'dataset 4',
            data:[
              95072,
              153060,
              181045,
              617594,
              105162,
              106519
            ],
            backgroundColor:'rgba(75, 192, 192, 0.6)'
          },
                    {
            label:'dataset 5',
            data:[
              106519,
              153060,
              181045,
              617594,
              95072,
              105162
            ],
            backgroundColor:'rgba(153, 102, 255, 0.6)'
          },
                    {
            label:'dataset 6',
            data:[
              181045,
              105162,
              95072,
              106519,
              153060,
              617594
            ],
            backgroundColor:'rgba(255, 159, 64, 0.6)'
          },
                    {
            label:'dataset 7',
            data:[
              106519,
              181045,
              105162,
              95072,
              617594,
              153060
            ],
            backgroundColor:'rgba(255, 99, 132, 0.6)'
          }






        ]
      }
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Spider Graphs R Us</h2>
        </div>
        <Graphs chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom"/>
      </div>
    );
  }
}

export default Graph;