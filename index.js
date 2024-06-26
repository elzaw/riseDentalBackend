const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;
const dotenv = require("dotenv");
dotenv.config();
const patientsRoutes = require("./routes/patientsRoutes");
const examinationsRoutes = require("./routes/examinationsRoutes");
const doctorsRoutes = require("./routes/doctorsRoutes");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());

app.use("/patients", patientsRoutes);
app.use("/examinations", examinationsRoutes);
app.use("/doctors", doctorsRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(
    `Rise Dental app listening in ${process.env.NODE_ENV} on port ${port}!`
  );
});
