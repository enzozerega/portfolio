import React from "react";

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
      <img src={img} alt="" />
      <div className="article-overlay">
        <div className="article-content">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="article-tags">{tags}</div>
          <div className="article-links">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
            {www && !label && (
              <a href={www} target="_blank" rel="noopener noreferrer">
                Live Site
              </a>
            )}
            {label && (
              <a href={www} target="_blank" rel="noopener noreferrer">
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
