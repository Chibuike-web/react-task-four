import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import jbl from "../assets/home/jbl.png";
import playstation from "../assets/home/playstation.png";
import womenCollection from "../assets/home/women-collection.png";
import speakers from "../assets/home/speakers.png";
import perfume from "../assets/home/perfume.png";
import heroImage from "../assets/home/hero.png";
import allProducts from "../lib/data.json";
import ProductCard, { MainProductCard } from "../components/ProductCard";
import { useState } from "react";
import { categories, cn } from "../lib/utils";
import { AppleLogo, CustomerServiceIcon, DeliveryIcon, MoneybackIcon } from "../assets/Icons";

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
					<div className="flex items-center gap-4">
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
						.filter((item) => item.tags?.includes("Flash Sales"))
						.map((item) => (
							<div key={item.id} className="min-w-[270px]">
								<ProductCard {...item} />
							</div>
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
					<div className="flex items-center gap-4">
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
						.filter((item) => item.tags?.includes("Best Selling Products"))
						.map((item) => (
							<div key={item.id} className="min-w-[270px]">
								<ProductCard {...item} />
							</div>
						))}
				</div>
			</section>
			<section className="max-w-[73.125rem] mx-auto px-6 md:px-12 py-10 bg-black mt-[140px] flex flex-col gap-y-6 lg:flex-row items-center">
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
				<aside className="w-full max-w-[600px] lg:min-w-[600px]  flex items-center">
					<img src={jbl} alt="Image of JBL" className="w-full" />
				</aside>
			</section>
			<OurProductsSection />
			<NewArrivalSection />
			<FeatureSection />
		</main>
	);
}

const CategoriesSection = () => {
	const [categoryId, setCategoryId] = useState("phones");
	return (
		<section className="mt-[70px] max-w-[73.125rem] mx-auto flex flex-col">
			<div className="flex flex-col">
				<div className="flex items-center gap-4">
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
	return (
		<section className="mt-[70px] max-w-[73.125rem] mx-auto flex flex-col">
			<div className="flex flex-col">
				<div className="flex items-center gap-4">
					<span className="block bg-primary w-[20px] h-10 rounded-[4px]" />
					<span className="text-primary font-semibold ">Our Products</span>
				</div>
				<div className="flex w-full items-end justify-between mt-6 gap-6  mb-10">
					<div className="flex items-end mt-6 gap-6">
						<h2 className="font-semibold text-[clamp(2rem,3vw,2.25rem)] leading-[1.875rem]">
							Explore Our Products
						</h2>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-7.5 overflow-auto">
				{allProducts.slice(0, 8).map((item) => (
					<MainProductCard key={item.id} {...item} />
				))}
			</div>
			<button
				type="button"
				className="flex self-center bg-primary px-12 py-4 rounded-[4px] text-white font-medium mt-[60px]"
			>
				View All Products
			</button>
		</section>
	);
};

const NewArrivalSection = () => {
	return (
		<section className="mt-[70px] max-w-[73.125rem] mx-auto flex flex-col">
			<div className="flex flex-col">
				<div className="flex items-center gap-4">
					<span className="block bg-primary w-[20px] h-10 rounded-[4px]" />
					<span className="text-primary font-semibold ">Featured</span>
				</div>
				<div className="flex w-full items-end justify-between mt-6 gap-6  mb-10">
					<div className="flex items-end mt-6 gap-6">
						<h2 className="font-semibold text-[clamp(2rem,3vw,2.25rem)] leading-[1.875rem]">
							New Arrival
						</h2>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-rows-2 w-full gap-[30px] lg:h-[600px]">
				<div className="bg-black md:col-span-2 md:row-span-2  text-white p-8 flex h-[600px] lg:h-auto relative overflow-hidden">
					<img src={playstation} className="absolute left-1/2 bottom-0 -translate-x-1/2 w-full" />
					<div className="self-end max-w-[242px] z-[10]">
						<h4 className="font-semibold text-[24px]">PlayStation 5</h4>
						<p className="text-[14px] my-4">
							Black and White version of the PS5 coming out on sale.
						</p>
						<span className="underline underline-offset-2 font-medium">Shop Now</span>
					</div>
				</div>
				<div
					className="bg-black md:col-span-2 bg-no-repeat lg:bg-size-[432px] bg-[right_bottom] text-white p-8 flex h-[600px] lg:h-auto"
					style={{
						backgroundImage: `url(${womenCollection})`,
					}}
				>
					<div className="self-end max-w-[265px]">
						<h4 className="font-semibold text-[24px]">Women's Collections</h4>
						<p className="text-[14px] my-4">
							Featured woman collections that give you another vibe.
						</p>
						<span className="underline underline-offset-2 font-medium">Shop Now</span>
					</div>
				</div>
				<div className="bg-black  text-white p-8 flex h-[600px] lg:h-auto relative">
					<img
						src={speakers}
						className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[300px] lg:max-w-[210px]"
					/>
					<div className="self-end max-w-[242px] z-[10]">
						<h4 className="font-semibold text-[24px]">Speakers</h4>
						<p className="text-[14px] my-2">Amazon wireless speakers</p>
						<span className="underline underline-offset-2 font-medium">Shop Now</span>
					</div>
				</div>
				<div className="bg-black  text-white p-8 flex h-[600px] lg:h-auto relative">
					<img
						src={perfume}
						className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[300px] lg:max-w-[210px]"
					/>
					<div className="self-end max-w-[242px] z-[10]">
						<h4 className="font-semibold text-[24px]">Perfume</h4>
						<p className="text-[14px] my-2">GUCCI INTENSE OUD EDP</p>
						<span className="underline underline-offset-2 font-medium">Shop Now</span>
					</div>
				</div>
			</div>
		</section>
	);
};

const FeatureSection = () => {
	return (
		<section className="my-[70px] max-w-[73.125rem] mx-auto flex flex-col items-center md:my-[140px]">
			<div className="flex items-center justify-center flex-wrap gap-[88px]">
				{features.map(({ heading, subheading, icon: Icon }, i) => (
					<div key={i} className="flex flex-col text-center items-center">
						<span className="size-14.5 text-white bg-black flex items-center justify-center rounded-full shadow-[0px_0px_0px_12px_rgba(0,0,0,0.2)]">
							<Icon />
						</span>
						<div className="mt-8">
							<h4 className="mb-2 font-semibold text-[20px]">{heading}</h4>
							<p className="text-[14px]">{subheading}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

const features = [
	{
		heading: "FREE AND FAST DELIVERY",
		subheading: "Free delivery for all orders over $140",
		icon: DeliveryIcon,
	},
	{
		heading: "24/7 CUSTOMER SERVICE",
		subheading: "Friendly 24/7 customer support",
		icon: CustomerServiceIcon,
	},
	{
		heading: "MONEY BACK GUARANTEE",
		subheading: "We reurn money within 30 days",
		icon: MoneybackIcon,
	},
];
