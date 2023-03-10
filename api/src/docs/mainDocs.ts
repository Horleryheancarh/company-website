/**
 * @openapi
 * '/api/contact':
 *   post:
 *     tags:
 *       - Main
 *     summary: Send Contact Us Mail
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             allOf:
 *               - $ref: '#/components/schemas/Contact'
 *     responses:
 *       200:
 *         description: Contact Response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   default: 'Sent Mail'
 * 
 * components:
 *   schemas:
 *     Contact:
 *       type: object
 *       title: Contact
 *       required:
 *         - email
 *         - subject
 *         - text
 *       properties:
 *         email:
 *           type: string
 *           default: 'jane@gmail.com'
 *         subject:
 *           type: string
 *           default: 'Testing'
 *         text:
 *           type: string
 *           default: 'Lorem ipsum dolor amet sit'
 */