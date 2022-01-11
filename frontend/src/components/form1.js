import React, { Component } from "react";

export default class Form1 extends Component {
 

render() {
  return this.props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => this.props.setTrigger(false)}>
          close
        </button>
        {this.props.children}
        <form className="form1"  onSubmit={this.handleSubmit}>
          <label for="cname">Customer Name:</label>
        
          <input type="text" id="cname" name="cname" />
        
          <label for="address">Customer Address:</label>
        
          <input type="text" id="address" name="address" />
          <label for="dob">Customer D.O.B.:</label>
        
          <input type="text" id="dob" name="dob" />
          <label for="sform">Statement Form:</label>
        
          <input type="text" id="sform" name="sform" />
          <label for="dsign">Sign-Docusign:</label>
        
          <input type="text" id="dsign" name="dsign" />
          <input type="submit" value="Submit" />

        </form>
      </div>
    </div>
  ) : (
    ""
  );
}}
