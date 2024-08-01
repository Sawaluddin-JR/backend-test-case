const express = require('express');
const router = express.Router();
const memberController = require('../controllers/memberController');

/**
 * @swagger
 * /api/members:
 *   get:
 *     summary: Retrieve a list of members
 *     responses:
 *       200:
 *         description: A list of members.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   code:
 *                     type: string
 *                   deleted_at:
 *                     type: string
 *                     format: date-time
 */
router.get('/', memberController.getAllMembers);

/**
 * @swagger
 * /api/members/{id}:
 *   get:
 *     summary: Get a member by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The member ID
 *     responses:
 *       200:
 *         description: A single member.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 code:
 *                   type: string
 *                 name:
 *                   type: string
 *       404:
 *         description: Member not found.
 */
router.get("/:id", memberController.getMemberById);

/**
 * @swagger
 * /api/members/add-member:
 *   post:
 *     summary: Add a member
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: A member has been added.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 code:
 *                   type: string
 *                 name:
 *                   type: string
 *                 deleted_at:
 *                   type: string
 *                   format: date-time
 */
router.post('/add-member', memberController.addMember);

/**
 * @swagger
 * /api/members/delete-member/{id}:
 *   delete:
 *     summary: Delete a member by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The member ID
 *     responses:
 *       200:
 *         description: The member has been deleted.
 */
router.delete('/delete-member/:id', memberController.deleteMember);

/**
 * @swagger
 * /api/members/update-member/{id}:
 *   put:
 *     summary: Update a member by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The member ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: The member has been updated.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 code:
 *                   type: string
 *                 name:
 *                   type: string
 *       404:
 *         description: Member not found.
 */
router.put('/update-member/:id', memberController.updateMember);

module.exports = router;
