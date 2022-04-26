import React, { useState } from "react";
import GetImage from "../components/GetImage";

const PokeImage = ({ alt, imageSrc }) => {
  return (
    <div>
      {imageSrc === null ? (
        <p>loading</p>
      ) : (
        <img alt={alt} src={GetImage(imageSrc)} />
      )}
    </div>
  );
};

export default PokeImage;
