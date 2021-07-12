import React from "react";
import "./About.css";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";



const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    letterSpacing: "5px",
    padding: "20px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "25px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "37px",
    },
  },
}));

const About = () => {
  const classes = useStyles();
  const{t,i18n} = useTranslation()

  return (
    <div className="about">
      <h3>{t("About")}</h3>
      <Typography variant="h1" className={classes.title}>
        Native Union
      </Typography>
      <p>
        {t("Born out")}Born out of a shared love of good design & quality products, we create
        considered solutions fit for the modern lifestyle. Always driven by
        passion, we work to empower others to live the same way.
      </p>
    </div>
  );
};

export default About;
