import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import morgan from "morgan";

dotenv.config();
connectDB();
const app = express();

app.use(morgan("dev"));
app.use(express.json());

import shopRouter from "./routes/shopRoutes.js";
import userRouter from "./routes/userRoutes.js";

app.use("/api/v1/shop", shopRouter);
app.use("/api/v1/users", userRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}...`);
});
