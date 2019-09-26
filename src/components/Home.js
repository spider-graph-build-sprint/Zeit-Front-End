import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
// import AddGraph from "./AddGraph";
import Graph from "./Graph";

function Home(props) {
  const [list, setList] = useState([]);

  const addUser = user => {
    axiosWithAuth()
      .post("http://")
      .then(rez => setList(rez.data))
      .catch(err => console.error(err));
  };

  const updateUser = user => {
    axiosWithAuth()
      .put(`http://`)
      .then(res => setList(res.data))
      .catch(err => console.error(err));
  };

  const delUser = id => {
    axiosWithAuth()
      .delete(`http://`)
      .then(rez => setList(rez.data))
      .catch(err => console.error(err));
  };

  //  Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      {/* <AddGraph /> */}

      <Graph
        {...props}
        // grabUsers={grabUsers}
        addUser={addUser}
        updateUser={updateUser}
        delUser={delUser}
        list={list}
      />

      {/*  <Graph /> */}
    </>
  );
}

export default Home;
