import React from "react";

export const Part5 = ({ prevStep, nextStep, handleChange, value }) => {
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
     
      <label htmlFor="year">Cumulative Vehicle Damage</label>
      <input
        className="s_input"
        type="text"
        name="year"
        value={value.cum}
        onChange={handleChange}
      />

    
      <button onClick={Previous}>Back</button>
      <button onClick={Continue}>Next</button>
    </form>
  );
};
