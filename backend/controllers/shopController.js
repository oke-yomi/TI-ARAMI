import { readFileSync, writeFile } from "fs";

// solve __dirname is not an ES module
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const shop = JSON.parse(
	readFileSync(
		`${__dirname}/../dev-data/data/sample.json`
	)
);

export const getAllItems = (req, res) => {
	res.status(200).json({
		status: "success",
		results: shop.length,
		data: {
			shop: shop,
		},
	});
};

export const getSingleItem = (req, res) => {
	const id = req.params.id * 1;

	const shopItem = shop.find((el) => el._id === id);

	res.status(200).json({
		status: "success",
		data: {
			shopItem,
		},
	});
};

export const createNewItem = (req, res) => {
	const newId = shop[shop.length - 1]._id + 1;
	const newShopItem = Object.assign(
		{
			_id: newId,
		},
		req.body
	);

	shop.push(newShopItem);

	writeFile(
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

export const updateItem = (req, res) => {
	res.status(200).json({
		status: "success",
		data: {
			shopItem: "<Updated item here...>",
		},
	});
};

export const deleteItem = (req, res) => {
	res.status(204).json({
		status: "success",
		data: null,
	});
};
