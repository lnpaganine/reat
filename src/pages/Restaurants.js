import React, { useEffect, useState } from "react";
import ImgGallery from "../components/ImgGallery";

function Restaurants() {
  const [isToggle, setToggle] = useState(false);
  const [appState, setAppState] = useState({
    loading: false,
    images: null,
  });

  useEffect(() => {
    const newArr = "https://jsonplaceholder.typicode.com/photos";

    fetch(newArr)
      .then((res) => res.json())
      .then((images) => {
        setAppState({ loading: false, images: images.slice(0, 9) });
      });
  }, [setAppState]);

  return <ImgGallery isLoading={appState.loading} images={appState.images} />;
}

export default Restaurants;
