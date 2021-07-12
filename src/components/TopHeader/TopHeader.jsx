import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  AppBar: {
    backgroundColor: "#000",
    height: "35px",
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
    [theme.breakpoints.up("lg")]: {
      display: "block",
    },
  },
  h1: {
    paddingTop: "8px",
    fontSize: "16px",
    textAlign: "center",
    fontWeight: "normal",
    letterSpacing: "3px",
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      letterSpacing: "1px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
    },
  },
}));



const TopHeader = () => {
  const classes = useStyles();
  const{t,i18n} = useTranslation()

  return (
    <div className={classes.div}>
      <div position="static" className={classes.AppBar}>
        <h1 className={classes.h1}>
        {t("topHeader")}
        </h1>
      </div>
    </div>
  );
}

export default TopHeader;