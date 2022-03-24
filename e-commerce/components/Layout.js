import React from "react";
import Head from "next/head";
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";
import useStyles from "../utils/styles";
const Layout = ({ children }) => {
  const classes = useStyles();
  
  return (
    <div>
      <Head>
        <title>e-commerce</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography variant="h4">E-commerce</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography variant="h4">All right reserved &copy; 2022</Typography>
      </footer>
    </div>
  );
};

export default Layout;
