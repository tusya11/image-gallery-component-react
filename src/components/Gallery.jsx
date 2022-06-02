import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { dataGallery } from "../utils/dataGallery";
import "../components/Gallery.css";

export const Gallery = () => {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImage = (img) => {
    setTempImgSrc(img);
    setModel(true);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} alt="tempImg" />
        <AiOutlineClose color="white" onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {dataGallery.map((image) => (
          <div
            className="pics"
            key={image.id}
            onClick={() => getImage(image.imgSrc)}
          >
            <img src={image.imgSrc} alt="pics" style={{ width: "100%" }} />
          </div>
        ))}
      </div>
    </>
  );
};
