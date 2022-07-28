const express = require("express");
const shopController = require("./../controllers/shopController");

const router = express.Router();

router
	.route("/")
	.get(shopController.getAllItems)
	.post(shopController.createNewItem);

router
	.route("/:id")
	.get(shopController.getSingleItem)
	.patch(shopController.updateItem)
	.delete(shopController.deleteItem);

module.exports = router;
