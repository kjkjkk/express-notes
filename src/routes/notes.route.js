import express from "express";

import { createNote, viewNote, updateNote, deleteNote } from "../controller/notes.controller.js";

const router = express.Router();

router.post("/create", createNote);
router.get("/view/:id", viewNote);
router.get("/update/:id", updateNote);
router.get("/delete/:id", deleteNote);

export default router;
