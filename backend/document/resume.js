module.exports = (values) => {
  const {
    introduction,

    contact,
    education,
    workexperience,
    skills,
    projects,
    languages,
  } = values;
  const { name, smallIntro, description, imageUrl } = introduction;
  const { email, phone, linkedIn, location, portfolio, instagram, github } =
    contact;

  let htmlTemplate = `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

   <style>
      * {
        margin: 0%;
        padding: 0%;
        text-decoration: none;
        font-family: ubuntu;
      }
      a {
        color: white;
      }

      body {
        background-color: #303d46;
      }

      .introduction {
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: #303d46;
        color: white;
        padding: 2rem 0;
      }
      .intro {
        display: flex;
        flex-direction: column;
        max-width: 90vw;
      }

      .intro > h1 {
        font-size: 2rem;
        font-weight: 300;
        padding-left: 1rem;
      }

      .small__introduction {
        font-size: 1rem;
        color: #27b3a2;
        font-weight: 300;
        margin: 0.3rem 0;
        padding-left: 1rem;
      }

      .intro__description {
        font-size: 0.8rem;
        font-weight: 100;
        flex-wrap: wrap;
        background-color: #1c2328;
        padding: 1rem;
        border-radius: 10px;
      }

      .image {
        background-image: url("./sarjil.png");
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        height: 100px;
        width: 100px;
        border: 2px solid #27b3a2;
        border-radius: 50%;
      }

      /* contact */

      .contact {
        background-color: #1c2328;
        padding: 1.5rem 7rem;
        max-width: 100vw;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
      }
      .contact__wrapper {
        display: flex;
        color: white;
        display: flex;
        align-items: center;
        gap: 1rem;
        display: flex;
        background-color: #303d46;
        padding: 1rem;
        border-radius: 10px;
        flex: 20%;
      }

      .contact__wrapper > img {
        height: 20px;
        width: 20px;
      }

      /* content  */

      .content {
        display: flex;
        width: 100%;
        justify-content: space-around;
      }

      .section {
        display: flex;
        flex-direction: column;
        flex: 50%;
        gap: 2rem;
        margin:1rem;
      }

      .content__name {
        font-size: 2rem;
        color: #27b3a2;
        text-decoration: underline;
      }

      .content__specification {
        font-weight: 900;
      }

      .content__title {
        font-weight: 500;
        font-size: 1.5rem;
      }

      .content__description__date__location {
        display: flex;
        justify-content: space-between;
        color: #27b3a2;
        font-size: 0.8rem;
        padding-right: 15%;
      }
      .content__description__title {
        color: #27b3a2;
        font-size: 0.8rem;
      }

      .content__description {
        font-size: 1rem;
        font-weight: 400;
      }

      .content__wrapper {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        background-color: #1c2328;
        color: white;
        border-radius: 10px;
      }

      .education {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        margin: 0.5rem 0rem;
        background-color: #303d46;
        padding: 1rem;
        border-radius: 10px;
      }

      .skills__wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
      }
      .skill {
        color: white;
        background-color: #4d5c66;
        padding: 0.5rem;
        border-radius: 10px;
      }

      .languages {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
      }

      .language__wrapper {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        background-color: #303d46;
        padding: 1rem;
        border-radius: 10px;
      }
    </style>
  </head>
  <body>
    <div class="introduction">
      <div class="intro">
        <h1>${name}</h1>
        <p class="small__introduction">${smallIntro}</p>
        <p class="intro__description">
          ${description}
        </p>
      </div>
      <div class="image"></div>
    </div>
    <div class="contact">
      <div class="contact__wrapper">
        <img src="https://res.cloudinary.com/djnkkdrhb/image/upload/v1667580289/resume%20builder/mail_tykuaz.png" alt="" />
        <p>${email}</p>
      </div>
      <div class="contact__wrapper">
        <img src="https://res.cloudinary.com/djnkkdrhb/image/upload/v1667580289/resume%20builder/phone_lcue6a.png" alt="" />
        <p>${phone}</p>
      </div>
      <div class="contact__wrapper">
        <img src="https://res.cloudinary.com/djnkkdrhb/image/upload/v1667580289/resume%20builder/linkedin_jymxie.png" alt="" />
        <p>
          <a href="${linkedIn}"
            >LinkedIn</a
          >
        </p>
      </div>
      <div class="contact__wrapper">
        <img src="https://res.cloudinary.com/djnkkdrhb/image/upload/v1667580289/resume%20builder/location_qffhwz.png" alt="" />
        <p>${location}</p>
      </div>
      <div class="contact__wrapper">
        <img src="https://res.cloudinary.com/djnkkdrhb/image/upload/v1667580290/resume%20builder/website_z3tjzt.png" alt="" />
        
        <p>
          <a href="${portfolio}"
            >Protfolio</a
          >
        </p>
      </div>
      <div class="contact__wrapper">
        <img src="https://res.cloudinary.com/djnkkdrhb/image/upload/v1667580289/resume%20builder/instagram_cpial2.png" alt="" />
        <p><a href="${instagram}">Instagram</a></p>
      </div>
      <div class="contact__wrapper">
        <img src="https://res.cloudinary.com/djnkkdrhb/image/upload/v1667580289/resume%20builder/github_l0owwk.png" alt="" />
        <p><a href="${github}">Github</a></p>
      </div>
    </div>

    <div class="content">
      <div class="section">
        <div class="content__wrapper">
          <h2 class="content__name">Education</h2>
          `;
  education.forEach((edu) => {
    htmlTemplate += `
              <div class="education">
              <h3 class="content__specification">${edu.degree}</h3>
              <p class="content__title">${edu.instituteName}</p>
              <div class="content__description__date__location">
                <p class="content__date">${edu.startDate} - ${edu.endDate}</p>
                <p class="content__location">${edu.location}</p>
              </div>
              <p class="content__description__title">Courses</p>
              <p class="content__description">${edu.course}</p>
            </div>
          `;
  });

  htmlTemplate += `
        </div>
        <div class="content__wrapper">
          <h2 class="content__name">Work Experience</h2>
          `;
  workexperience?.forEach((work) => {
    htmlTemplate += `<div class="education">
              <h3 class="content__specification">${work.position}</h3>
              <p class="content__title">${work.companyName}</p>
              <div class="content__description__date__location">
                <p class="content__date">${work.startDate} - ${work.endDate}</p>
                <p class="content__location">${work.location}</p>
              </div>
              <p class="content__description__title">Achievements/Tasks</p>
              <p class="content__description">
                ${work.description}
              </p>
            </div>;
            `;
  });

  htmlTemplate += `
          
        </div>
      </div>
      <div class="section">
        <div class="content__wrapper">
          <h2 class="content__name">Skills</h2>
          <div class="skills__wrapper">
            `;
  skills.forEach((skill) => {
    htmlTemplate += `<div class="skill">${skill.name}</div>`;
  });

  htmlTemplate += `
          </div>
        </div>
        <div class="content__wrapper">
          <h2 class="content__name">Projects</h2>
          `;
  projects.forEach((project) => {
    htmlTemplate += `<div class="education">
              <p class="content__title">${project.name}</p>
              <div class="content__description__date__location">
                <p class="content__date">${project.startDate} - ${project.endDate}</p>
              </div>
              <p class="content__description__title">Description</p>
              <p class="content__description">
                ${project.description}
              </p>
            </div>`;
  });

  htmlTemplate += `

        </div>
        <div class="content__wrapper">
          <h2 class="content__name">Languages</h2>
          <div class="languages">
            `;
  languages.forEach((language) => {
    htmlTemplate += `<div class="language__wrapper">
                <div class="content__description">${language.name}</div>
                <div class="content__description__title">${language.level}</div>
              </div>`;
  });

  htmlTemplate += `
          </div>
        </div>
      </div>
    </div>
  </body>
</html>

  `;
  return htmlTemplate;
};
