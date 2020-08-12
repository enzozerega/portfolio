import React from "react";
import "../style/Skills.scss";

const skillsData = [
  {
    name: "React",
    img: "react.png",
  },
  {
    name: "Angular",
    img: "angular.png",
  },
  {
    name: "PHP",
    img: "php.png",
  },
  {
    name: "ArcGIS",
    img: "arcgis.png",
  },
  {
    name: "PostgreSQL",
    img: "postgresql.png",
  },
  {
    name: "Docker",
    img: "docker.png",
  },
  {
    name: "Vagrant",
    img: "vagrant.png",
  },
  {
    name: "PostGIS",
    img: "postgis.png",
  },
  {
    name: "R",
    img: "r.png",
  },
  {
    name: "CSS3",
    img: "css3.png",
  },
  {
    name: "HTML5",
    img: "html5.png",
  },
  {
    name: "MongoDB",
    img: "mongodb.png",
  },
  {
    name: "JavaScript",
    img: "javascript.png",
  },
  {
    name: "Laravel",
    img: "laravel.png",
  },
  {
    name: "MySQL",
    img: "mysql.png",
  },
  {
    name: "Python",
    img: "python.png",
  },
  {
    name: "Express",
    img: "express.png",
  },
  {
    name: "Node",
    img: "node.png",
  },
];

const SkillsItem = ({ data }) => (
  <div className="skills-item">
    <img src={require(`../img/${data.img}`)} alt="" />
    <h3>{data.name}</h3>
  </div>
);

const Skills = () =>
  skillsData.length > 0 && (
    <div className="skills-container">
      {skillsData.map((data, idx) => (
        <SkillsItem data={data} key={idx} />
      ))}
    </div>
  );

export default Skills;
