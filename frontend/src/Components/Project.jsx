import React from "react";

const Project = (props) => {
  const { project, setProject } = props;
  return (
    <div className="component">
      <span className="formTitle">Project {project.id}:</span>
      <div className="element__wrapper">
        <span className="input__heading">Enter Name: </span>
        <input
          type="text"
          placeholder="Project Name: "
          value={project.name}
          onChange={(e) => {
            const name = e.target.value;
            setProject({ ...project, name });
          }}
        />
      </div>
      <div className="element__wrapper">
        <span className="input__heading">Enter description : </span>
        <input
          type="text"
          placeholder="Project Description"
          value={project.description}
          onChange={(e) => {
            const description = e.target.value;
            setProject({ ...project, description });
          }}
        />
      </div>
      <div className="element__wrapper">
        <span className="input__heading">Enter start date: </span>
        <input
          type="text"
          placeholder="start date"
          value={project.startDate}
          onChange={(e) => {
            const startDate = e.target.value;
            setProject({ ...project, startDate });
          }}
        />
      </div>
      <div className="element__wrapper">
        <span className="input__heading">Enter end date: </span>
        <input
          type="text"
          placeholder="end date"
          value={project.endDate}
          onChange={(e) => {
            const endDate = e.target.value;
            setProject({ ...project, endDate });
          }}
        />
      </div>
    </div>
  );
};

export default Project;
