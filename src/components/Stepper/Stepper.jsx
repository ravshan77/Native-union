import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Stepper1 from "../../pages/Stepper1/Stepper1";
import Stepper2 from "../../pages/Stepper2/Stepper2";
import Stepper3 from "../../pages/Stepper3/Stepper3";
import { useForm } from "react-hook-form";
import NumberFormat from "react-number-format";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import {emptyCard} from "../../store/item/item-action"
import { useDispatch } from "react-redux";


const useStyles = makeStyles((theme) => ({
  backButton: {
    opacity: 0,
    width: 0,
    height: 0,
    cursor:"auto",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  Input:{
    width:"100%",
    padding: theme.spacing(1.1),
    border: "none",
    outline: "none",
    zIndex:0,
    borderRadius:0,
    background: "#fffff9",
  }
}));

//  Stepper Header Text
function getSteps() {
  return [
    "Store",
    "Adress",
    "Payment",
  ];
}


export default function Store() {

  const classes = useStyles();
  const steps = getSteps();
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
  const [activeStep, setActiveStep] = React.useState(0);

  // Order and User data for
  const onSubmit = (data) => {
    // alert(JSON.stringify(data));
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  

  const Input = ({ label, register, required, type }) => (
    <TextField
      required={required}
      id="outlined-password-input"
      label={label}
      type={type}
      autoComplete="current-password"
      variant="outlined"
      {...register(label, { required })}
      className={classes.Input}
    />
  );

  const Format = ({ label, register, required, formated }) => (
    <NumberFormat
      customInput={TextField}
      variant="outlined"
      format={formated}
      mask="_"
      {...register(label, { required })}
      id="outlined-password-input"
      label={label}
      required={required}
      autoComplete="current-password"
      className={classes.Input}
    />
  );

  function handleNext() {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    dispatch(emptyCard([]))
  };

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <Stepper1 
        handleNext={handleNext}
        Input={Input} 
        register={register}
        />;
      case 1:
        return (
          <Stepper2
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          Input={Input}
          Format={Format}
          handleBack={handleBack}
            format={"format"}
          />
        );
      case 2:
        return <Stepper3 
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        Input={Input}
        Format={Format}
        handleBack={handleBack}
        format={"format"}
        />;
      default:
        return "Unknown stepIndex";
    }
  }
const link = <a style={{fontSize:"16px",fontWeight:"bold"}} href="https://www.nativeunion.com/">nativeunion.com</a>
  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div >
        {activeStep === steps.length ? (
          <div>
            <p className="end_text">
                Assalomu alaykum!.
              Men Fayziyev Ravshan bu saytni boshlang'ich uz portfoliomga qushish uchun FrontEnd qismini yasadim.
              Bu saytni {link} saytiga iloji boricha uxshatishga harakat qildim.
              Agar kamchilik va xatolar bulsa oldindan uzur surayman.
              Saytni yasashda quydagi texnalogiyalardan foydalandim: Html, Css, Java Script(ES6), ReactJs, Material-ui, Redux, FireBase, react-hooks, react-hook-form, react-number-format, react-router-dom, i18next, redux-persist, redux-logger, vanilla-tilt.
              Hozircha Api ni qulbola shakillantidim Va BackEnd qismi Yo'qligi sababli Admin Panile qismini shu jumladan Fetch va Axios texnalogiyalaridan ham foydalanmadim.
              Taklif va kamchiliklar yuzasidan +998939301718 raqamiga yoki mygithub77@gmail.com manziliga xabar qoldirishingiz mumkin.
              Etiboringiz uchun Raxmat :). 
</p>
          <Link to="/">  <Button onClick={handleReset}>Home</Button> </Link>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button className={classes.backButton} onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
