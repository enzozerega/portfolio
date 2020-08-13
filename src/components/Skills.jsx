import React from "react";
import "../style/Skills.scss";

const skillsData = [
  {
    name: "JavaScript",
    img: "javascript.png",
    tag: "languages",
  },
  {
    name: "React",
    img: "react.png",
    tag: "frameworks",
  },
  {
    name: "Angular",
    img: "angular.png",
    tag: "frameworks",
  },
  {
    name: "PHP",
    img: "php.png",
    tag: "languages",
  },
  {
    name: "Docker",
    img: "docker.png",
    tag: "tools",
  },
  {
    name: "Vagrant",
    img: "vagrant.png",
    tag: "tools",
  },
  {
    name: "HTML5",
    img: "html5.png",
    tag: "languages",
  },
  {
    name: "CSS3",
    img: "css3.png",
    tag: "languages",
  },
  {
    name: "MySQL",
    img: "mysql.png",
    tag: "databases",
  },
  {
    name: "MongoDB",
    img: "mongodb.png",
    tag: "databases",
  },
  {
    name: "Laravel",
    img: "laravel.png",
    tag: "frameworks",
  },
  {
    name: "Python",
    img: "python.png",
    tag: "languages",
  },
  {
    name: "Express",
    img: "express.png",
    tag: "frameworks",
  },
  {
    name: "Node.js",
    img: "node.png",
    tag: "tools",
  },
  {
    name: "WordPress",
    img: "wordpress.png",
    tag: "tools",
  },
  {
    name: "Git",
    img: "git.png",
    tag: "tools",
  },
  {
    name: "R",
    img: "r.png",
    tag: "languages",
  },
  {
    name: "PostgreSQL",
    img: "postgresql.png",
    tag: "databases",
  },
  {
    name: "ArcGIS",
    img: "arcgis.png",
    tag: "tools",
  },
  {
    name: "PostGIS",
    img: "postgis.png",
    tag: "tools",
  },
];

const SkillsItem = ({ data }) => (
  <div className="skills-item">
    <img src={require(`../img/${data.img}`)} alt="" />
    <h4>{data.name}</h4>
  </div>
);

const Skills = () =>
  skillsData.length > 0 && (
    <div className="skills-container">
      <div className="skills-languages">
        <h3>Languages</h3>
        {skillsData.map(
          (data, idx) =>
            data.tag === "languages" && <SkillsItem data={data} key={idx} />
        )}
      </div>

      <div className="skills-framworks">
        <h3>Frameworks</h3>
        {skillsData.map(
          (data, idx) =>
            data.tag === "frameworks" && <SkillsItem data={data} key={idx} />
        )}
      </div>

      <div className="skills-framworks">
        <h3>Databases</h3>
        {skillsData.map(
          (data, idx) =>
            data.tag === "databases" && <SkillsItem data={data} key={idx} />
        )}
      </div>

      <div className="skills-framworks">
        <h3>Tools</h3>
        {skillsData.map(
          (data, idx) =>
            data.tag === "tools" && <SkillsItem data={data} key={idx} />
        )}
      </div>
    </div>
  );

export default Skills;
