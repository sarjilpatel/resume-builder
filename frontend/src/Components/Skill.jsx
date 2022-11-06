import React from "react";

const Skill = ({ skill, setSkill, id }) => {
  return (
    <div className="component">
      <span className="formTitle">Skill {id}:</span>

      <div className="element__wrapper">
        <input
          type="text"
          placeholder="Skill"
          value={skill.name}
          onChange={(e) => {
            const name = e.target.value;
            setSkill({ ...skill, name });
          }}
        />
      </div>
    </div>
  );
};

export default Skill;
