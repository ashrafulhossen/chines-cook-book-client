import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ChefRecipe from "../ChefRecipe/ChefRecipe";
import LazyLoad from "react-lazy-load";


const ChefData = () => {
	const { _id, name, image, years_of_experience, recipes_num, bio, recipes } =
		useLoaderData();

		
	return (
		<div className="custom-container pt-36">
			<div className="hero">
				<div className="hero-content flex-col lg:flex-row-reverse">
				<LazyLoad
					width={400}
					threshold={0.95}
					onContentVisible={() => {
						console.log("loaded!");
					}}
				>
					<img
					className="max-w-56 max-h-56 object-cover rounded-lg shadow-2xl"
						src={image}
					/>
					</LazyLoad>
					<div>
						<h1 className="text-5xl font-bold">{name}</h1>
						<p className="py-6">{bio}</p>
						<div className="">
							<p className="font-bold my-2">
								Experience: {years_of_experience} years
							</p>
							<p className="font-bold my-2">
								Recipes: {recipes_num}
							</p>
							<p className="font-bold my-2">
								Likes: {Math.round(Math.random() * 100)}
							</p>
						</div>
					</div>
				</div>
			</div>
            <div className="">
                {recipes.length && recipes.map(recipe => <ChefRecipe key={Math.round(Math.random() *100)} recipe={recipe}/>)}
            </div>
		</div>
	);
};

export default ChefData;
