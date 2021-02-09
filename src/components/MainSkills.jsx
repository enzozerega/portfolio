import React, { useState } from "react";
import "../style/MainSkills.scss";

const SkillsItem = ({ data, animatedClass }) =>
  data ? (
    <img className={animatedClass} src={require(`../img/${data}`)} alt="" />
  ) : (
    <img className="hidden-skill" alt="" />
  );

export default function MainSkills() {
  const [skill, setSkill] = useState("hidden-skill");
  const [skill1, setSkill1] = useState("hidden-skill");
  const [skill2, setSkill2] = useState("hidden-skill");
  const [skill3, setSkill3] = useState("hidden-skill");
  const [skill4, setSkill4] = useState("hidden-skill");

  const animation = () => {
    setSkill("animated-skill");
    setTimeout(() => {
      setSkill1("animated-skill");
    }, 2000);
    setTimeout(() => {
      setSkill2("animated-skill");
    }, 4000);
    setTimeout(() => {
      setSkill3("animated-skill");
    }, 6000);
    setTimeout(() => {
      setSkill4("animated-skill");
    }, 8000);
    setTimeout(() => {
      setSkill("hidden-skill");
    }, 5000);
    setTimeout(() => {
      setSkill1("hidden-skill");
    }, 7000);
    setTimeout(() => {
      setSkill2("hidden-skill");
    }, 9000);
    setTimeout(() => {
      setSkill3("hidden-skill");
    }, 11000);
    setTimeout(() => {
      setSkill4("hidden-skill");
    }, 13000);
  };

  useState(() => {
    animation();
    setTimeout(() => animation(), 13000);
    setTimeout(() => animation(), 26000);
  }, []);

  return (
    <div className="main-skills-container">
      <div>
        <SkillsItem data="react.png" animatedClass={skill} />
        <SkillsItem />
        <SkillsItem />
        <SkillsItem data="arcgis.png" animatedClass={skill2} />
      </div>
      <div>
        <SkillsItem />
        <SkillsItem data="javascript.png" animatedClass={skill1} />
        <SkillsItem />
        <SkillsItem />
      </div>
      <div>
        <SkillsItem />
        <SkillsItem data="graphql.png" animatedClass={skill4} />
        <SkillsItem data="aws.png" animatedClass={skill3} />
      </div>
    </div>
  );
}
