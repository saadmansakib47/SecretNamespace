const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Update user profile
router.put("/:id", userController.updateUser);

// Delete user
router.delete("/:id", userController.deleteUser);

module.exports = router;
