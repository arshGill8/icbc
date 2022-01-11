import React from "react";

export const Part1 = ({ nextStep, handleChange, value }) => {
  const Continue = e => {
    e.preventDefault();
    nextStep();
  };
  console.log(value);
  return (
    <form>
      <label htmlFor="regNo">Registration No.</label>
      <input
        className="s_input"
        type="text"
        name="regNo"
        value={value.regNo}
        onChange={handleChange("regNo")}
      />
      <label htmlFor="colour">Colour</label>
      <input
        className="s_input"
        type="text"
        name="colour"
        value={value.colour}
        onChange={handleChange("colour")}
      />
      <label htmlFor="fuel">Fuel</label>
      <input
        className="s_input"
        type="text"
        name="fuel"
        value={value.fuel}
        onChange={handleChange("fuel")}
      />
      <label htmlFor="year">Year</label>
      <input
        className="s_input"
        type="text"
        name="year"
        value={value.year}
        onChange={handleChange("year")}
      />
      <label htmlFor="make">Make</label>
      <input
        className="s_input"
        type="text"
        name="make"
        value={value.make}
        onChange={handleChange("make")}
      />
      <label htmlFor="model">Model</label>
      <input
        className="s_input"
        type="text"
        name="model"
        value={value.model}
        onChange={handleChange("model")}
      />
      <label htmlFor="body_style">Body Style</label>
      <input
        className="s_input"
        type="text"
        name="body_style"
        value={value.body_Style}
        onChange={handleChange("body_style")}
      />
      <button onClick={Continue}>Next</button>
    </form>
  );
};
