import React from "react";

const Experience = ({ experience, setExperience }) => {
  return (
    <div className="component">
      <span className="formTitle">Experience {experience.id}:</span>
      <div className="element__wrapper">
        <span className="input__heading">Enter Position: </span>
        <input
          type="text"
          placeholder="Job position: "
          value={experience.position}
          onChange={(e) => {
            const position = e.target.value;
            setExperience({ ...experience, position });
          }}
        />
      </div>
      <div className="element__wrapper">
        <span className="input__heading">Enter Company name : </span>
        <input
          type="text"
          placeholder="Company name"
          value={experience.companyName}
          onChange={(e) => {
            const companyName = e.target.value;
            setExperience({ ...experience, companyName });
          }}
        />
      </div>
      <div className="element__wrapper">
        <span className="input__heading">Enter start date: </span>
        <input
          type="text"
          placeholder="start date"
          value={experience.startDate}
          onChange={(e) => {
            const startDate = e.target.value;
            setExperience({ ...experience, startDate });
          }}
        />
      </div>
      <div className="element__wrapper">
        <span className="input__heading">Enter end date: </span>
        <input
          type="text"
          placeholder="end date"
          value={experience.endDate}
          onChange={(e) => {
            const endDate = e.target.value;
            setExperience({ ...experience, endDate });
          }}
        />
      </div>
      <div className="element__wrapper">
        <span className="input__heading">Enter location: </span>
        <input
          type="text"
          placeholder="Job location"
          value={experience.location}
          onChange={(e) => {
            const location = e.target.value;
            setExperience({ ...experience, location });
          }}
        />
      </div>

      <div className="element__wrapper">
        <span className="input__heading">Enter description : </span>
        <input
          type="text"
          placeholder="Job description"
          value={experience.description}
          onChange={(e) => {
            const description = e.target.value;
            setExperience({ ...experience, description });
          }}
        />
      </div>
    </div>
  );
};

export default Experience;
