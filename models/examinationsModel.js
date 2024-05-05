const mongoose = require("mongoose");

const examinationsSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    examinationFee: {
      type: Number,
      required: true,
    },
    paid: {
      type: Number,
      required: true,
    },
    remaining: {
      type: Number,
      required: true,
    },
    action: {
      type: String,
      enum: ["حشو عصب", "حشو عادي", "ضرس أمامي", "ضرس خلفي"],
      required: true,
    },
    notes: { type: String, required: true },
    date: { type: Date, required: true },
    nextVisit: { type: Date, required: true },
  },
  { collection: "Examinations" }
);

const Examinations = mongoose.model("Examinations", examinationsSchema);

module.exports = { Examinations };
