import React, { Component } from "react";
import axios from "axios";
import { Part1 } from "./part1";
import { Part2 } from "./part2";
import { Part3 } from "./part3";
import { Part4 } from "./part4";
import { Part5 } from "./part5";

class Form2 extends Component {
  // state which represents form fields
  state = {
    step: 1,
    regNo: "",
    Colour: "",
    VIN: "",
    Fuel: "",
    Year: "",
    Make: "",
    Model: "",
    Body_Style: "",
    Seating_Capacity: "",
    Net_Weight: "",
    Gross_Weight: "",
    DISP: "",
    VEHICLE_STATUS: "",
    Flood: "",
    Year2: "",
    Make2: "",
    SVIN: "",
    FrameBody: "",
    Dos: "",
    PVH: "",
    VOBC: "",
    CUM: "",
    ODR: "",
    Name: "",
    RAOF: "",
    Province: "",
    PoCode: "",
    BCDR: "",
    BCDR2: "",
    sellingP: "",
    signS: "",
    signS2: "",
  };

  // takes form to previous page
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  // takes form to next page
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  // method used to handle input field change and set state
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  // send state(user data) to backend
  handleSubmit = event => {
    event.preventDefault();
    const users = this.state;
    axios.post("http://localhost:8080/newuser", users).then(response => {
      console.log(response.data);
      window.open("http://localhost:8080/");
    });
    // reset step state
    this.setState({ step: 0 });
    // close the form model
    this.props.setTrigger(false);
  };

  renderSwitch() {
    const { step } = this.state;
    const {
      regNo,
      Colour,
      VIN,
      Fuel,
      Year,
      Make,
      Model,
      Body_Style,
      Seating_Capacity,
      Net_Weight,
      Gross_Weight,
      DISP,
      VEHICLE_STATUS,
      Flood,
      Year2,
      Make2,
      SVIN,
      FrameBody,
      Dos,
      PVH,
      VOBC,
      CUM,
      ODR,
      Name,
      RAOF,
      Province,
      PoCode,
      BCDR,
      BCDR2,
      sellingP,
      signS,
      signS2,
    } = this.state;

    const values = {
      regNo,
      Colour,
      VIN,
      Fuel,
      Year,
      Make,
      Model,
      Body_Style,
      Seating_Capacity,
      Net_Weight,
      Gross_Weight,
      DISP,
      VEHICLE_STATUS,
      Flood,
      Year2,
      Make2,
      SVIN,
      FrameBody,
      Dos,
      PVH,
      VOBC,
      CUM,
      ODR,
      Name,
      RAOF,
      Province,
      PoCode,
      BCDR,
      BCDR2,
      sellingP,
      signS,
      signS2,
    };
// switch statement renders form page depending on what step the user is one
// next step, previous step, handleChange methods + values from state passed to each Part Component
    switch (step) {
      case 1:
        return (
          <Part1
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            value={values}
          />
        );
      case 2:
        return (
          <Part2
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            value={values}
          />
        );
      case 3:
        return (
          <Part3
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            value={values}
          />
        );
      case 4:
        return (
          <Part4
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            value={values}
          />
        );
      case 5:
        return (
          <Part5
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            value={values}
          />
        );
      default: //do nothing
    }
  }

  render() {
    return this.props.trigger ? (
      <div className="popup">
        <div className="popup-inner">

        
          <button
            className="close-btn"
            // close form button
            onClick={() => this.props.setTrigger(false)}
          >
            close
          </button>
          {this.props.children}
          {this.renderSwitch(this.state.step)}
        </div>
      </div>
    ) : (
      ""
    );
  }
}

export default Form2;
