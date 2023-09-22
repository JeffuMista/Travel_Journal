import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.image} />
      <div className="entry">
        <span className="location">
          <img src="./location.png" alt="location-pin" />
          <h3>{props.location}</h3>
          <a href={props.googleMapsUrl} target="_blank">
            View on Google Maps
          </a>
        </span>
        <h1>{props.title}</h1>
        <span>{props.startDate} - {props.endDate}</span>
        <p>
          {props.description}
        </p>
      </div>
    </div>
  );
}
