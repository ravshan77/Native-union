import React from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
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
import "./Header.css";
import MenuCard from "../MenuCard/MenuCard";
import CloseIcon from "@material-ui/icons/Close";
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import SubCard from "../SubCard/SubCard"
import ClickAwayListener from "@material-ui/core/ClickAwayListener";



const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 29,
    top: 10,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1, 
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  AppBar: {
    background:"#FFF",
    color:"#000",
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
  title:{
    fontSize:"20px",
    fontWeight:"bold",
    letterSpacing:"5px",

    [theme.breakpoints.up("sm")]: {
      fontSize:"24px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize:"29px",
    },
  },
  MenuIcon:{
    color:"#686E64",
  },
}));

export default function Header() {
  const classes = useStyles();

  const [MenuCardDiv, setMenuCardDiv] = React.useState(false);
  const [SubCardDiv, setSubCardDiv] = React.useState(false);
  
  const handleMenuCardDiv = () => {
    setMenuCardDiv(!MenuCardDiv);
    setSubCardDiv(false);
  };

  
  const handleSubCardDiv = () => {
    setSubCardDiv(!SubCardDiv);
    setMenuCardDiv(false);
  };

  const handleClickAway = () => {
    setMenuCardDiv(false);
    setSubCardDiv(false);
  };
  
  // Language
  const [language, setLanguage] = React.useState("en");

  return (
    <ClickAwayListener
      mouseEvent="onMouseDown"
      touchEvent="onTouchStart"
      onClickAway={handleClickAway}
    >
    <AppBar position="sticky" className={classes.root}>
      <div className={`${MenuCardDiv ? "menuCardDiv" : "menuOffDispN"}`}>
        <MenuCard />
      </div>
      <div className={`${SubCardDiv ? "subCardDiv" : "subOffDispN"}`}>
        <SubCard setSubCardDiv={setSubCardDiv}/>
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
                {MenuCardDiv ? <CloseIcon className={classes.MenuIcon} /> : <MenuIcon className={classes.MenuIcon}/>}
              </IconButton>
            </div>
            <div className={classes.searchMedia}>
              <div className={classes.search}>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
                <SearchIcon className={classes.searchIcon} />
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
                  >
                    <MenuItem value={"en"}>en</MenuItem>
                    <MenuItem value={"ru"}>ru</MenuItem>
                    <MenuItem value={"uz"}>uz</MenuItem>
                  </Select>
                </IconButton>
              </div>
              <IconButton
                onClick={handleSubCardDiv}
              >
              <StyledBadge badgeContent={4} color="secondary">
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
    </AppBar>
    </ClickAwayListener>
  );
}
