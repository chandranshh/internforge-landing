const express = require("express");
const router = express.Router();
const JobListing = require("../models/JobListing");

// GET /joblistings - Get all job listings
router.get("/", async (req, res) => {
  try {
    const jobListings = await JobListing.find();
    res.json(jobListings);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// POST /joblistings - Create a new job listing
router.post("/", async (req, res) => {
  try {
    const newJobListing = new JobListing(req.body);
    const savedJobListing = await newJobListing.save();
    res.status(201).json(savedJobListing);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
