import React from "react";
import "./component.css";

const Introduction = (props) => {
  const { introduction, setIntroduction } = props;

  const handleNameChange = (e) => {
    const name = e.target.value;
    setIntroduction({ ...introduction, name });
  };
  const handleSmallIntroChange = (e) => {
    const smallIntro = e.target.value;
    setIntroduction({ ...introduction, smallIntro });
  };
  const handleDescriptionChange = (e) => {
    const description = e.target.value;
    setIntroduction({ ...introduction, description });
  };

  return (
    <div className="component">
      <span className="formTitle">Introduction:</span>
      <div className="element__wrapper">
        <span className="input__heading">Enter your name: </span>
        <input
          type="text"
          placeholder="name"
          value={introduction.name}
          onChange={(e) => handleNameChange(e)}
        />
      </div>
      <div className="element__wrapper">
        <span className="input__heading">A small intro about yourself: </span>
        <input
          type="text"
          placeholder="small introduction"
          value={introduction.smallIntro}
          onChange={(e) => handleSmallIntroChange(e)}
        />
      </div>
      <div className="element__wrapper">
        <span className="input__heading">
          Describe yourself with 50-100 words:{" "}
        </span>
        <textarea
          placeholder="Description"
          value={introduction.description}
          onChange={(e) => handleDescriptionChange(e)}
        />
      </div>
    </div>
  );
};

export default Introduction;
