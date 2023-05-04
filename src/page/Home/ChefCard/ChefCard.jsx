import React from "react";

const ChefCard = ({ chef }) => {
	const { name, image, bio, years_of_experience, recipes_num } = chef;
	console.log(chef);
	return (
		<div className="card card-compact w-96 h-full bg-base-100 shadow-xl">
			<figure>
				<img
                    className="w-full h-56  object-cover"
					src={image}
					alt="chef image"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">{name}</h2>
				<p>{bio}</p>
                <div className="flex items-center justify-between">
                    <p className="font-bold my-2">Experience: {years_of_experience} years</p>
                    <p className="font-bold my-2">Recipes: {recipes_num}</p>
                    <p className="font-bold my-2">Likes: {recipes_num}</p>
                </div>
				<div>
					<button className="btn btn-primary">View Recipes</button>
				</div>
			</div>
		</div>
	);
};

export default ChefCard;
