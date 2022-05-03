import img001 from "../assets/001.png";
import img004 from "../assets/004.png";
import img007 from "../assets/007.png";
import img044 from "../assets/044.png";
import img063 from "../assets/063.png";
import img058 from "../assets/058.png";
import img059 from "../assets/059.png";
import img135 from "../assets/135.png";
import img151 from "../assets/151.png";
import img050 from "../assets/050.png";
import img094 from "../assets/094.png";

const images = {
  img001,
  img004,
  img007,
  img044,
  img063,
  img058,
  img059,
  img135,
  img151,
  img050,
  img094,
};

function GetImage(key) {
  return images[key];
}

export default GetImage;
