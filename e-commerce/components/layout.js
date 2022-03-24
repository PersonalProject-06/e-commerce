import React from "react";
import Head from "next/head";
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";

const layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>e-commerce</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4">E-commerce</Typography>
          
        </Toolbar>
        
      </AppBar>
      <Container>{children}</Container>
      <footer>
          <Typography variant="h4">All right reserved &copy; 2022</Typography>
      </footer>
    </div>
  );
};

export default layout;
