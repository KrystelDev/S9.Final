import { Link } from "react-router-dom";

const OnOff = () => {
  // function only when isOn === true (context)
  // isOn === true {to="/OpenOff"} else {to="/OpenOn" }

  return (
    <Link to="/OpenOff" className="On-Off">
      <div className="buttons-circle">
        <p>Off</p>
      </div>
    </Link>
  );
};

export default OnOff;
