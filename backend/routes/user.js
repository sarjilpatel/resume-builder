const router = require("express").Router();
const User = require("../models/userModel");
const { verifyToken } = require("./verifyToken");
const htmlTemplate = require("../document/resume");
const resumeModel = require("../models/resumeModel");
const puppeteer = require("puppeteer");
const path = require("path");

router.post("/create-pdf", verifyToken, async (req, res) => {
  try {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    const user = await User.findById(req.user.id);

    if (!user.resume) {
      const resumeData = {
        introduction: req.body.introduction,
        contact: req.body.contact,
        education: req.body.education,
        projects: req.body.projects,
        languages: req.body.languages,
        workexperience: req.body.workexperience,
        skills: req.body.skills,
      };
      const newResume = await resumeModel.create(resumeData);
      user.resume = newResume._id;
      await user.save();
      await newResume.save();
    } else {
      await resumeModel.findByIdAndDelete(user.resume);
      const resumeData = {
        introduction: req.body.introduction,
        contact: req.body.contact,
        education: req.body.education,
        projects: req.body.projects,
        languages: req.body.languages,
        workexperience: req.body.workexperience,
        skills: req.body.skills,
      };
      const newResume = await resumeModel.create(resumeData);
      user.resume = newResume._id;
      await user.save();
      await newResume.save();
    }
    const finalResume = await resumeModel.findById(user.resume);
    const html = htmlTemplate(finalResume);
    await page.setContent(html, { waitUntil: "networkidle0" });

    await page.emulateMediaType("screen");

    const pdf = await page.pdf({
      path: path.join(__dirname, `/Resume.pdf`),
      margin: { top: "0px", right: "0px", bottom: "0px", left: "0px" },
      printBackground: true,
      format: "A4",
      scale: 1,
    });

    await browser.close();

    res.status(201).json({ created: finalResume });
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

router.get("/fetch-pdf", verifyToken, (req, res) => {
  const file = path.join(__dirname, `/Resume.pdf`);
  console.log(file);
  console.log("show");
  res.download(file);
});

module.exports = router;
