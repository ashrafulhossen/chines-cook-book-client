import React from "react";
import { FaArrowRight } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import bannerImg from "../../../assets/banner.jpg";
import Chefs from "../Chefs/Chefs";
import TodayRecipes from "../TodayRecipes/TodayRecipes/TodayRecipes";
const Home = () => {
	return (
		<div>
			<div className="max-[480px]:pb-[1015px] pb-[900px] xl:pb-[780px] lg:pb-[720px] sm:pb-[800px] ">
				{" "}
				<div className="absolute top-0 pt-56 md:pt-48 pb-24 flex items-center">
					<div className="absolute top-0 w-full h-full">
						<LazyLoad
							width={400}
							threshold={0.95}
							onContentVisible={() => {
								console.log("loaded!");
							}}
						>
							<img
								className="w-full absolute top-0 object-cover object-center h-full"
								src={bannerImg}
								alt="banner image"
							/>
						</LazyLoad>
					</div>
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
						<button className="mt-4 btn border-none hover:bg-blue-600 px-8 bg-blue-500">
							Show <FaArrowRight className="ml-2" />
						</button>
					</div>
				</div>
			</div>
			<div className="pt-8 pb-10">
				<Chefs />
			</div>
			<div className="mt-6 pt-8 pb-10">
				<TodayRecipes />
			</div>
			<div className="mx-auto text-center mt-8 mb-16">
				<h3 className="text-3xl font-extrabold text-center text-uppercase">
					Special Offers For New Subscribers
				</h3>
				<p className="text-center mt-2 mb-8">
					Subscribe to our newsletters now and stay up to <br /> date with
					new collections.
				</p>
				<div className="flex items-center justify-center">
				<input type="email" placeholder="Enter your email address" className=" border-blue-500 border w-full max-w-lg text-xl px-4 h-16 rounded-s-2xl" />
				<input type="button" value="Submit" className="rounded-e-2xl text-xl font-bold px-8 h-16 bg-blue-500" />
				</div>
			</div>
		</div>
	);
};

export default Home;
