
const express = require("express");
const morgan = require("morgan");

const shopRouter = require("./routes/shopRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use((req, res, next) => {
	req.requestTime = new Date().toISOString();
	next();
});



app.use("/api/v1/shop", shopRouter);
app.use("/api/v1/users", userRouter);

const PORT = 5000;
app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}...`);
});
