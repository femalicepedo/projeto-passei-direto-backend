import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";

import DiscController from "./app/controllers/DiscController";

const router = new Router();
const upload = multer(multerConfig);

router.get("/discs", DiscController.getDiscs);
router.get("/disc/:id", DiscController.getDiscById);
router.get("/discs/:text", DiscController.getDiscByText);
router.post("/discs", upload.single("file"), DiscController.store);
router.put("/discs", upload.single("file"), DiscController.update);
router.delete("/discs/:id", DiscController.delete);

export default router;
