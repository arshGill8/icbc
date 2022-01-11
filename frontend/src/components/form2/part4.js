import React from "react";

export const Part4 = ({ prevStep, nextStep, handleChange, value }) => {
  const Continue = e => {
    e.preventDefault();
    nextStep();
  };
  const Previous = e => {
    e.preventDefault();
    prevStep();
  };
  return (
    <form>
      <label htmlFor="dos">Date Of Sale</label>
      <input
        className="s_input"
        value={value.dos}
        type="text"
        name="dos"
        onChange={handleChange("dos")}
      />
      <label htmlFor="VPR">Vehicle Previously Registered Outside BC</label>
      <input
        className="s_input"
        type="text"
        name="VPR"
        value={value.vobc}
        onChange={handleChange}
      />
      <label htmlFor="year">Cumulative Vehicle Damage</label>
      <input
        className="s_input"
        type="text"
        name="year"
        value={value.cum}
        onChange={handleChange}
      />
      <label htmlFor="odometer">Odometer Reading</label>
      <input
        className="s_input"
        type="text"
        name="odometer"
        value={value.odr}
        onChange={handleChange}
      />
      <button onClick={Previous}>Back</button>
      <button onClick={Continue}>Next</button>
    </form>
  );
};
