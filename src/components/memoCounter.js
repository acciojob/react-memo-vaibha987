import React, { memo } from "react";

const Skill = ({ allSkills }) => {
  return (
    <ul>
      {allSkills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
};

export default memo(Skill);
