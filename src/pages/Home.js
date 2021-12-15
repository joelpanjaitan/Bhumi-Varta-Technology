import { Grid, Button, Stack, Pagination } from "@mui/material";
import Navbar from "../components/Navbar";
function Home() {
  return (
    <>
      <Grid container spacing={2} alignItems="stretch">
        <Grid item sm={12} style={{ display: "flex" }} xs={12}>
          <Navbar></Navbar>
        </Grid>
        <Grid item xs={4}>
          <p>Left sidebar</p>
        </Grid>
      </Grid>
      <h1>this is home</h1>
    </>
  );
}

export default Home;
