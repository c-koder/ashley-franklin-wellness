import { useEffect, useState } from "react";

export const AsyncImage = (props) => {
  const [loadedSrc, setLoadedSrc] = useState(null);

  useEffect(() => {
    setLoadedSrc(null);

    if (props.src) {
      const handleLoad = () => {
        setLoadedSrc(props.src);
      };

      const image = new Image();
      image.addEventListener("load", handleLoad);
      image.src = props.src;

      return () => {
        image.removeEventListener("load", handleLoad);
      };
    }
  }, [props.src]);

  if (loadedSrc === props.src) {
    return <img {...props} alt={props.alt} />;
  }

  return <div className="img-loading" />;
};
