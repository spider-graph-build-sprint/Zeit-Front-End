import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Clear from "@material-ui/icons/Clear";
import React, { useEffect } from "react";
// import GraphCard from "./GraphCard";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { deleteGraph, getGraphs } from "../reducers/graphs/actions";

const Dashboard = props => {
  useEffect(() => {
    props.getGraphs();
  }, []);

  return (
    <>
      <Container>
        <Grid container spacing={1}>
          {props.graphs.length === 0 &&
            props.graphs.map(graph => {
              return (
                <>
                  <Grid item xs={1}>
                    <IconButton onClick={() => props.deleteGraph(graph.name)}>
                      <Clear />
                    </IconButton>
                  </Grid>
                  <Grid item xs={11}>
                    <Card>
                      <CardContent>
                        <Typography variant="h5" component="h2">
                          Name of the graph: {graph.name}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </>
              );
            })}
          {/* <Card onClick={() => {props.history.push("add-graph")}}>
                    
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                New graph
                            </Typography>
                        </CardContent>
                    </Card> */}
          <button
            onClick={() => {
              props.history.push("add-graph");
            }}
          >
            New graph
          </button>
        </Grid>
        {/* <Link to="/add-graph" component={Link}>add a new graph</Link> */}
      </Container>
    </>
  );
};

const mapPropsToState = state => {
  return {
    graphs: state.graph.graphs
  };
};

export default withRouter(
  connect(
    mapPropsToState,
    { getGraphs, deleteGraph }
  )(Dashboard)
);
