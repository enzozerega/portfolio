import React from "react";

const timelineData = [
  {
    text: "Web Development student",
    date: "2019 - Now",
    details: "Full Stack Development",
    place: "Chas Academy",
    link: {
      url: "https://github.com/florinpop17/app-ideas",
      text: "Check it out on GitHub",
    },
  },
  {
    text: "MSc in Geomatics",
    date: "2016-2018",
    place: "Lund University",
    link: {
      url: "https://florin-pop/blog/2019/03/weekly-coding-challenge/",
      text: "Check it out here",
    },
  },
  {
    text: "Agronomy Engineer",
    date: "2008-2013",
    place: "Pontifical Catholic University of Chile",
    link: {
      url: "https://florin-pop/blog/2019/03/weekly-coding-challenge/",
      text: "Check it out here",
    },
  },
];

const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <time>{data.date}</time>
      <p className="timeline-title">{data.text}</p>
      <p className="timeline-place">{data.place}</p>
      {/* <p className="timeline-details">{data.details}</p>
      {data.link && (
        <a href={data.link.url} target="_blank" rel="noopener noreferrer">
          {data.link.text}
        </a>
      )} */}
      <span className="circle" />
    </div>
    <div className="timeline-item-content-overlay">
      <div className="timeline-overlay-content">
        <p>Hello</p>
      </div>
    </div>
  </div>
);

const Timeline = () =>
  timelineData.length > 0 && (
    <div className="timeline-container">
      {timelineData.map((data, idx) => (
        <TimelineItem data={data} key={idx} />
      ))}
    </div>
  );

export default Timeline;
