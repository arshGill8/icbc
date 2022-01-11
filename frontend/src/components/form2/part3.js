import React from "react";

export const Part3 = ({ prevStep, nextStep, handleChange, value }) => {
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
      <label htmlFor="year">Year</label>
      <input
        className="s_input"
        type="text"
        name="year"
        value={value.Year2}
        onChange={handleChange("year2")}
      />
      <label htmlFor="make">Make</label>
      <input
        className="s_input"
        type="text"
        name="make"
        value={value.Make2}
        onChange={handleChange("make2")}
      />

      <label htmlFor="make">Secondary Vehicle Identification No. (VIN)</label>
      <input
        className="s_input"
        type="text"
        name="make"
        value={value.SVIN}
        onChange={handleChange("svin")}
      />
      <label htmlFor="model">Frame/Body</label>
      <input
        className="s_input"
        type="text"
        name="model"
        onChange={handleChange("framebody")}
        value={value.FrameBody}
      />
      <button onClick={Previous}>Back</button>
      <button onClick={Continue}>Next</button>
    </form>
  );
};
