<div className="element__wrapper">
        <span className="input__heading">Enter Institute name: </span>
        <input
          type="text"
          placeholder="Phone"
          value={educationChange.instituteName}
          onChange={(e) => {
            const instituteName = e.target.value;
            setEducationChange({ ...educationChange, instituteName });
          }}
        />
      </div>
      <div className="element__wrapper">
        <span className="input__heading">Enter start date: </span>
        <input
          type="text"
          placeholder="LinkedIn url"
          value={educationChange.startDate}
          onChange={(e) => {
            const startDate = e.target.value;
            setEducationChange({ ...educationChange, startDate });
          }}
        />
      </div>
      <div className="element__wrapper">
        <span className="input__heading">Enter end date: </span>
        <input
          type="text"
          placeholder="Location url"
          value={educationChange.endDate}
          onChange={(e) => {
            const endDate = e.target.value;
            setEducationChange({ ...educationChange, endDate });
          }}
        />
      </div>
      <div className="element__wrapper">
        <span className="input__heading">Enter location: </span>
        <input
          type="text"
          placeholder="Portfolio url"
          value={educationChange.location}
          onChange={(e) => {
            const location = e.target.value;
            setEducationChange({ ...educationChange, location });
          }}
        />
      </div>
      <div className="element__wrapper">
        <span className="input__heading">Enter Course name: </span>
        <input
          type="text"
          placeholder="Instagram url"
          value={educationChange.course}
          onChange={(e) => {
            const course = e.target.value;
            setEducationChange({ ...educationChange, course });
          }}
        />
      </div>
      <button onClick={() => saveEducation()}>save education</button>
    </div>