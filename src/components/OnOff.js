const OnOff = ({ tag, changeIsOn }) => {
  return (
    <button type="button" onClick={changeIsOn} className="On-Off">
      <div className="buttons-circle">
        <p>{tag}</p>
      </div>
    </button>
  );
};

export default OnOff;
