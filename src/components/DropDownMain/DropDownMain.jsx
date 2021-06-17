import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import AppBar from "@material-ui/core/AppBar";
import "./DropDownMain.css"


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor:"#000",
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
  AppBar:{
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
    top:"45px",
    boxShadow: "-15px 3px 6px #DFE2E5 ",
    // borderTop: "0.1px solid #F2F3F4",
    borderBottom: "0.1px solid #F2F3F4",
  },
  button: {
    height: "30px",
    marginLeft: "25px",
    marginBottom:"15px",
    border:"#FFF",
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
             <p className={`${openOne ? "activveOn_btn" : "activveOff_btn"}`}>Shop By Collection</p>
            </button>
            <button className={classes.button} onMouseOver={handleClickTwo}>
              <p className={`${openTwo ? "activveOn_btn" : "activveOff_btn"}`}>Shop By Device</p>
            </button>
            <button className={classes.button} onMouseOver={handleClickThree}>
             <p className={`${openThree ? "activveOn_btn" : "activveOff_btn"}`}>Explore</p>
            </button>
          </div>
          </div>
          <AppBar position="absolute" className={classes.dropGroup}>
            {openOne ? (
              <div className={classes.dropdown}>
                <div className={classes.drop}>
                  <h3>Shop</h3>
                  <p className="productName">All Products</p>
                  <p className="productName">Best Selices</p>
                  <p className="productName">New Releases</p>
                  <p className="productName">Last Change To Buy</p>
                  <p className="productName">Wireless Change</p>
                  <p className="productName">MagSafe Accesuares </p>
                  <p className="productName">Multi-Drivece Wireless Charges</p>
                  <p className="productName">Single Driver Wireles Charges</p>
                  <p className="productName">Portople Wireles Charger</p>
                </div>
                <div className={classes.drop}>
                  <h3>Protect & Carry</h3>
                  <div>
                    <p className="productName">Iphone Casses</p>
                    <p className="productName">AirPods Casses</p>
                    <p className="productName">Ipad Selices</p>
                    <p className="productName">MacBook Seelvces</p>
                    <p className="productName">Accesuary Organizes</p>
                    <p className="productName">Iphone Sceern Protector</p>
                  </div>
                </div>
                <div className={classes.drop}>
                  <h3>Cables</h3>
                  <p className="productName">USB-A to Linghting</p>
                  <p className="productName">USB-C to Linghting</p>
                  <p className="productName">USB-C to USB-C</p>
                  <p className="productName">Unversal Cabel</p>
                  <p className="productName">USB-A to USB-C</p>
                  <p className="productName">Apple Watch Cabel</p>
                  <p className="productName">Audio & Video</p>
                  <p className="productName">Which Cabel Do I Need</p>
                </div>
                <div className={classes.drop}>
                  <h3>Power Soucres</h3>
                  <p className="productName">Wall Charges</p>
                  <p className="productName">Power Banks</p>
                  <p className="productName">Car Charges</p>
                  <p className="productName">HUBS</p>
                  <p className="productName">USB-Charge Smart Hub</p>
                </div>
              </div>
            ) : null}
            {openTwo ? (
              <div className={classes.dropdown}>
                <div className={classes.drop}>
                  <h3>IPHONE</h3>
                  <p className="productName">Iphone 12 mine</p>
                  <p className="productName">Iphone 12</p>
                  <p className="productName">Iphone 12 Pro</p>
                  <p className="productName">Iphone 12 Pro Max</p>
                  <p className="productName">Iphone 11 Pro</p>
                  <p className="productName">Iphone 11</p>
                  <p className="productName">Iphone 11 Pro Max</p>
                </div>
                <div className={classes.drop}>
                  <h3>AirPods</h3>
                  <p className="productName">Iphone Xs</p>
                  <p className="productName">Iphone XR</p>
                  <p className="productName">Iphone Xs Max</p>
                  <p className="productName">Iphone SE</p>
                  <p className="productName">AirPods</p>
                  <p className="productName">AirPods Pro</p>
                  <p className="productName">AirPods Gen 1 & 2</p>
                </div>
                <div className={classes.drop}>
                  <h3>IPAD</h3>
                  <p className="productName">Ipad Pro 11"</p>
                  <p className="productName">Ipad Pro 12.9"</p>
                  <p className="productName">Ipad Air (4th Gen)</p>
                  <p className="productName">Ipad (7th & 8th Gen)</p>
                  <p className="productName">Apple Watch</p>
                  <p className="productName">Apple Watch (38mm / 40mm)</p>
                  <p className="productName">Apple Watch (40mm / 42mm)</p>
                </div>
                <div className={classes.drop}>
                  <h3>MAC</h3>
                  <p className="productName">12' MacBooks</p>
                  <p className="productName">13' MacBooks</p>
                  <p className="productName">15' MacBooks</p>
                  <p className="productName">16' MacBooks</p>
                  <p className="productName">IMac 24'</p>
                </div>
              </div>
            ) : null}
            {openThree ? (
              <div className={classes.dropdown}>
                <div className={classes.drop}>
                  <h3>Collections</h3>
                  <p className="productName">The Heritage colloction</p>
                  <p className="productName">Sage Collection</p>
                  <p className="productName">Class Latther Collision</p>
                  <p className="productName">PD Charning Collection</p>
                  <p className="productName">Work Home Collection</p>
                </div>
                <div className={classes.drop}>
                  <h3>Collabitrions</h3>
                  <p className="productName">Masion Kitsune x Nateve Union</p>
                  <p className="productName">Tom Dixon x Nateve Union</p>
                  <p className="productName">La Boite Conopet x Nateve</p>
                </div>
                <div className={classes.drop}>
                  <h3>JournalL</h3>
                  <p className="productName">Discover Over Jurnal</p>
                </div>
              </div>
            ) : null}
          </AppBar>
        </AppBar>
    </ClickAwayListener>
  );
}
