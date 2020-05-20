import React from "react";
import Head from "next/head";
import ToDoList from "../components/ToDoList";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

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
            marginTop: "20px",
          }}
        >
          <Grid item>
            <Typography variant="h3" color="primary" margin="30px">
              To Do List
            </Typography>
          </Grid>
        </Grid>
        <ToDoList />
      </main>
      <footer></footer>
    </ThemeProvider>
  );
}
