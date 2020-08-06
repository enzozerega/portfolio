import React from "react";
import ProgressiveImage from "react-progressive-image";

const PortfolioItem = ({
  title,
  tags,
  description,
  github,
  www,
  img,
  imgScaled,
  label,
}) => {
  return (
    <article>
      <ProgressiveImage src={img} placeholder={imgScaled}>
        {(src) => <img src={src} alt="" />}
      </ProgressiveImage>
      <img src={img} alt="" />
      <div className="article-overlay">
        <div className="article-content">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="article-tags">{tags}</div>
          <div className="article-links">
            {github && (
              <a href={github} target="_blank">
                GitHub
              </a>
            )}
            {www && !label && (
              <a href={www} target="_blank">
                Live Site
              </a>
            )}
            {label && (
              <a href={www} target="_blank">
                {label}
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default PortfolioItem;
