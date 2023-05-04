import React from "react";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { Link } from "react-router-dom";

const Page404 = () => {
	return (
		<section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
			<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
				<HiOutlineEmojiSad className="w-40 h-40 text-blue-500" />
				<div className="max-w-2xl text-center">
					<h2 className="mb-8 font-extrabold text-9xl text-blue-500">
						<span className="sr-only">Error</span>
						404
					</h2>
					<p className="text-xl font-extrabold md:text-5xl text-blue-500 mb-8">
						Page not found
					</p>
                    <p className="text-xl font-medium text-blue-400 mb-8">
						We are sorry, the page you requested could not found. Please go back to homepage and try again.
					</p>
					<Link
						to="/"
						className="btn bg-blue-500 border-none hover:bg-blue-600"
					>
						Back to homepage
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Page404;
