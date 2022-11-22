import React from "react";
import { Link } from "react-router-dom";

const ImgCard = (props) => {
  const { item } = props;
  return (
    <div className="col s12 m4">
      <div className="card medium">
        <div className="card-image">
          <a href={item.url}>
            <span className="card-title">
              <Link to="/about">Go to Aboutpage</Link>
              Restaurant Name: {item.title}
            </span>
          </a>
          <br></br>
          <a href={item.url}>
            <img alt={item.title} src={item.thumbnailUrl} />
          </a>
          <br></br>
        </div>
        <div className="card-content"></div>
      </div>
    </div>
  );
};

export default ImgCard;
