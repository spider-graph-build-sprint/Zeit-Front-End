import React, {useEffect} from "react";
import GraphCard from "./GraphCard";
// import axios from "axios";

/*
{
   "name": "Make tea1",
   "legs": ["leg1", "leg1", "leg2"]
}
{
   "title": "dataset1",
   "points": [2,3,5]
}
*/

const fakeData = [
    {
        name: "graph one",
        imgUrl: "../images/radar_graph.png"
    },
    {
        name: "graph two",
        imgUrl: "../../images/radar_graph.png"
        
    },
    {
        name: "graph three",
        imgUrl: "../../../images/radar_graph.png"
    }
];

const Dashboard = () => {
    // useEffect(() => {
    //     axios.get("https://spider-back-end.herokuapp.com/api/graphs/")
    //         .then(resp => {
    //             console.log(resp);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // },[]);
    
    return (
        <div className="dashboard">
            {
                fakeData.map(val => {
                    return <GraphCard name={val.name} imgUrl={val.imgUrl}/>
                })
            }
        </div>
    );
}

export default Dashboard;