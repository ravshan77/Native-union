import React, { useEffect,useState } from "react";
import { makeStyles, fade ,withStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import DropDownMain from "../DropDownMain/DropDownMain";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MenuCard from "../MenuCard/MenuCard";
import CloseIcon from "@material-ui/icons/Close";
import Badge from "@material-ui/core/Badge";
import SubCard from "../SubCard/SubCard";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import SettingsInputHdmiIcon from "@material-ui/icons/SettingsInputHdmi";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import HeadsetIcon from "@material-ui/icons/Headset";
import { Link, NavLink } from "react-router-dom";
import {useSelector} from "react-redux"
import "./Header.css";
import {useTranslation} from "react-i18next"

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 29,
    top: 10,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    zIndex:9999999999999999999999999999999,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  AppBar: {
    background: "#FFF",
    color: "#000",
  },
  Toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchMedia: {
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
    [theme.breakpoints.up("lg")]: {
      display: "block",
    },
  },
  menuButtonMedia: {
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
    [theme.breakpoints.down("lg")]: {
      display: "blok",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    border: "1px solid black",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    marginRight: "8px",
    cursor: "pointer",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(-1)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    letterSpacing: "5px",

    [theme.breakpoints.up("sm")]: {
      fontSize: "24px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "29px",
    },
  },
  MenuIcon: {
    color: "#686E64",
  },
  navigBtn: {
    color: "black",
  },
}));

const Header = ({ props }) => {
  const classes = useStyles();
  const {card} = useSelector((state) => state.StoreData)
  
  // Store bottom IconHeader 
  const { history } = props;
  const his = history.location.pathname;
  const sum = card.map((item) => {
    return item.count;
  });

  // Store count
  const collected = sum.reduce((a, b) => a + b, 0);

  // Navigation Menu Bar
  const [MenuCardDiv, setMenuCardDiv] = useState(false);
  const [SubCardDiv, setSubCardDiv] = useState(false);

  const handleMenuCardDiv = () => {
    setMenuCardDiv(!MenuCardDiv);
    setSubCardDiv(false);
  };

  const handleSubCardDiv = () => {
    setSubCardDiv(!SubCardDiv);
    setMenuCardDiv(false);
  };
// window toggle 
  const handleClickAway = () => {
    setMenuCardDiv(false);
    setSubCardDiv(false);
  };

  // Search Product
const [searchProduct,setSearchProduct] = useState("")

const handleSreache = (e) => {
  setSearchProduct(e.target.value)
}

// Language
  const [language, setLanguage] = useState("en");
  const {t,i18n} = useTranslation()
  
  useEffect(() => {
  if (language == "en") {
    i18n.changeLanguage("en")
  } else{
    i18n.changeLanguage("ру")
  }
},[language])

  return (
    <ClickAwayListener
      mouseEvent="onMouseDown"
      touchEvent="onTouchStart"
      onClickAway={handleClickAway}
    >
      <AppBar position="sticky" className={classes.root}>
        <div className={`${MenuCardDiv ? "menuCardDiv" : "menuOffDispN"}`}>
          <MenuCard setMenuCardDiv={setMenuCardDiv} />
        </div>
        <div className={`${SubCardDiv ? "subCardDiv" : "subOffDispN"}`}>
          <SubCard setSubCardDiv={setSubCardDiv} />
        </div>
        <AppBar position="sticky" className={classes.AppBar}>
          <div className="container">
            <div className={classes.Toolbar}>
              <div className={classes.menuButtonMedia}>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenuCardDiv}
                >
                  {MenuCardDiv ? (
                    <CloseIcon className={classes.MenuIcon} />
                  ) : (
                    <MenuIcon className={classes.MenuIcon} />
                  )}
                </IconButton>
              </div>
              <div className={classes.searchMedia}>
                <div className={classes.search}>
                  <InputBase
                    placeholder={t("Search")}
                    value={searchProduct}
                    onChange={handleSreache}
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ "aria-label": "search" }}
                  />
                  {searchProduct.length >3 &&
                  <Link to={`/filterProduct/${searchProduct}`}>
                  <SearchIcon className={classes.searchIcon} />
                  </Link>
                  }
                </div>
              </div>
              <Typography variant="h1" className={classes.title}>
                Native Union
              </Typography>
              <div style={{ display: "flex" }}>
                <div className={classes.searchMedia}>
                  <IconButton>
                    <AccountCircleOutlinedIcon />
                  </IconButton>
                  <IconButton>
                    <LanguageOutlinedIcon />
                    <Select
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className={classes.Select}
                      type="submit"
                    >
                      <MenuItem value={"en"}>en</MenuItem>
                      <MenuItem value={"ру"}>ru</MenuItem>
                    </Select>
                  </IconButton>
                </div>
                <IconButton onClick={handleSubCardDiv}>
                  <StyledBadge badgeContent={collected} color="secondary">
                    <LocalMallOutlinedIcon />
                  </StyledBadge>
                </IconButton>
              </div>
            </div>
          </div>
        </AppBar>
        <div className={classes.searchMedia}>
          <DropDownMain />
        </div>
        <div
          className={
            [
              "/products",
              "/airPods",
              "/cabeles",
              "/phone",
              "/notebook",
              "/allProducts",
              "/store",
            ].includes(his)
              ? "dbBn"
              : "dn"
          }
        >
            {" "}
            <button onClick={() => history.goBack()} className="nav-back">
              {" "}
              <ArrowBackIcon />{" "}
            </button>{" "}
          <BottomNavigation>
            <NavLink to="/phone" exact activeClassName="nav-NavLink">
              <BottomNavigationAction
                className={classes.navigBtn}
                label="Phone"
                value="phone"
                icon={<PhoneAndroidIcon />}
              />
            </NavLink>
            <NavLink to="/notebook" exact activeClassName="nav-NavLink">
              <BottomNavigationAction
                className={classes.navigBtn}
                label="NoteBook"
                value="notebook"
                icon={<LaptopMacIcon />}
              />
            </NavLink>
            <NavLink to="/airPods" exact activeClassName="nav-NavLink">
              {" "}
              <BottomNavigationAction
                className={classes.navigBtn}
                label="AirPods"
                value="airPods"
                icon={<HeadsetIcon />}
              />
            </NavLink>
            <NavLink to="/cabeles" exact activeClassName="nav-NavLink">
              {" "}
              <BottomNavigationAction
                className={classes.navigBtn}
                label="Cables"
                value="cabel"
                icon={<SettingsInputHdmiIcon />}
              />
            </NavLink>
          </BottomNavigation>
        </div>
      </AppBar>
    </ClickAwayListener>
  );
};

export default Header;
