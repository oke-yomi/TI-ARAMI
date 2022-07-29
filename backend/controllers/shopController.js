const fs = require("fs");

const shop = JSON.parse(
	fs.readFileSync(`${__dirname}/../dev-data/data/sample.json`)
);

exports.checkID = (req, res, next, val) => {
  console.log(`Id is ${val}`);
	const id = req.params.id * 1;

	if (id > shop.length) {
		return res.status(404).json({
			status: "failed",
			message: "Item not found",
		});
	}

	next();
};

exports.getAllItems = (req, res) => {
	// console.log(req.requestTime)

	res.status(200).json({
		status: "success",
		results: shop.length,
		data: {
			shop: shop,
		},
	});
};

exports.getSingleItem = (req, res) => {
	const id = req.params.id * 1;

	const shopItem = shop.find((el) => el._id === id);

	res.status(200).json({
		status: "success",
		data: {
			shopItem,
		},
	});
};

exports.createNewItem = (req, res) => {
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

exports.updateItem = (req, res) => {
	res.status(200).json({
		status: "success",
		data: {
			shopItem: "<Updated item here...>",
		},
	});
};

exports.deleteItem = (req, res) => {
	res.status(204).json({
		status: "success",
		data: null,
	});
};
