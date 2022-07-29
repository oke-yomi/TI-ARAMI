const express = require("express");
const morgan = require("morgan");

const shopRouter = require("./routes/shopRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

// TODO: Handle CORS + middleware
// TODO: connect mongoose and handle mongoDB activities

app.use(morgan("dev"));
app.use(express.json());

app.use((req, res, next) => {
	req.requestTime = new Date().toISOString();
	next();
});

app.use("/api/v1/shop", shopRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
