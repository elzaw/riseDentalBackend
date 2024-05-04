const express = require("express");
const router = express.Router();

const {
  createExamination,
  getAllExaminations,
  getExaminationById,
  updateExamination,
  deleteExamination,
} = require("../controllers/examinationsController");

router.route("/").get(getAllExaminations).post(createExamination);

router
  .route("/:id")
  .get(getExaminationById)
  .patch(updateExamination)
  .delete(deleteExamination);

module.exports = router;
