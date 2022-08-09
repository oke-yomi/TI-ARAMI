import { Schema, model } from "mongoose";

const reviewSchema = Schema(
	{
		name: { type: String, required: true },
		rating: { type: Number, required: true },
		comment: { type: String, required: true },
		user: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
	},
	{
		timestamps: true,
	}
);

const shopSchema = Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		name: {
			type: String,
			required: true,
		},
		imageCover: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		reviews: [reviewSchema],
		ratingAverage: {
			type: Number,
			required: true,
			default: 0,
		},
		numReviews: {
			type: Number,
			required: true,
			default: 0,
		},
		price: {
			type: Number,
			required: true,
			default: 0,
		},
		inStock: {
			type: Boolean,
			required: true,
			default: true,
		},
		sizes: {
			type: [String],
			required: true,
		},
		colours: {
			type: [String],
			required: true,
		},
		images: {
			type: [String],
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Shop = model("Shop", shopSchema);

export default Shop;
