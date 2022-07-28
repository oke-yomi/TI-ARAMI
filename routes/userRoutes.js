const express = require("express");

const getAllUsers = (req, res) => {
	res.status(500).json({
		status: "error",
		message: "This route is not yet defined",
	});
};

const getSingleUser = (req, res) => {
	res.status(500).json({
		status: "error",
		message: "This route is not yet defined",
	});
};

const addNewUser = (req, res) => {
	res.status(500).json({
		status: "error",
		message: "This route is not yet defined",
	});
};

const updateUser = (req, res) => {
	res.status(500).json({
		status: "error",
		message: "This route is not yet defined",
	});
};

const deleteUser = (req, res) => {
	res.status(500).json({
		status: "error",
		message: "This route is not yet defined",
	});
};

const router = express.Router();

router.route("/").get(getAllUsers).post(addNewUser);
router.route("/:id").get(getSingleUser).patch(updateUser).delete(deleteUser);

module.exports = router;
