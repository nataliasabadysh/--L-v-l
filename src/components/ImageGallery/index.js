import style from "./style.module.css";

export const ImageGallery = ({ response, onSelectImage }) => {
  return (
    <ul className={style.listGallery}>
      {response &&
        response.map(({ id, webformatURL, largeImageURL }) => (
          <li
            key={id}
            onClick={() => onSelectImage(largeImageURL)}
            className={style.listGalleryItem}
          >
            <img
              width="50"
              src={webformatURL}
              alt=""
              className={style.listGalleryItemImage}
            />
          </li>
        ))}
    </ul>
  );
};
