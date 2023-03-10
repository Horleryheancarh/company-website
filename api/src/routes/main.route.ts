import { Router } from "express";
import { contactUs } from "../controllers/main.controller";

const router = Router();

router.post('contact', contactUs);

export default router;
