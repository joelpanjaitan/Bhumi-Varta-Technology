import { Grid, Button, Stack, Pagination } from "@mui/material";
import Navbar from "../components/Navbar";
function Home() {
  return (
    <>
      <Grid container spacing={2} alignItems="stretch">
        <Grid item sm={12} style={{ display: "flex" }} xs={12}>
          <Grid sm={11} xs={4}>
            <Navbar></Navbar>
          </Grid>
          <Grid sm={1} xs={8}>
            <p>Photo</p>
          </Grid>
        </Grid>
        <Grid item xs={5} sm={12} style={{ display: "flex" }}>
          <Grid ml={2} sm={2}>
            <p>Left sidebar</p>
          </Grid>
          <Grid sm={8}>
            <h1>Map content</h1>
          </Grid>
          <Grid sm={2}>
            <p>Right sidebar</p>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
