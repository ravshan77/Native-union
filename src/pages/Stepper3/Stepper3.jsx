import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import PaymentIcon from "@material-ui/icons/Payment";
import visa from "../../assets/StoreImg/VISA-logo.png";
import unnamed from "../../assets/StoreImg/unnamed.jpg"
import Button from "../../components/Button/Button";
import Typography from "@material-ui/core/Typography";
import "./Stepper3.css";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "30px 0",
    boxShadow: "1px 1px 5px black",
  },
  CardHeader: {
    backgroundColor: "#fff",
  },
  PaymentIcon: {
    width: "100%",
    height: "100%",
  },
});

export default function FormPropsTextFields({
  register,
  handleSubmit,
  onSubmit,
  Input,
  Format,
  handleBack,
}) {
  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="two_Store">
        <h3 style={{ textAlign: "center" }}>payment</h3>
        <Card className={classes.root}>
          <div className="Store_card_header">
            <div className="Store_card_header_img">
              <PaymentIcon className={classes.PaymentIcon} />
            </div>
            <div className="Store_card_header_img">
              <img src={visa} />
            </div>
          </div>
          <div className="two_Store">
            <Format
              label="Card Number"
              formated="#### #### #### ####"
              register={register}
              required
            />
            <Input
              label="Name on Card"
              type="text"
              register={register}
              required
            />
            <div className="two_stepper_df">
              <Format
                label="Expiration date (MM / YY)"
                formated="##/##"
                register={register}
                required
              />
              <Format
                label="Security code"
                formated="#####"
                register={register}
                required
              />
            </div>
          </div>
        </Card>
        <Card className={classes.root}>
          <div className="df pad">
            <div className="df">
              <div className="Store_card_rec_img">
                <img src={unnamed} />
              </div>
              <div className="circlae">|</div>
            </div>
            <Typography variant="caption" component="p">
              By completing your order, you will check out with Reach UK, our
              preferred international seller, and agree to the Terms of Service
              of Reach UK.
            </Typography>
          </div>
        </Card>
      </div>
      <Button
        onClick={handleBack}
        buttonStyle="btn--white"
        buttonPosition="stepper2_form_btn"
        buttonSize="btn--medum"
      >
        Back
      </Button>
      <Button
        type="submit"
        buttonStyle="btn--white"
        buttonPosition="stepper2_form_btn"
        buttonSize="btn--medum"
      >
        continue
      </Button>
    </form>
  );
}
