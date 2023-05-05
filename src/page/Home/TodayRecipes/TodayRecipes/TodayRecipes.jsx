import React, { useEffect, useState } from "react";
import TodayRecipeCard from "../TodayRecipeCard/TodayRecipeCard";

const TodayRecipes = () => {
	const [todayRecipes, setTodayRecipes] = useState([]);

	useEffect(() => {
		const loadData = async () => {
			const res = await fetch(
				"https://chinese-cookbook-server.vercel.app/today-recipes"
			);
			const data = await res.json();
			console.log(data);
			setTodayRecipes(data);
		};
		loadData();
	}, []);

	console.log(todayRecipes);
	return (
		<div className="custom-container flex items-center justify-center flex-col max-[560px]:mx-8">
			<h3 className="text-3xl font-extrabold text-center mb-8 text-uppercase">
				Today Recipes
			</h3>
			<div className="max-w-[30rem] max-[560px]:w-full">
				<div className="carousel w-full">
					{todayRecipes.length > 0 &&
						todayRecipes.map((todayRecipe, index) => (
							<TodayRecipeCard
								key={index}
								todayRecipe={todayRecipe}
							/>
						))}
				</div>
				<div className="flex justify-center w-full py-2 gap-2 mt-4">
					{todayRecipes.length > 0 &&
						todayRecipes.map((todayRecipe, index) => (
							<a
								href={`#${todayRecipe.name}`}
								key={index}
								className="bg-blue-500 rounded-xl w-3 h-3"
							></a>
						))}
				</div>
			</div>
		</div>
	);
};

export default TodayRecipes;
