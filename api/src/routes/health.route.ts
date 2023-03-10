import { Router } from "express";
import { healthCheck } from "../controllers/health.controller";

const router = Router();

/**
 * @openapi
 * '/api/health':
 *   get:
 *     tags:
 *       - Health
 *     description: Responds is app is up and running
 *     responses:
 *       200:
 *         description: Ready
 */
router.get('/health', healthCheck);

export default router;