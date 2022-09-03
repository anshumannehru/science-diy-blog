const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const authMiddleware = require("../../middleware/authentication");
const ActivityPage = require("../../models/ActivityPage");
/*
Method : POST
@Description : To post content for activity page
*/
router.post("/", authMiddleware, async (req, res) => {
  const userId = req.user.id;
  const {
    title,
    thumbnailImage,
    Category,
    safetyDetails,
    experimentDetails,
    tags,
    experimentProcedure,
  } = req.body; //what all fields to be sent
  try {
    const activity = new ActivityPage({
      title,
      thumbnailImage,
      Category,
      safetyDetails,
      experimentProcedure,
      experimentDetails,
      tags,
      admin:userId,
    });
    console.log(typeof(userId))
    await activity.save();
    res.json(activity);
  } catch (error) {
    console.log(error);
  }
});

router.get("/me", authMiddleware, async (req, res) => {
  try {
    const activity = await ActivityPage.find({admin:req.user.id});
    res.json(activity);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
