import { Router } from "express";
import {
	getAllItems,
	createNewItem,
	getSingleItem,
	updateItem,
	deleteItem,
} from "./../controllers/shopController.js";

const router = Router();

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
