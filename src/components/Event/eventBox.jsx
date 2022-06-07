import Link from "@mui/material/Link";

const eventBox = (props) => {
  console.log("props..............", props);
  return (
    <div className="hover-scale event-box event-box-sm drop-shadow curled mb-20px">
      <Link href="#">
        <div className="img-box hover-scale-in">
          <img src={props.eventImg} alt="" width="100%" />
          <div className="overlay event-overlay"></div>
        </div>
        <div className="event-details">
          <div className="event-logo">
            <img src={props.eventIcon} />
          </div>
          <div className="event-content">
            <p className="name">{props.eventName}</p>
            <p className="venu">
              <i className="fa fa-map-marker" />
              {props.eventLocation}
            </p>
            <p className="date">
              <i className="fa fa-calendar" />
              {props.eventStartDate}| <i className="fa fa-calendar" />
              {props.eventEndDate}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default eventBox;
