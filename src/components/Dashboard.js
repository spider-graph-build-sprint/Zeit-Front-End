import React from "react";
import GraphCard from "./GraphCard";

const fakeData = {
    name: "Graph 1",
    path: "my-graph",
    imgUrl: "https://cdn.pixabay.com/photo/2019/09/13/14/31/elephant-4474027__340.jpg"
}

const Dashboard = () => {
    return (
        <GraphCard name={fakeData.name} path={fakeData.path} imgUrl={fakeData.imgUrl}/>
    );
}

export default Dashboard;