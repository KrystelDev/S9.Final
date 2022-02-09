const JoyStick = ({ addPosition, subtractPosition }) => {
  return (
    <div className="joy-stick">
      <button className="left">
        <i></i>
      </button>
      <button type="button" className="top" onClick={addPosition}>
        <i></i>
      </button>
      <button className="right">
        <i></i>
      </button>
      <button type="button" className="bottom" onClick={subtractPosition}>
        <i></i>
      </button>
    </div>
  );
};

export default JoyStick;
