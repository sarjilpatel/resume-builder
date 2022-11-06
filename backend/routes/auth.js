const router = require("express").Router();
const User = require("../models/userModel");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const resumeModel = require("../models/resumeModel");

router.post("/register", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      console.log(user);
      return res.status(401).json("username exist!");
    }

    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
      ).toString(),
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return res.status(401).json("wrong credentials!");
    }
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );

    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    if (originalPassword !== req.body.password) {
      return res.status(401).json("wrong credentials!");
    }
    let resume = {};
    if (!user.resume) {
      resume = {
        introduction: {
          description: "",
          imageUrl: "",
          name: "",
          smallIntro: "",
        },
        contact: {
          email: "",
          github: "",
          instagram: "",
          linkedIn: "",
          phone: "",
          portfolio: "",
        },
        education: [
          {
            course: "",
            degree: "",
            endDate: "",
            id: 1,
            instituteName: "",
            location: "",
            startDate: "",
          },
          {
            course: "",
            degree: "",
            endDate: "",
            id: 2,
            instituteName: "",
            location: "",
            startDate: "",
          },
        ],
        projects: [
          {
            name: "",
            description: "",
            startDate: "",
            endDate: "",
            id: 1,
          },
          {
            name: "",
            description: "",
            startDate: "",
            endDate: "",
            id: 2,
          },
          {
            name: "",
            description: "",
            startDate: "",
            endDate: "",
            id: 3,
          },
          {
            name: "",
            description: "",
            startDate: "",
            endDate: "",
            id: 4,
          },
        ],
        languages: [
          {
            name: "",
            level: "",
            id: 1,
          },
          {
            name: "",
            level: "",
            id: 2,
          },
          {
            name: "",
            level: "",
            id: 3,
          },
          {
            name: "",
            level: "",
            id: 4,
          },
        ],
        workexperience: [
          {
            position: "",
            companyName: "",
            startDate: "",
            endDate: "",
            location: "",
            description: "",
            id: 1,
          },
          {
            position: "",
            companyName: "",
            startDate: "",
            endDate: "",
            location: "",
            description: "",
            id: 2,
          },
          {
            position: "",
            companyName: "",
            startDate: "",
            endDate: "",
            location: "",
            description: "",
            id: 3,
          },
          {
            position: "",
            companyName: "",
            startDate: "",
            endDate: "",
            location: "",
            description: "",
            id: 4,
          },
        ],
        skills: [
          {
            name: "",
            id: 1,
          },
          {
            name: "",
            id: 2,
          },
          {
            name: "",
            id: 3,
          },
          {
            name: "",
            id: 4,
          },
          {
            name: "",
            id: 5,
          },
          {
            name: "",
            id: 6,
          },
          {
            name: "",
            id: 7,
          },
          {
            name: "",
            id: 8,
          },
        ],
      };
    } else {
      resume = await resumeModel.findById(user.resume);
      console.log(user.resume);
      console.log(resume);
    }

    const { password, ...others } = user._doc;

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    res.status(200).json({ ...others, accessToken, resume });
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

module.exports = router;
