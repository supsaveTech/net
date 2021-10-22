const Index = ({ days, hours, minutes, seconds }) => {
  return (
    <div id="countdown">
      <div className="row">
        <div className="col col-sm-3">
          <div className="timeBox">
            <span>{days}</span>
            <p>days</p>
          </div>
        </div>
        <div className="col col-sm-3">
          <div className="timeBox">
            <span>{hours}</span>
            <p>Hours</p>
          </div>
        </div>
        <div className="col col-sm-3">
          <div className="timeBox">
            <span>{minutes}</span>
            <p>Minutes</p>
          </div>
        </div>
        <div className="col col-sm-3">
          <div className="timeBox">
            <span>{seconds}</span>
            <p>Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
