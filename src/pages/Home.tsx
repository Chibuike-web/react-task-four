import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import jbl from "../assets/home/jbl.png";
import heroImage from "../assets/home/hero.png";
import allProducts from "../lib/data.json";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import { categories, cn } from "../lib/utils";
import { AppleLogo } from "../assets/Icons";

export default function Home() {
	return (
		<main className=" px-4 xl:px-0 ">
			<section className="flex flex-col md:flex-row items-stretch gap-10 max-w-[73.125rem] mx-auto">
				<ul className="flex gap-x-6 md:flex-col gap-y-4 pr-6 lg:border-r-[0.5px] border-black/30 min-w-[233px] pt-8 overflow-auto">
					{[
						"Woman's fashion",
						"Men's Fashion",
						"Electronic",
						"Home & Lifestyle",
						"Medicine",
						"Sports & Outdoor",
						"Baby's & Toys",
						"Groceries & Pets",
					].map((item, index) => (
						<li key={index} className="flex min-w-[100px]">
							{item} {(index === 0 || index === 1) && <ChevronRight />}
						</li>
					))}
				</ul>
				<div className="bg-black flex flex-col lg:flex-row items-center gap-5 w-full px-8 lg:pl-16 lg:pr-0 py-6 lg:py-12 text-white my-6">
					<div className="w-full">
						<div className="flex gap-2 items-center mb-[20px]">
							<AppleLogo />
							<p>iphone 14 Series</p>
						</div>
						<h1 className="text-[clamp(2rem,3vw,2.8rem)] xl:text-[2.8rem] max-w-[294px] font-semibold leading-[1.4] mb-[20px]">
							Up to 10% off Voucher
						</h1>
						<div className="flex items-center gap-2">
							<span className="underline underline-offset-2">Shop Now</span>
							<span>
								<ArrowRight />
							</span>
						</div>
					</div>
					<figure className="w-full max-w-[496px]">
						<img src={heroImage} alt="" className="w-full " width={496} height={352} />
					</figure>
				</div>
			</section>
			<section className=" max-w-[73.125rem] mx-auto flex flex-col mt-[70px]">
				<div className="flex flex-col">
					<div className="flex items-center gap-6">
						<span className="block bg-primary w-[20px] h-10 rounded-[4px]" />
						<span className="text-primary font-semibold ">Today's</span>
					</div>
					<div className="flex flex-col w-full md:flex-row items-end justify-between mt-6 gap-6  mb-10">
						<div className="flex flex-col items-start w-full md:flex-row md:items-end mt-6 gap-6">
							<h2 className="font-semibold text-[clamp(2rem,3vw,2.25rem)] leading-[1.875rem]">
								Flash Sales
							</h2>
							<div className="flex items-end gap-4">
								<div className="flex flex-col gap-1">
									<span className="text-[12px] font-medium">Days</span>
									<span className="text-[2rem] font-bold leading-[30px]">03</span>
								</div>
								<div className="flex flex-col gap-2 mb-2">
									<span className="block size-[4px] bg-primary/50 rounded-full " />
									<span className="block size-[4px] bg-primary/50 rounded-full " />
								</div>
								<div className="flex flex-col gap-1">
									<span className="text-[12px] font-medium">Hours</span>
									<span className="text-[2rem] font-bold leading-[30px]">23</span>
								</div>
								<div className="flex flex-col gap-2 mb-2">
									<span className="block size-[4px] bg-primary/50 rounded-full " />
									<span className="block size-[4px] bg-primary/50 rounded-full " />
								</div>
								<div className="flex flex-col gap-1">
									<span className="text-[12px] font-medium">Minutes</span>
									<span className="text-[2rem] font-bold leading-[30px]">19</span>
								</div>
								<div className="flex flex-col gap-2 mb-2">
									<span className="block size-[4px] bg-primary/50 rounded-full " />
									<span className="block size-[4px] bg-primary/50 rounded-full " />
								</div>
								<div className="flex flex-col gap-1">
									<span className="text-[12px] font-medium">Seconds</span>
									<span className="text-[2rem] font-bold leading-[30px]">56</span>
								</div>
							</div>
						</div>
						<div className="flex items-center gap-4">
							<span className="flex size-[46px] rounded-full bg-gray-100 items-center justify-center">
								<ArrowLeft />
							</span>
							<span className="flex size-[46px] rounded-full bg-gray-100 items-center justify-center">
								<ArrowRight />
							</span>
						</div>
					</div>
				</div>

				<div className="flex gap-7.5 overflow-auto">
					{allProducts
						.filter((item) => item.tags.includes("Flash Sales"))
						.map((item) => (
							<ProductCard key={item.id} {...item} />
						))}
				</div>
				<button
					type="button"
					className="flex self-center bg-primary px-12 py-4 rounded-[4px] text-white font-medium mt-[60px]"
				>
					View All Products
				</button>
			</section>
			<span className="w-full max-w-[73.125rem] mx-auto bg-black/30 h-[0.5px] block mt-[70px]" />
			<CategoriesSection />
			<span className="w-full max-w-[73.125rem] mx-auto bg-black/30 h-[0.5px] block mt-[70px]" />
			<section className="mt-[70px] max-w-[73.125rem] mx-auto flex flex-col">
				<div className="flex flex-col">
					<div className="flex items-center gap-6">
						<span className="block bg-primary w-[20px] h-10 rounded-[4px]" />
						<span className="text-primary font-semibold ">This Month</span>
					</div>
					<div className="flex flex-col items-start w-full md:flex-row md:items-end md:justify-between mt-6 gap-6 mb-10">
						<div className="flex items-end mt-6 gap-6">
							<h2 className="font-semibold text-[clamp(2rem,3vw,2.25rem)] leading-[1.875rem]">
								Best Selling Products
							</h2>
						</div>
						<button
							type="button"
							className="flex bg-primary px-12 py-4 rounded-[4px] text-white font-medium"
						>
							View All
						</button>
					</div>
				</div>

				<div className="flex gap-7.5 overflow-auto">
					{allProducts
						.filter((item) => item.tags.includes("Best Selling Products"))
						.map((item) => (
							<ProductCard key={item.id} {...item} />
						))}
				</div>
			</section>
			<section className="max-w-[73.125rem] mx-auto px-12 py-10 bg-black mt-[140px] flex flex-col lg:flex-row items-center">
				<aside className="text-white w-full">
					<span className="text-secondary font-semibold">Categories</span>
					<h1 className="text-[clamp(2.5rem,3vw,3rem)] font-semibold max-w-[443px] leading-[60px] my-8">
						Enhance Your Music Experience
					</h1>

					<div className="flex gap-4 leading-4">
						<div className="size-[62px] rounded-full bg-white text-black flex flex-col items-center justify-center">
							<span className="font-semibold">23</span>
							<span className="text-[12px]">Hours</span>
						</div>
						<div className="size-[62px] rounded-full bg-white text-black flex flex-col items-center justify-center">
							<span className="font-semibold">05</span>
							<span className="text-[12px]">Days</span>
						</div>
						<div className="size-[62px] rounded-full bg-white text-black flex flex-col items-center justify-center">
							<span className="font-semibold">59</span>
							<span className="text-[12px]">Minutes</span>
						</div>
						<div className="size-[62px] rounded-full bg-white text-black flex flex-col items-center justify-center">
							<span className="font-semibold">35</span>
							<span className="text-[12px]">Seconds</span>
						</div>
					</div>
					<button className="bg-secondary px-12 py-4 rounded-[4px] mt-10">Buy Now!</button>
				</aside>
				<aside className="w-full max-w-[600px] lg:min-w-[600px] h-[420px] flex items-center">
					<img src={jbl} alt="Image of JBL" className="w-full" />
				</aside>
			</section>
		</main>
	);
}

const CategoriesSection = () => {
	const [categoryId, setCategoryId] = useState("phones");
	return (
		<section className="mt-[70px] max-w-[73.125rem] mx-auto flex flex-col">
			<div className="flex flex-col">
				<div className="flex items-center gap-6">
					<span className="block bg-primary w-[20px] h-10 rounded-[4px]" />
					<span className="text-primary font-semibold ">Categories</span>
				</div>
				<div className="flex w-full items-end justify-between mt-6 gap-6  mb-10">
					<div className="flex items-end mt-6 gap-6">
						<h2 className="font-semibold text-[clamp(2rem,3vw,2.25rem)] leading-[1.875rem]">
							Browse By Category
						</h2>
					</div>
					<div className="flex items-center gap-4">
						<span className="flex size-[46px] rounded-full bg-gray-100 items-center justify-center">
							<ArrowLeft />
						</span>
						<span className="flex size-[46px] rounded-full bg-gray-100 items-center justify-center">
							<ArrowRight />
						</span>
					</div>
				</div>
			</div>
			<div className="flex gap-7.5 overflow-auto">
				{categories.map(({ id, label, icon: Icon }) => (
					<button
						key={id}
						onClick={() => setCategoryId(categoryId === id ? "" : id)}
						className={cn(
							"flex flex-col items-center justify-center min-w-[170px] h-[145px] rounded-[4px] ",
							categoryId === id ? "bg-primary text-white" : "border border-black/30"
						)}
					>
						<div className="flex flex-col gap-4 items-center">
							<Icon />
							<span>{label}</span>
						</div>
					</button>
				))}
			</div>
		</section>
	);
};

const OurProductsSection = () => {
	return <section></section>;
};
