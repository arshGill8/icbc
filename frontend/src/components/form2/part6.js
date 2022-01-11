import React from "react";

export const Part6 = ({
  prevStep,
  nextStep,
  handleChange,
  value,
  handleSubmit,
}) => {
  const Submit = e => {
    e.preventDefault(e);
    handleSubmit(e);
  };
  const Previous = e => {
    e.preventDefault();
    prevStep();
  };
  return (
    <form>
      <label htmlFor="dos">
        Name((SURNAME followed by given names (no initials) or registered
        company name(s))
      </label>
      <input
        className="s_input"
        value={value.name}
        type="text"
        name="dos"
        onChange={handleChange}
      />
      <label htmlFor="odometer">RESIDENTIAL ADDRESS OF SELLER</label>
      <input
        className="s_input"
        type="text"
        name="odometer"
        value={value.ra}
        onChange={handleChange}
      />
      <label htmlFor="body_style">Province</label>
      <input
        className="s_input"
        type="text"
        name="body_style"
        value={value.province}
        onChange={handleChange}
      />
      <label htmlFor="body_style">Postal Code</label>
      <input
        className="s_input"
        type="text"
        name="body_style"
        value={value.poCode}
        onChange={handleChange}
      />
      <label htmlFor="colour">Seller's BC Driver's Lic. No.</label>
      <input
        className="s_input"
        type="radial"
        name="Flood"
        onChange={handleChange}
        value={value.bcdr}
      />
      <label htmlFor="VPR">SELLER’S BC DRIVER'S LIC. NO.</label>
      <input
        className="s_input"
        type="text"
        name="VPR"
        value={value.bcdr2}
        onChange={handleChange}
      />
      <label htmlFor="year">Selling Price</label>
      <input
        className="s_input"
        type="text"
        name="year"
        value={value.sellingP}
        onChange={handleChange}
      />

      <label htmlFor="model">
        SIGNATURE OF SELLER(S) (Print name and title if other than an
        individual.)
      </label>
      <input
        className="s_input"
        type="text"
        name="model"
        onChange={handleChange}
        value={value.signS}
      />
      <label htmlFor="model">
        SIGNATURE OF SELLER(S) (Print name and title if other than an
        individual.)
      </label>
      <input
        className="s_input"
        type="text"
        name="model"
        onChange={handleChange}
        value={value.signS2}
      />

      <button onClick={Previous}>Back</button>
      <button onClick={Submit}>Submit</button>
    </form>
  );
};
