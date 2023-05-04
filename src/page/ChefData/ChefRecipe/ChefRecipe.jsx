import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import LazyLoad from "react-lazy-load";

const ChefRecipe = ({ recipe }) => {
	const { name, image, ingredients, cooking_method, rating } = recipe;
	console.log(cooking_method);
	const [favourite, setFavourite] = useState(false);
	console.log(favourite);

	return (
		<div className="card lg:card-side bg-blue-100 shadow-xl grid-cols-1 grid lg:grid-cols-4 mb-8">
			<figure className="p-4">
				<LazyLoad
					width={400}
					threshold={0.95}
					onContentVisible={() => {
						console.log("loaded!");
					}}
				>
					<img
						className="w-56 h-56 object-cover rounded-lg"
						src={image}
						alt="Album"
					/>
				</LazyLoad>
			</figure>
			<div className="card-body grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-between px-8 lg:col-span-3">
				<div>
					<h2 className="card-title">{name}</h2>
					<p className="my-4">Rating: {rating}</p>
					<button
						className="btn bg-blue-600 hover:bg-blue-500 border-none"
						onClick={() => {
							setFavourite(!favourite);
							toast.success("Added to favourite!");
						}}
						disabled={favourite}
					>
						Favourite
					</button>
					<div>
						<Toaster position="top-center" reverseOrder={false} />
					</div>
				</div>
				<div>
					<h4 className="text-xl text-bold font-bold mb-4">
						Ingredients
					</h4>
					<ol>
						{(ingredients.length > 6
							? ingredients.slice(0, 6)
							: ingredients
						).map((ingredient, index) => (
							<li key={Math.round(Math.random() * 100)}>
								{index}. {ingredient}
							</li>
						))}
					</ol>
				</div>

				<div>
					<h4 className="text-xl text-bold font-bold mb-4">
						Cooking Method
					</h4>
					<p>{cooking_method}</p>
				</div>
			</div>
		</div>
	);
};

export default ChefRecipe;
