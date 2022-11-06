import React, { useState } from "react";

const Education = (props) => {
  const { education, setEducation } = props;

  return (
    <div className="component">
      <span className="formTitle">Education {education.id}:</span>
      <div className="element__wrapper">
        <span className="input__heading">Enter Degree: </span>
        <input
          type="text"
          placeholder="Degree"
          value={education.degree}
          onChange={(e) => {
            const degree = e.target.value;
            setEducation({ ...education, degree });
          }}
        />
      </div>
      <div className="element__wrapper">
        <span className="input__heading">Enter Institute name: </span>
        <input
          type="text"
          placeholder="Institute name"
          value={education.instituteName}
          onChange={(e) => {
            const instituteName = e.target.value;
            setEducation({ ...education, instituteName });
          }}
        />
      </div>
      <div className="element__wrapper">
        <span className="input__heading">Enter start date: </span>
        <input
          type="text"
          placeholder="start date"
          value={education.startDate}
          onChange={(e) => {
            const startDate = e.target.value;
            setEducation({ ...education, startDate });
          }}
        />
      </div>
      <div className="element__wrapper">
        <span className="input__heading">Enter end date: </span>
        <input
          type="text"
          placeholder="end date"
          value={education.endDate}
          onChange={(e) => {
            const endDate = e.target.value;
            setEducation({ ...education, endDate });
          }}
        />
      </div>
      <div className="element__wrapper">
        <span className="input__heading">Enter location: </span>
        <input
          type="text"
          placeholder="Portfolio url"
          value={education.location}
          onChange={(e) => {
            const location = e.target.value;
            setEducation({ ...education, location });
          }}
        />
      </div>
      <div className="element__wrapper">
        <span className="input__heading">Enter Course name: </span>
        <input
          type="text"
          placeholder="Instagram url"
          value={education.course}
          onChange={(e) => {
            const course = e.target.value;
            setEducation({ ...education, course });
          }}
        />
      </div>
    </div>
  );
};

export default Education;
