import React from "react";
import Head from "next/head";
import ToDoList from "../components/ToDoList";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>ToDo List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Grid
          container
          spacing={2}
          justify="center"
          style={{
            marginTop: "30px",
          }}
        >
          <Grid item>
            <Typography variant="h3" color="primary" margin="30px">
              To Do List
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          justify="center"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "30px",
          }}
        >
          <Grid item xs={12} sm={6}>
            <ToDoList />
          </Grid>
        </Grid>
      </main>
      <footer></footer>
    </ThemeProvider>
  );
}
