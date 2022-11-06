import axios from "axios";
import React, { useEffect, useState } from "react";
import Contact from "../../Components/Contact";
import Education from "../../Components/Education";
import Experience from "../../Components/Experience";
import Introduction from "../../Components/Introduction";
import Language from "../../Components/Language";
import Project from "../../Components/Project";
import Skill from "../../Components/Skill";
import "./Home.css";
import { saveAs } from "file-saver";

const Home = (props) => {
  const [introduction, setIntroduction] = useState({});
  const [contact, setContact] = useState({});
  const [education1, setEducation1] = useState({});

  const [education2, setEducation2] = useState({});
  const [project1, setProject1] = useState({});
  const [project2, setProject2] = useState({});
  const [project3, setProject3] = useState({});
  const [project4, setProject4] = useState({});

  const [experience1, setExperience1] = useState({});
  const [experience2, setExperience2] = useState({});
  const [experience3, setExperience3] = useState({});
  const [experience4, setExperience4] = useState({});

  const [skill1, setSkill1] = useState({});
  const [skill2, setSkill2] = useState({});
  const [skill3, setSkill3] = useState({});
  const [skill4, setSkill4] = useState({});
  const [skill5, setSkill5] = useState({});
  const [skill6, setSkill6] = useState({});
  const [skill7, setSkill7] = useState({});
  const [skill8, setSkill8] = useState({});
  const [language1, setLanguage1] = useState({});
  const [language2, setLanguage2] = useState({});
  const [language3, setLanguage3] = useState({});
  const [language4, setLanguage4] = useState({});

  const fetchResume = async () => {
    const resume = props.resume;
    setIntroduction(resume.introduction);
    setContact(resume.contact);
    setEducation1(resume.education[0]);
    setEducation2(resume.education[1]);
    setProject1(resume.projects[0]);
    setProject2(resume.projects[1]);
    setProject3(resume.projects[2]);
    setProject4(resume.projects[3]);
    setExperience1(resume.workexperience[0]);
    setExperience2(resume.workexperience[1]);
    setExperience3(resume.workexperience[2]);
    setExperience4(resume.workexperience[3]);
    setSkill1(resume.skills[0]);
    setSkill2(resume.skills[1]);
    setSkill3(resume.skills[2]);
    setSkill4(resume.skills[3]);
    setSkill5(resume.skills[4]);
    setSkill6(resume.skills[5]);
    setSkill7(resume.skills[6]);
    setSkill8(resume.skills[7]);
    setLanguage1(resume.languages[0]);
    setLanguage2(resume.languages[1]);
    setLanguage3(resume.languages[2]);
    setLanguage4(resume.languages[3]);
    console.log(resume);
  };

  useEffect(() => {
    fetchResume();
  }, []);

  return (
    <div className="home">
      <div className="elements__wrapper">
        <Introduction
          className="element"
          introduction={introduction}
          setIntroduction={setIntroduction}
        />
        <Contact
          className="element"
          contact={contact}
          setContact={setContact}
        />
      </div>
      <hr />

      <div className="elements__wrapper">
        <Education
          education={education1}
          className="element"
          setEducation={setEducation1}
        />

        <Education
          education={education2}
          className="element"
          setEducation={setEducation2}
        />
      </div>
      <hr />
      <div className="elements__wrapper">
        <Project project={project1} setProject={setProject1} />
        <Project project={project2} setProject={setProject2} />
      </div>
      <div className="elements__wrapper">
        <Project project={project3} setProject={setProject3} />
        <Project project={project4} setProject={setProject4} />
      </div>
      <hr />
      <div className="elements__wrapper">
        <Experience experience={experience1} setExperience={setExperience1} />
        <Experience experience={experience2} setExperience={setExperience2} />
      </div>
      <div className="elements__wrapper">
        <Experience experience={experience3} setExperience={setExperience3} />
        <Experience experience={experience4} setExperience={setExperience4} />
      </div>
      <hr />

      <div className="elements__wrapper">
        <Skill skill={skill1} setSkill={setSkill1} id={1} />
        <Skill skill={skill2} setSkill={setSkill2} id={2} />
        <Skill skill={skill3} setSkill={setSkill3} id={3} />
        <Skill skill={skill4} setSkill={setSkill4} id={4} />
      </div>
      <div className="elements__wrapper">
        <Skill skill={skill5} setSkill={setSkill1} id={5} />
        <Skill skill={skill6} setSkill={setSkill1} id={6} />
        <Skill skill={skill7} setSkill={setSkill1} id={7} />
        <Skill skill={skill8} setSkill={setSkill1} id={8} />
      </div>
      <hr />
      <div className="elements__wrapper">
        <Language language={language1} setLanguage={setLanguage1} />
        <Language language={language2} setLanguage={setLanguage2} />
        <Language language={language3} setLanguage={setLanguage3} />
        <Language language={language4} setLanguage={setLanguage4} />
      </div>

      <button
        className="submitButton
"
        onClick={async () => {
          const education = [education1, education2];
          const projects = [project1, project2, project3, project4];
          const workexperience = [
            experience1,
            experience2,
            experience3,
            experience4,
          ];
          const skills = [
            skill1,
            skill2,
            skill3,
            skill4,
            skill5,
            skill6,
            skill7,
            skill8,
          ];
          const languages = [language1, language2, language3, language4];
          console.log({
            introduction,
            contact,
            education,
            projects,
            workexperience,
            skills,
            languages,
          });
          await axios
            .post(
              "http://localhost:5000/api/user/create-pdf",
              {
                introduction,
                contact,
                education,
                projects,
                workexperience,
                skills,
                languages,
              },
              {
                headers: {
                  token: "Bearer " + props.user.accessToken,
                },
              }
            )
            .then(async () => {
              console.log("created");
              await axios
                .get("http://localhost:5000/api/user/fetch-pdf", {
                  responseType: "arraybuffer",
                  headers: {
                    token: "Bearer " + props.user.accessToken,
                  },
                })
                .then((res) => {
                  const pdfBlob = new Blob([res.data], {
                    type: "application/pdf",
                  });
                  saveAs(pdfBlob, ` Resume.pdf`);
                })
                .catch((err) => {
                  console.log(err);
                });
            });
        }}
      >
        Submit
      </button>

      <button
        onClick={async () => {
          await axios
            .get(
              "http://localhost:5000/api/user/fetch-pdf",

              {
                headers: {
                  token: "Bearer " + props.user.accessToken,
                },
              }
            )
            .then((res) => {
              console.log(res);
            });
        }}
      >
        Download
      </button>
    </div>
  );
};

export default Home;
