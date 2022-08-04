import { Router } from "express";
import {
	// checkID,
	getAllItems,
	// checkBody,
	createNewItem,
	getSingleItem,
	updateItem,
	deleteItem,
} from "./../controllers/shopController.js";

const router = Router();

// router.param("id", checkID);

router
	.route("/")
	.get(getAllItems)
	.post(createNewItem);

router
	.route("/:id")
	.get(getSingleItem)
	.patch(updateItem)
	.delete(deleteItem);

export default router;
