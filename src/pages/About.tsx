import { useState, type ComponentType } from "react";
import heroImage from "../assets/about/hero-image.png";
import {
	Instagram,
	LinkedIn,
	MoneyBag,
	SaleIcon,
	ShopIcon,
	ShoppingIcon,
	Twitter,
} from "../assets/Icons";
import { FeatureSection } from "./Home";
import tomCruise from "../assets/about/tom-cruise.png";
import emmaWatson from "../assets/about/emma-watson.png";
import willSmith from "../assets/about/will-smith.png";
import { cn } from "../lib/utils";

export default function About() {
	return (
		<main className="max-w-[73.125rem] mx-auto pt-20 px-6 xl:px-0">
			<div className="flex items-center justify-between w-full">
				<div className="flex gap-6 text-black/40">
					<span>Home</span>
					<span>/</span>
					<span className="text-black">About</span>
				</div>
			</div>

			<div className="flex flex-col md:flex-row gap-[75px] md:items-center mb-20">
				<div className="w-full max-w-[525px] lg:min-w-[525px]">
					<h1 className="font-semibold text-[54px] mt-10">Our Story</h1>
					<p className="mb-4 leading-[1.6]">
						Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an
						active presense in Bangladesh. Supported by wide range of tailored marketing, data and
						service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
						customers across the region.
					</p>
					<p className="leading-[1.6]">
						Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive
						offers a diverse assotment in categories ranging from consumer.
					</p>
				</div>
				<div className="w-full max-w-[705px] lg:min-w-[705px]">
					<img src={heroImage} className="w-full h-full object-cover" />
				</div>
			</div>
			<Stats />
			<Team />
			<CarouselDots />
			<FeatureSection />
		</main>
	);
}

function Stats() {
	const [isActive, setIsActive] = useState(0);
	return (
		<div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-6 py-6">
			{statsData.map(({ value, icon: Icon, label }, index) => (
				<button
					key={index}
					onClick={() => setIsActive(index)}
					className={cn(
						"flex flex-col items-center gap-6 py-8 text-center rounded-[8px]",
						isActive === index ? "bg-primary border-none" : "bg-white border border-black  "
					)}
				>
					<span
						className={cn(
							"size-14.5 flex items-center justify-center rounded-full",
							isActive === index
								? "text-black bg-white shadow-[0px_0px_0px_12px_rgba(255,255,255,0.2)]"
								: "text-white bg-black shadow-[0px_0px_0px_12px_rgba(0,0,0,0.2)]"
						)}
					>
						<Icon />
					</span>
					<div className={cn(isActive === index ? "text-white" : "text-black")}>
						<h2 className="text-3xl font-bold">{value}</h2>
						<p className="text-sm">{label}</p>
					</div>
				</button>
			))}
		</div>
	);
}

type StatItem = {
	value: string;
	label: string;
	icon: ComponentType;
};

export const statsData: StatItem[] = [
	{ value: "10.5k", label: "Sellers active on our site", icon: ShopIcon },
	{ value: "33k", label: "Monthly Product Sales", icon: SaleIcon },
	{ value: "45.5k", label: "Customers active on our site", icon: ShoppingIcon },
	{ value: "25k", label: "Annual gross sales on our site", icon: MoneyBag },
];

function Team() {
	return (
		<div className="flex gap-8 mt-20 w-full bg-white rounded-2xl overflow-auto">
			{teamData.map((member, index) => (
				<div key={index} className="min-w-[370px] flex flex-col ">
					<div className="w-full h-[430px] bg-gray-200 mb-4">
						<img src={member.image} alt="" className="w-full h-full object-cover" />
					</div>
					<div>
						<h3 className="text-lg text-gray-800 text-[32px] font-medium">{member.name}</h3>
						<p className="text-sm text-gray-500">{member.role}</p>
					</div>
					<div className="flex items-center gap-4 mt-4">
						<Twitter />
						<Instagram />
						<LinkedIn />
					</div>
				</div>
			))}
		</div>
	);
}

const teamData = [
	{ name: "Tom Cruise", role: "Founder & Chairman", image: tomCruise },
	{ name: "Emma Watson", role: "Managing Director", image: emmaWatson },
	{ name: "Will Smith", role: "Product Designer", image: willSmith },
];

function CarouselDots() {
	const [active, setActive] = useState<number | null>(null);
	return (
		<div className="flex gap-3 justify-self-center mt-6">
			{Array.from({ length: 5 }, (_, i) => (
				<button
					key={i}
					onClick={() => setActive(i)}
					className={cn(
						"size-[12px] block bg-black/30 rounded-full flex-shrink-0",
						active === i
							? "border border-white bg-primary shadow-[0px_0px_0px_3px_rgba(0,0,0,0.2)]"
							: ""
					)}
				/>
			))}
		</div>
	);
}
