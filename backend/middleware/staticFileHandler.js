import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const staticFileHandler = express.static(
	path.join(__dirname, "public")
);

export default staticFileHandler;
