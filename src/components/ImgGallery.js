import React from "react";
import ImgCard from "./ImgCard";

const ImgGallery = (props) => {
  const { images, isLoading } = props;

  if (!images || images.length === 0) {
    return <p>No image cards to display</p>;
  }

  return (
    <div className="container row">
      <h2 className="list-head">List of restaurants</h2>
      {!isLoading &&
        images.map((item) => {
          return <ImgCard key={item.id} item={item} />;
        })}
    </div>
  );
};
export default ImgGallery;
