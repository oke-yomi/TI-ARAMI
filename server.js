const fs = require("fs");
const express = require("express");

const app = express();

app.use(express.json());

const shop = JSON.parse(
	fs.readFileSync(`${__dirname}/dev-data/data/sample.json`)
);

// GET all items in stop
const getAllItems = (req, res) => {
	res.status(200).json({
		status: "success",
		results: shop.length,
		data: {
			shop: shop,
		},
	});
};

// GET a single shop Item
const getSingleItem = (req, res) => {
	const id = req.params.id * 1;

	if (id > shop.length) {
		return res.status(404).json({
			status: "failed",
			message: "Item not found",
		});
	}

	const shopItem = shop.find((el) => el._id === id);

	res.status(200).json({
		status: "success",
		data: {
			shopItem,
		},
	});
};

// Create a new Item (POST)
const createNewItem = (req, res) => {
	const newId = shop[shop.length - 1]._id + 1;
	const newShopItem = Object.assign(
		{
			_id: newId,
		},
		req.body
	);

	shop.push(newShopItem);

	fs.writeFile(
		`${__dirname}/dev-data/data/sample.json`,
		JSON.stringify(shop),
		(err) => {
			res.status(201).json({
				status: "success",
				data: {
					shop: newShopItem,
				},
			});
		}
	);
};

// Update an item in the shop (UPDATE)
const updateItem = (req, res) => {
	const id = req.params.id * 1;

	if (id > shop.length) {
		return res.status(404).json({
			status: "failed",
			message: "Item not found",
		});
	}

	res.status(200).json({
		status: "success",
		data: {
			shopItem: "<Updated item here...>",
		},
	});
};

// DELETE a single item in the store
const deleteItem = (req, res) => {
	const id = req.params.id * 1;

	if (id > shop.length) {
		return res.status(404).json({
			status: "failed",
			message: "Item not found",
		});
	}

	res.status(204).json({
		status: "success",
		data: null,
	});
};

app.route("/api/v1/shop").get(getAllItems).post(createNewItem);
app
	.route("/api/v1/shop/:id")
	.get(getSingleItem)
	.patch(updateItem)
	.delete(deleteItem);

const PORT = 5000;
app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}...`);
});
