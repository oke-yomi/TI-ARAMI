import { Router } from "express";
import {
	getAllUsers,
	addNewUser,
	getSingleUser,
	updateUser,
	deleteUser,
} from "./../controllers/userController.js";

const router = Router();

router.route("/").get(getAllUsers).post(addNewUser);

router.route("/:id").get(getSingleUser).patch(updateUser).delete(deleteUser);

export default router;
