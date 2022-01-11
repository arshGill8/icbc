import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Popup(props) {
  // state which holds selected file + method that sets selected file to be saved
  const [file, setFile] = useState("");

  // reads selected file
  useEffect(() => console.log(file), [file]);

  //method that passes selected file to state
  const onChangeHandler = event => {
    setFile(event.target.value);
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button
          className="close-btn" 
          //method used to close form box
          onClick={() => props.setTrigger(false)}
        >
          X
        </button>
        <form>
          <input
            type="file"
            accept="image/*"
            capture="environment"
            //method that passes selected file to state
            onChange={onChangeHandler}
          />
          <button>Upload</button>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
}
export default Popup;
