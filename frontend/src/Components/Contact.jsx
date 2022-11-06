import React from "react";

const Contact = (props) => {
  const { contact, setContact } = props;

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setContact({ ...contact, email });
  };
  const handleLocationChange = (e) => {
    const location = e.target.value;
    setContact({ ...contact, location });
  };
  const handlePhoneChange = (e) => {
    const phone = e.target.value;
    setContact({ ...contact, phone });
  };
  const handleLinkedInChange = (e) => {
    const linkedIn = e.target.value;
    setContact({ ...contact, linkedIn });
  };
  const handlePortfolioChange = (e) => {
    const portfolio = e.target.value;
    setContact({ ...contact, portfolio });
  };
  const handleInstagramChange = (e) => {
    const instagram = e.target.value;
    setContact({ ...contact, instagram });
  };
  const handleGithubChange = (e) => {
    const github = e.target.value;
    setContact({ ...contact, github });
  };
  return (
    <div className="component">
      <span className="formTitle">Contact:</span>
      <div className="element__wrapper">
        <span className="input__heading">Enter your Email: </span>
        <input
          type="text"
          placeholder="Email"
          value={contact.email}
          onChange={(e) => handleEmailChange(e)}
        />
      </div>
      <div className="element__wrapper">
        <span className="input__heading">Enter your Phone: </span>
        <input
          type="text"
          placeholder="Phone"
          value={contact.phone}
          onChange={(e) => handlePhoneChange(e)}
        />
      </div>
      <div className="element__wrapper">
        <span className="input__heading">Enter your LinkedIn url: </span>
        <input
          type="text"
          placeholder="LinkedIn url"
          value={contact.linkedIn}
          onChange={(e) => handleLinkedInChange(e)}
        />
      </div>
      <div className="element__wrapper">
        <span className="input__heading">Enter your Location: </span>
        <input
          type="text"
          placeholder="Location url"
          value={contact.location}
          onChange={(e) => handleLocationChange(e)}
        />
      </div>
      <div className="element__wrapper">
        <span className="input__heading">Enter your Portfolio url: </span>
        <input
          type="text"
          placeholder="Portfolio url"
          value={contact.portfolio}
          onChange={(e) => handlePortfolioChange(e)}
        />
      </div>
      <div className="element__wrapper">
        <span className="input__heading">Enter your Instagram url: </span>
        <input
          type="text"
          placeholder="Instagram url"
          value={contact.instagram}
          onChange={(e) => handleInstagramChange(e)}
        />
      </div>
      <div className="element__wrapper">
        <span className="input__heading">Enter your Github: </span>
        <input
          type="text"
          placeholder="Github"
          value={contact.github}
          onChange={(e) => handleGithubChange(e)}
        />
      </div>
    </div>
  );
};

export default Contact;
