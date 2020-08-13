import React from "react";

const timelineData = [
  {
    text: "Web Development student",
    date: "2019",
    details: "Full Stack Development program. Currently on my second year.",
    place: "Chas Academy",
    link: {
      url: "https://kunskapsbasen.chas.school/",
      text: "Details",
    },
  },
  {
    text: "MSc in Geomatics",
    date: "2018",
    place: "Lund University",
    details: `Thesis: "Assessing edge pixel classification in forest stands using a machine learning algorithm and Sentinel-2 data."`,
    link: {
      url: "https://lup.lub.lu.se/student-papers/search/publication/8954922",
      text: "Details",
    },
  },
  {
    text: "Agronomy Engineer",
    date: "2014",
    place: "Pontifical Catholic University of Chile",
    details: `Mayor in environmental management. Thesis: "Assessment of the Metropolitan Regulation Plan in rural and biodiversity conservation areas".`,
    link: {
      url: "../../pdf/BD_Thesis_Enzo_Zerega",
      text: "Details",
    },
  },
];

const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <time>{data.date}</time>
      <p className="timeline-title">{data.text}</p>
      <p className="timeline-place">{data.place}</p>
      <div className="timeline-details">
        <p>
          {data.details}{" "}
          {data.link && (
            <a href={data.link.url} target="_blank">
              {data.link.text}
            </a>
          )}
        </p>
      </div>
    </div>
    <span className="circle" />
    {/* <div className="timeline-item-content-overlay">
      <div className="timeline-overlay-content">
        <p>Hello</p>
      </div>
    </div> */}
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
