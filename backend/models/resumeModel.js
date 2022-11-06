const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    introduction: {
      name: {
        type: String,
        required: [true, "name is required!"],
        trim: true,
      },
      smallIntro: {
        type: String,
        trim: true,
      },
      description: {
        type: String,
        required: [true, "descripption is required!"],
      },
    },
    contact: {
      email: {
        type: String,
        required: [true, "name is required!"],
        trim: true,
      },
      phone: {
        type: String,
      },
      linkedIn: {
        type: String,
      },
      instagram: {
        type: String,
      },
      personalPortfolio: {
        type: String,
      },
      github: {
        type: String,
      },
    },
    education: [
      {
        instituteName: {
          type: String,
        },
        degree: {
          type: String,
        },
        startDate: {
          type: String,
        },
        endDate: {
          type: String,
        },
        location: {
          type: String,
        },
        courses: {
          type: String,
        },
      },
    ],
    projects: [
      {
        name: {
          type: String,
        },
        startDate: {
          type: String,
        },
        endDate: {
          type: String,
        },
        description: {
          type: String,
        },
      },
    ],
    skills: [
      {
        name: {
          type: String,
        },
      },
    ],
    languages: [
      {
        name: {
          type: String,
        },
        level: {
          type: String,
        },
      },
    ],
    workexperience: [
      {
        companyName: {
          type: String,
        },
        description: {
          type: String,
        },
        location: {
          type: String,
        },
        startDate: {
          type: String,
        },
        endDate: {
          type: String,
        },
        position: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Resume", resumeSchema);
