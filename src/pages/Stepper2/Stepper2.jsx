import React from "react";
import Button from "../../components/Button/Button";
import "./Stepper2.css";


export default function FormPropsTextFields({
  register,
  handleSubmit,
  onSubmit,
  Input,
  Format,
  handleBack,
}) {


  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <div className="two_Store">
      <Input  label="Email" type="email" register={register} required />
      <div className="two_stepper_df">
        <Input className="input" label="First Name" type="text" register={register} required />
        <Input label="Last Name" type="text" register={register} required />
      </div>
      <div className="two_stepper_df">
        <Input label="City" type="text" register={register} required />
        <Input label="street" type="text" register={register} required />
      </div>
      <Input label="Full Adress" type="text" register={register} required />
      <Format
        label="Tel Number"
        formated="+998 (##) ###-####"
        register={register}
        required
      />
      <Input label="Message" type="text" register={register} required />
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
        buttonSize="btn--medum" >
        continue
      </Button>
      </div>
    </form>
  );
}

