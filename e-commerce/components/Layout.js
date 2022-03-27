import React ,{useContext}from "react";
import Head from "next/head";

import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
  IconButton,
  Switch,
  ThemeProvider,
  CssBaseline
} from "@material-ui/core";
import Cookies from "js-cookie"
import {
 
  createMuiTheme,
 
} from "@material-ui/core/styles";
import useStyles from "../utils/styles";
import NextLink from "next/link";
import { AccountCircle, ShoppingCart } from "@material-ui/icons";
import { Store } from '../utils/Store';
const Layout = ({ title, children, description }) => {
  const {state , dispatch} = useContext(Store)
  const { darkMode} = state;

  const theme = createMuiTheme({
    typography:{
      h1:{
        fontSize:"1.6rem",
        fontWeight:400,
        margin:"1rem 0"
      },
      h2:{
        fontSize:"1.4rem",
        fontWeight:400,
        margin:"1rem 0"
      }
    },
    palette:{
      type:darkMode?'dark':'light',
      primary:{
        main:"#f0c000"
      },
      secondary:{
        main:"#208080"
      }
    }
    
  })
  const classes = useStyles();

const changeMode = () => {
  dispatch({type:darkMode? "DARK_MODE_OFF" : "DARK_MODE_ON"})
  const newDarkMOde = !darkMode
  Cookies.set("darkmode",newDarkMOde? "ON":"OFF")
}
  return (
    <div>
      <Head>
        <meta name="description" content={description?description:"soon..."}/>
        <title>{title ? `${title} | e-commerce` : "e-commerce"}</title>
      </Head>
      <ThemeProvider theme={theme}>
<CssBaseline/>
     
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>

              <Typography variant="h1" className={classes.brand}>
                E-commerce
              </Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <Switch  checked={darkMode} onChange={changeMode}></Switch>
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
      </ThemeProvider>
    </div>
  );
};

export default Layout;
