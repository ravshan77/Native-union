import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  AppBar:{
      backgroundColor:"#000",
    height: "35px",
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
    [theme.breakpoints.up("lg")]: {
      display: "block",
    },
},
h1:{
      paddingTop:"8px",
      fontSize:"16px",
      textAlign:"center",
      fontWeight:'normal',
      letterSpacing:"3px",
color: "#fff",
      [theme.breakpoints.down("sm")]: {
        fontSize:"14px",
        letterSpacing:"1px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize:"10px",
      },
  }
}));

export default function TopHeader() {
  const classes = useStyles();

  return (
    <div>

      <div position="static" className={classes.AppBar}>
          <h1 className={classes.h1}>FREE SHIPPING ON ALL ORDERS OVER ЛВ454,000.00 UZS</h1>
      </div>

     </div>
  );
}
