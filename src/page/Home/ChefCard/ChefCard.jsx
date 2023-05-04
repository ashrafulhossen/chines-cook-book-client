import React from "react";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
	const {_id, name, image, years_of_experience, recipes_num } = chef;
	console.log(chef);
	return (
		<div className="card card-compact w-96 h-full bg-base-100 shadow-xl">
			<figure>
			<LazyLoad
						width={"100%"}
						threshold={0.95}
						onContentVisible={() => {
							console.log("loaded!");
						}}
					>
				<img
                    className="w-full h-56  object-cover"
					src={image}
					alt="chef image"
				/>
				</LazyLoad>
			</figure>
			<div className="card-body">
				<h2 className="card-title">{name}</h2>
                <div className="">
                    <p className="font-bold my-2">Experience: {years_of_experience} years</p>
                    <p className="font-bold my-2">Recipes: {recipes_num}</p>
                    <p className="font-bold my-2">Likes: {Math.round(Math.random() * 100)}</p>
                </div>
				<Link to={`/chefs/${_id}`}><button className="btn btn-primary">View Recipes</button></Link>
			</div>
		</div>
	);
};

export default ChefCard;
