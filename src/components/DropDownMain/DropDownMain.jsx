import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"
import "./DropDownMain.css";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#000",
    boxShadow: "none",
    zIndex: 999999999999999,
  },
  dropdown: {
    padding: theme.spacing(1),
    color: "black",
    display: "flex",
    width: "90%",
    margin: "0 auto",
  },
  AppBar: {
    background: "#fff",
    display: "flex",
  },
  btnGroup: {
    margin: "0 auto",
    display: "flex",
  },
  dropGroup: {
    background: "#FFF",
    margin: "0 auto",
    top: "45px",
    boxShadow: "-15px 3px 6px #DFE2E5 ",
    borderBottom: "0.1px solid #F2F3F4",
  },
  button: {
    height: "30px",
    marginLeft: "35px",
    marginBottom: "15px",
    border: "#FFF",
    background: "none",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  drop: {
    width: "30%",
    margin: "10px",
  },
}));

export default function DropDownMain() {
  const classes = useStyles();
  const [openOne, setOpenOne] = React.useState(false);
  const [openTwo, setOpenTwo] = React.useState(false);
  const [openThree, setOpenThree] = React.useState(false);

  // Toggle Link
  const handleClickOne = () => {
    setOpenOne(true);
    setOpenTwo(false);
    setOpenThree(false);
  };

  const handleClickTwo = () => {
    setOpenTwo(true);
    setOpenOne(false);
    setOpenThree(false);
  };

  const handleClickThree = () => {
    setOpenThree(true);
    setOpenOne(false);
    setOpenTwo(false);
  };

  const handleClickAway = () => {
    setOpenOne(false);
    setOpenTwo(false);
    setOpenThree(false);
  };

  const{t,i18n} = useTranslation()
  return (
    <ClickAwayListener
      mouseMoveEvent="onMouseDown"
      touchEvent="onTouchStart"
      onClickAway={handleClickAway}
    >
      <AppBar position="relative" className={classes.root}>
        <div position="" className={classes.AppBar}>
          <div className={classes.btnGroup}>
            <button className={classes.button} onMouseOver={handleClickOne}>
              <p className={`${openOne ? "activveOn_btn" : "activveOff_btn"}`}>
              {t("dropdown1")}

              </p>
            </button>
            <button className={classes.button} onMouseOver={handleClickTwo}>
              <p className={`${openTwo ? "activveOn_btn" : "activveOff_btn"}`}>
              {t("dropdown2")}
              </p>
            </button>
            <button className={classes.button} onMouseOver={handleClickThree}>
              <p
                className={`${openThree ? "activveOn_btn" : "activveOff_btn"}`}
              >
                              {t("dropdown3")}
              </p>
            </button>
          </div>
        </div>
        <AppBar position="absolute" className={classes.dropGroup}>
          {openOne ? (
            <div className={classes.dropdown}>
              <div className={classes.drop}>
                <Link to="/allProducts">
                  {" "}
                  <h3> {t("shop")}</h3> 
                  <p className="productName"> {t("ALL PRODUCTS")}</p>
                  <p className="productName">{t("BEST SELICES")}</p>
                  <p className="productName">{t("NEW RELEASES")}</p>
                  <p className="productName">{t("LAST CHANGE TO BUY")}</p>
                  <p className="productName">{t("WIRELESS CHANGE")}</p>
                  <p className="productName">{t("MAGSAFE ACCESUARES")} </p>
                  <p className="productName">{t("MULTI-DRIVECE WIRELESS CHARGES")}</p>
                  <p className="productName">{t("SINGLE DRIVER WIRELES CHARGES")}</p>
                  <p className="productName">{t("PORTOPLE WIRELES CHARGER")}</p>
                </Link>
              </div>
              <div className={classes.drop}>
                <Link to="/phone">
                  <h3>Xiaomi Redmi </h3>
                  <div>
                    <p className="productName">Xiomi Casses</p>
                    <p className="productName">Redmi Casses</p>
                    <p className="productName">Xioami Selices</p>
                    <p className="productName">Xiaomi Seelvces</p>
                    <p className="productName">Xiaomi MI Organizes</p>
                    <p className="productName">Redmi Sceern Protector</p>
                  </div>
                </Link>
              </div>
              <div className={classes.drop}>
                <Link to="/cabeles">
                  <h3>Cables</h3>
                  <p className="productName">USB-A to Linghting</p>
                  <p className="productName">USB-C to Linghting</p>
                  <p className="productName">USB-C to USB-C</p>
                  <p className="productName">Unversal</p>
                  <p className="productName">USB-A to USB-C</p>
                  <p className="productName">APPLE WATCH CABEL</p>
                  <p className="productName">Audio & Video</p>
                  <p className="productName">WHICH CABEL DO I NEED</p>
                </Link>
              </div>
              <div className={classes.drop}>
                <Link to="/notebook">
                  <h3>Acer</h3>
                  <p className="productName">Acer Pro 7</p>
                  <p className="productName">Acer Air3</p>
                  <p className="productName">Acer Gameing Pro</p>
                  <p className="productName">NoteBook ACER</p>
                  <p className="productName">Acer NoteBook Laptop 15</p>
                </Link>
              </div>
            </div>
          ) : null}
          {openTwo ? (
            <Link to="/airPods">
              <div className={classes.dropdown}>
                <div className={classes.drop}>
                  <Link to="/phone">
                    <h3>IPHONE</h3>
                    <p className="productName">Iphone 12 mine</p>
                    <p className="productName">Iphone 12</p>
                    <p className="productName">Iphone 12 Pro</p>
                    <p className="productName">Iphone 12 Pro Max</p>
                    <p className="productName">Iphone 11 Pro</p>
                    <p className="productName">Iphone 11</p>
                    <p className="productName">Iphone 11 Pro Max</p>
                  </Link>
                </div>
                <div className={classes.drop}>
                  <Link to="/airPods">
                    <h3>AirPods</h3>
                    <p className="productName">Iphone Xs</p>
                    <p className="productName">Iphone XR</p>
                    <p className="productName">Iphone Xs Max</p>
                    <p className="productName">Iphone SE</p>
                    <p className="productName">AirPods</p>
                    <p className="productName">AirPods Pro</p>
                    <p className="productName">AirPods Gen 1 & 2</p>
                  </Link>
                </div>
                <div className={classes.drop}>
                  <Link to="/phone">
                    <h3>IPAD</h3>
                    <p className="productName">Ipad Pro 11"</p>
                    <p className="productName">Ipad Pro 12.9"</p>
                    <p className="productName">Ipad Air (4th Gen)</p>
                    <p className="productName">Ipad (7th & 8th Gen)</p>
                    <p className="productName">Apple Watch</p>
                    <p className="productName">Apple Watch (38mm / 40mm)</p>
                    <p className="productName">Apple Watch (40mm / 42mm)</p>
                  </Link>
                </div>
                <div className={classes.drop}>
                  <Link to="/notebook">
                    <h3>MAC</h3>
                    <p className="productName">12' MacBooks</p>
                    <p className="productName">13' MacBooks</p>
                    <p className="productName">15' MacBooks</p>
                    <p className="productName">16' MacBooks</p>
                    <p className="productName">IMac 24'</p>
                  </Link>
                </div>
              </div>
            </Link>
          ) : null}
          {openThree ? (
            <Link to="/journal">
              <div className={classes.dropdown}>
                <div className={classes.drop}>
                  <h3>{t("Collection")}</h3>
                  <p className="productName"> {t("The Heritage")}</p>
                  <p className="productName">{t("Sage Collection")} </p>
                  <p className="productName">{t("Class Latther Collision")}</p>
                  <p className="productName">{t("PD Charning Collection")}</p>
                  <p className="productName">{t("Work Home Collection")}</p>
                </div>
                <div className={classes.drop}>
                  <h3>{t("Collabitrions")}</h3>
                  <p className="productName">{t("Masion Kitsune x Nateve Union")}</p>
                  <p className="productName">{t("Tom Dixon x Nateve Union")}</p>
                  <p className="productName">{t("La Boite Conopet x Nateve")}</p>
                </div>
                <div className={classes.drop}>
                  <h3>{t("JournaL")}</h3>
                  <p className="productName">{t("Discover Over Jurnal")}</p>
                </div>
              </div>
            </Link>
          ) : null}
        </AppBar>
      </AppBar>
    </ClickAwayListener>
  );
}
