import React from "react";

const Language = ({ language, setLanguage }) => {
  return (
    <div className="component">
      <span className="formTitle">Language {language.id}:</span>
      <div className="element__wrapper">
        <span className="input__heading">Enter language : </span>
        <input
          type="text"
          placeholder="Language"
          value={language.name}
          onChange={(e) => {
            const name = e.target.value;
            setLanguage({ ...language, name });
          }}
        />
      </div>
      <div className="element__wrapper">
        <span className="input__heading">Enter level : </span>
        <input
          type="text"
          placeholder="Language level"
          value={language.level}
          onChange={(e) => {
            const level = e.target.value;
            setLanguage({ ...language, level });
          }}
        />
      </div>
    </div>
  );
};

export default Language;
