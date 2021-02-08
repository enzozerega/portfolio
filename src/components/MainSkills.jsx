import React, { useState } from "react";
import "../style/MainSkills.scss";
import getMainSkills from "../services/MainSkills";

const skillsData = getMainSkills();

const SkillsItem = ({ data, animatedClass }) => (
  <img className={animatedClass} src={require(`../img/${data}`)} alt="" />
);

export default function MainSkills() {
  const [skill, setSkill] = useState("hidden");
  const [skill1, setSkill1] = useState("hidden");
  const [skill2, setSkill2] = useState("hidden");
  const [skill3, setSkill3] = useState("hidden");

  const animation = () => {
    setSkill("animated");
    setTimeout(() => {
      setSkill1("animated");
    }, 2000);
    setTimeout(() => {
      setSkill2("animated");
    }, 4000);
    setTimeout(() => {
      setSkill3("animated");
    }, 6000);
    setTimeout(() => {
      setSkill("hidden");
    }, 5000);
    setTimeout(() => {
      setSkill1("hidden");
    }, 7000);
    setTimeout(() => {
      setSkill2("hidden");
    }, 9000);
    setTimeout(() => {
      setSkill3("hidden");
    }, 11000);
  };

  useState(() => {
    animation();
    setTimeout(() => animation(), 11000);
    setTimeout(() => animation(), 22000);
  }, []);

  return (
    <div className="skills-container">
      <SkillsItem data="react.png" animatedClass={skill} />
      <SkillsItem data="javascript.png" animatedClass={skill1} />
      <SkillsItem data="arcgis.png" animatedClass={skill2} />
      <SkillsItem data="aws.png" animatedClass={skill3} />
    </div>
  );
}
