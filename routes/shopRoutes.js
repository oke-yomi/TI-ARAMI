const express = require("express");
const fs = require("fs");

const shop = JSON.parse(
	fs.readFileSync(`${__dirname}/../dev-data/data/sample.json`)
);

const getAllItems = (req, res) => {
	// console.log(req.requestTime)

	res.status(200).json({
		status: "success",
		results: shop.length,
		data: {
			shop: shop,
		},
	});
};

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
		`${__dirname}/../dev-data/data/sample.json`,
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

const router = express.Router();

router.route("/").get(getAllItems).post(createNewItem);
router.route("/:id").get(getSingleItem).patch(updateItem).delete(deleteItem);

module.exports = router;
