import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import errorHandler from "./middleware/errorHandler.js";
import staticFileHandler from "./middleware/staticFileHandler.js";

dotenv.config();
connectDB();
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

// display static files
app.use(staticFileHandler);

import shopRouter from "./routes/shopRoutes.js";
import userRouter from "./routes/userRoutes.js";

app.use("/api/v1/shop", shopRouter);
app.use("/api/v1/users", userRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(
		`Example app listening on port ${PORT}...`
	);
});
