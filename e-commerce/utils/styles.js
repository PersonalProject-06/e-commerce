import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#203040",
    "& a": {
      color: "#fff",
      marginLeft: 10,
    },
  },
  grow: {flexGrow:1},
  brand: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  section:{
    marginTop:10,
    marginBottom:10
  }
  ,
  main: {
    minHeight: "80vh",
  },
  center : {display:"flex",alignItems:"center"},
  footer: {
    textAlign: "center",
  },
});

export default useStyles;
