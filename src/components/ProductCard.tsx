import { Eye, Heart } from "lucide-react";
import { Link } from "react-router";
import { getStarRating } from "../lib/utils";
import type { Product } from "../lib/types";
import { StarFilled, StarHalfFilled } from "../assets/Icons";

export default function ProductCard({
	id,
	image,
	discount,
	name,
	price,
	rating,
	reviews,
}: Product) {
	const { full, half, empty } = getStarRating(rating);
	const discountRate = discount / 100;
	const discountPrice = Math.round(price * (1 - discountRate));

	return (
		<article className="relative min-w-[270px]">
			<span className="absolute left-[12px] top-[12px] bg-primary w-[55px] h-[26px] rounded-[4px] flex items-center justify-center text-white text-[12px] font-normal">
				-{discount}%
			</span>
			<div className="absolute top-[12px] right-[12px] flex flex-col gap-2">
				<span className="flex items-center justify-center bg-white rounded-full size-[34px]">
					<Heart />
				</span>
				<span className="flex items-center justify-center bg-white rounded-full size-[34px]">
					<Eye />
				</span>
			</div>
			<Link to={`/${id}`}>
				<figure className="bg-gray-200 w-full h-[250px] flex items-center justify-center rounded-[4px]">
					<img src={image} alt={`image of ${name}`} className="w-full max-w-[190px]" />
				</figure>
				<div>
					<p className="font-medium mt-4 mb-2">{name}</p>
					<p className="flex gap-3 items-center mb-2">
						<span className="text-primary font-medium">${discountPrice}</span>
						<span className="text-gray-500 line-through font-medium">${price}</span>
					</p>
					<div className="flex items-center gap-2">
						<div className="flex">
							{Array.from({ length: full }, (_) => (
								<StarFilled className="text-yellow-500 size-[20px]" />
							))}
							{Array.from({ length: half }, (_) => (
								<div className="relative">
									<StarHalfFilled className="text-yellow-500 size-[20px]" />
									<StarFilled className="absolute text-gray-300 top-0 z-[-10] size-[20px]" />
								</div>
							))}
							{Array.from({ length: empty }, (_) => (
								<StarFilled className="text-gray-300 size-[20px]" />
							))}
						</div>
						<span className="text-[14px] font-semibold">({reviews})</span>
					</div>
				</div>
			</Link>
		</article>
	);
}
