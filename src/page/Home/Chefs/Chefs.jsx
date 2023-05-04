import React, { useEffect, useState } from "react";
import ChefCard from "../ChefCard/ChefCard";

const Chefs = () => {
	const [chefs, setChefs] = useState("");

	useEffect(() => {
		const loadData = async () => {
			const res = await fetch("http://localhost:5000/chefs");
			const data = await res.json();
			setChefs(data.chefs);
		};
		loadData();
	}, []);

	console.log(chefs);

	return (
		<div className="custom-container">
			<h3 className="text-3xl font-extrabold text-center">
				Meet Our Chefs
			</h3>
            <p className="text-center mb-8 mt-2">Countinously Productive plus and play strategic theme areas and accurate.</p>
			<div className="grid grid-cols-1 ms:grid-cols-2 lg:grid-cols-3 gap-8">
				{chefs &&
					chefs.map((chef) => (
						<ChefCard key={chef._id} chef={chef} />
					))}
			</div>
		</div>
	);
};

export default Chefs;
