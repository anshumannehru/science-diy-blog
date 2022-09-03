const mongoose = require("mongoose");

const ActivityPageSchema = new mongoose.Schema({
 admin:{
    type:mongoose.Schema.Types.ObjectId,
    ref:Admin
 },
  title: {
    type: String,
  },
  thumbnailImage: {
    type: String,
  },
  Category: {
    ageGroup: {
      type: String,
    },
    Duration: {
      type: String,
    },
    DifficultyLevel: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
    },
  },
  safetyDetails: {
    type: String,
  },
  experimentProcedure: [
    {
      stepName: {
        type: String,
      },
      title: {
        type: String,
      },
      description: {
        type: String,
      },
      media: {
        type: String,
      },
    },
  ],
  tags: {
    type: [String],
  },
});

module.exports = ActivityPage = mongoose.model(
  "ActivityPage",
  ActivityPageSchema
);
