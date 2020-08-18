import React from "react";
import "../style/Skills.scss";
import getSkills from "../services/Skills";

const skillsData = getSkills();

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
