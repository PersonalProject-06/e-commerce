import React from "react";
import Head from "next/head";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
  IconButton,
} from "@material-ui/core";
import useStyles from "../utils/styles";
import NextLink from "next/link";
import { AccountCircle, ShoppingCart } from "@material-ui/icons";
const Layout = ({ title, children, description }) => {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <meta name="description" content={description?description:"soon..."}/>
        <title>{title ? `${title} | e-commerce` : "e-commerce"}</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography variant="h5" className={classes.brand}>
                E-commerce
              </Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/cart" passHref>
              <Link>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <ShoppingCart fontSize="large" />
                </IconButton>
              </Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <AccountCircle fontSize="large" />
                </IconButton>
              </Link>
            </NextLink>
          </div>
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
