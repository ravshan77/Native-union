import React from "react";
import { Container, Grid } from "@material-ui/core";

const Loader = () => {
  return (
    <div>
      <Container>
        <Grid
          container
          alignItems={"center"}
          justify={"center"}
          style={{ height: window.innerHeight - 50 }}
        >
          <Grid container alignItems={"center"} justify={"center"}>
            <div className="lds-spinner">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Loader;
