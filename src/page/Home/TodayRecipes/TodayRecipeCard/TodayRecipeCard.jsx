import React from "react";

const TodayRecipeCard = ({ todayRecipe }) => {
	const { name, image } = todayRecipe;
	return (
		<div id={name} className="carousel-item w-full h-auto">
			<div className="bg-white p-4 rounded-xl w-full flex max-[560px]:flex-col gap-4">
				<img
					src={image}
					className="w-full sm:w-56 sm:h-56 self-center max-h-60 flex-grow object-cover rounded-lg"
				/>
				<h3 className="text-xl w-full text-center font-bold self-center">{name}</h3>
			</div>
		</div>
	);
};

export default TodayRecipeCard;
