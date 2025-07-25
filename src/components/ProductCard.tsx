import { Eye, Heart, Star, StarHalf } from "lucide-react";
import { Link } from "react-router";
import { cn, getStarRating } from "../lib/utils";
import type { Product } from "../lib/types";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function ProductCard({
	id,
	image,
	discount,
	name,
	price,
	rating,
	reviews,
	tags,
}: Product) {
	const { full, half, empty } = getStarRating(rating);
	const discountRate = discount && discount / 100;
	const discountPrice = discountRate && Math.round(price * (1 - discountRate));
	const [hoverId, setHoverId] = useState("");

	return (
		<article className="relative min-w-[270px]">
			{tags?.includes("Flash Sales") && (
				<span className="absolute left-[12px] top-[12px] bg-primary w-[55px] h-[26px] rounded-[4px] flex items-center justify-center text-white text-[12px] font-normal">
					-{discount}%
				</span>
			)}
			<div className="absolute top-[12px] right-[12px] flex flex-col gap-2">
				<span className="flex items-center justify-center bg-white rounded-full size-[34px]">
					<Heart />
				</span>
				<span className="flex items-center justify-center bg-white rounded-full size-[34px]">
					<Eye />
				</span>
			</div>
			<Link to={`/${id}`} onMouseEnter={() => setHoverId(id)} onMouseLeave={() => setHoverId("")}>
				<figure className="bg-gray-200 w-full h-[250px] flex items-center justify-center rounded-[8px] relative overflow-hidden">
					<img src={image} alt={`image of ${name}`} className="w-full max-w-[190px]" />
					<AnimatePresence>
						{hoverId === id && (
							<motion.button
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.2 }}
								exit={{ opacity: 0, y: 20 }}
								className="left-0 bottom-0 absolute right-0 flex items-center justify-center bg-black text-white h-10"
							>
								Add to Cart
							</motion.button>
						)}
					</AnimatePresence>
				</figure>
				<div>
					<p className="font-medium mt-4 mb-2">{name}</p>
					<p className="flex gap-3 items-center mb-2">
						{discountPrice ? (
							<span className="text-primary font-medium">${discountPrice}</span>
						) : (
							""
						)}

						<span
							className={cn(
								"text-gray-500 font-medium",
								discountPrice ? "line-through" : "text-primary"
							)}
						>
							${price}
						</span>
					</p>
					<div className="flex items-center gap-2">
						<Rating full={full} empty={empty} half={half} />
						<span className="text-[14px] font-semibold">({reviews})</span>
					</div>
				</div>
			</Link>
		</article>
	);
}

const Rating = ({ full, empty, half }: { full: number; empty: number; half: number }) => {
	return (
		<div className="flex">
			{Array.from({ length: full }, (_, i) => (
				<Star key={`full-${i}`} className="fill-current stroke-none text-yellow-500 size-[20px]" />
			))}
			{half === 1 && (
				<div className="relative">
					<StarHalf className="fill-current stroke-none text-yellow-500 size-[20px]" />
					<Star className="absolute fill-current stroke-none text-gray-300 top-0 z-[-10] size-[20px]" />
				</div>
			)}
			{Array.from({ length: empty }, (_, i) => (
				<Star key={`empty-${i}`} className="fill-current stroke-none text-gray-300 size-[20px]" />
			))}
		</div>
	);
};
