// import { useState } from "react";

const OnOff = ({ tag, changeIsOn }) => {
  // const [stateIsOn, setstateIsOn] = useState("Off");

  // if (isOn) {
  //   setstateIsOn("On");
  // } else {
  //   setstateIsOn("Off");
  // }

  return (
    <button type="button" onClick={changeIsOn} className="On-Off">
      <div className="buttons-circle">
        <p>{tag}</p>
      </div>
    </button>
  );
};

export default OnOff;
