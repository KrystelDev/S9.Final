const JoyStick = () => {
  // function only whenisOn === true (context)

  return (
    <div className="joy-stick">
      <button className="left">
        <i></i>
      </button>
      <button className="top">
        <i></i>
      </button>
      <button className="right">
        <i></i>
      </button>
      <button className="bottom">
        <i></i>
      </button>
    </div>
  );
};

export default JoyStick;
