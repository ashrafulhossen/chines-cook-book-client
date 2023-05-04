import React from "react";
import bannerImg from "../../../assets/banner.jpg";
import {FaArrowRight} from "react-icons/fa"
const Home = () => {
	return (
		<div>
			<div className="">
				<div className="absolute top-0 pt-56 md:pt-48 pb-24 flex items-center">
				<img
					className="w-full absolute top-0 object-cover object-center h-full"
					src={bannerImg}
					alt="banner image"
				/>
					<div className="px-4 md:px-8 custom-container z-10">
						<h2 className="text-center md:text-left text-6xl font-extrabold text-blue-600">
							Chocolate Fruit Cream
						</h2>
						<p className="text-center font-bold md:text-left xl:max-w-[40%] lg:max-w-[60%] md:max-w-[80%] mt-8">
							Chinese-style chocolate fruit cream is a light and
							refreshing dessert that combines the rich taste of
							chocolate with the sweetness of fresh fruit and
							cream. To make this delicious dessert, heavy cream,
							milk, sugar, and cocoa powder are whisked together
							in a saucepan and heated until they come to a
							simmer. The mixture is then cooked over low heat for
							5 minutes before being removed from the heat to
							cool. Vanilla extract and diced fresh fruit are
							added to the cooled mixture........
						</p>
                        <button className="mt-4 btn border-none hover:bg-blue-600 px-8 bg-blue-500">Show <FaArrowRight className="ml-2"/></button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
