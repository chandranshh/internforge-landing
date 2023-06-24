const mongoose = require("mongoose");

const JobListingSchema = new mongoose.Schema(
  {
    jobTitle: { type: String, required: true },
    company: { type: String, required: true },
    companyLogo: { type: String, required: true },
    skills: { type: [String], required: true },
    duration: { type: String, required: true },
    stipend: { type: String, required: true },
    applicants: { type: String, required: true },
    postedOn: { type: Date, required: true },
    endsBy: { type: Date, required: true },
    location: { type: String, required: true },
    openPositions: { type: String, required: true },
    experience: { type: String, required: true },
    aboutUs: { type: String, required: true },
    requirements: { type: [String], required: true },
    responsibilities: { type: [String], required: true },
  },
  { timestamps: true }
);

const JobListing = mongoose.model("JobListing", JobListingSchema);

module.exports = JobListing;
