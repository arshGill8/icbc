import React from "react";

export const Part2 = ({ prevStep, nextStep, handleChange, value }) => {
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
      <label htmlFor="vin">VIN</label>
      <input
        className="s_input"
        type="text"
        name="vin"
        value={value.vin}
        onChange={handleChange('vin')}
      />
      <label htmlFor="vin">Seating Capacity</label>
      <input
        className="s_input"
        type="text"
        name="Seating_Capacity"
        value={value.seating_Capacity}
        onChange={handleChange('seating_Capacity')}
      />

      <label htmlFor="seat_cap">Net Weight</label>
      <input
        className="s_input"
        type="text"
        name="Net_Weight"
        value={value.net_Weight}
        onChange={handleChange('net_Weight')}
      />

      <label htmlFor="net_w">Gross Weight</label>
      <input
        className="s_input"
        type="text"
        name=" Gross_Weight"
        value={value.gross_Weight}
        onChange={handleChange('gross_weight')}
      />
      <label htmlFor="gross_w">DISP</label>
      <input
        className="s_input"
        type="text"
        name="DISP"
        value={value.disp}
        onChange={handleChange('disp')}
      />
      <label htmlFor="VEHICLE_STATUS">Vehicle Status</label>
      <input
        className="s_input"
        value={value.vehicle_Status}
        type="text"
        name="VEHICLE_STATUS"
        onChange={handleChange('vehicle_status')}
      />
      <label htmlFor="colour">Flood</label>
      <input
        className="s_input"
        type="text"
        name="Flood"
        onChange={handleChange('flood')}
        value={value.flood}
      />
      <button onClick={Previous}>Back</button>
      <button onClick={Continue}>Next</button>
    </form>
  );
};
