import express from "express";
import {
  getAllTask,
  createTask,
  deleteTask,
  editTask,
} from "../Controllers/taskControllers.js";
const router = express.Router();
router.get("/list", getAllTask);
router.post("/create", createTask);
router.delete("/delete/:id", deleteTask);
router.put("/edit/:id", editTask);
export default router;
