const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
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
    visits: {
      type: [
        {
          date: { type: Date, required: true },
          description: { type: String, required: true },
        },
      ],
      required: true,
    },
    notes: [
      {
        date: { type: Date, required: true },
        description: { type: String, required: true },
      },
    ],
  },
  { collection: "Patient" }
);

const Patient = mongoose.model("Patient", patientSchema);

module.exports = { Patient };
