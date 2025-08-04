import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../lib/store/store";
import { addToWishlist, removeFromWishlist } from "../lib/store/wishlistSlice";
import { cn } from "../lib/utils";
import { Trash2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router";
import { useState } from "react";
import type { Product } from "../lib/types";

export default function Wishlist() {
	const wishlist = useSelector((state: RootState) => state.wishlist.items);
	return (
		<section className="max-w-[73.125rem] mx-auto pt-[60px] pb-[140px] px-6 xl:px-0">
			<div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-7.5">
				{wishlist.map((item) => (
					<ProductCard key={item.id} {...item} />
				))}
			</div>
		</section>
	);
}

function ProductCard({ id, image, discount, name, price, rating, reviews, tags }: Product) {
	const discountRate = discount && discount / 100;
	const discountPrice = discountRate && Math.round(price * (1 - discountRate));
	const [hoverId, setHoverId] = useState("");
	const wishlist = useSelector((state: RootState) => state.wishlist.items);

	const dispatch = useDispatch();

	const isWishlisted = wishlist.some((item) => item.id === id);

	const toggleWishlist = () => {
		if (isWishlisted) {
			dispatch(removeFromWishlist(id));
		} else {
			dispatch(addToWishlist({ id, image, name, price, rating, reviews, tags }));
		}
	};

	return (
		<article className="relative w-full">
			{tags?.includes("Flash Sales") && (
				<span className="absolute z-[100] left-[12px] top-[12px] bg-primary w-[55px] h-[26px] rounded-[4px] flex items-center justify-center text-white text-[12px] font-normal">
					-{discount}%
				</span>
			)}
			<div className="absolute top-[12px] right-[12px] flex flex-col z-[100] gap-2">
				<button
					onClick={toggleWishlist}
					className="flex items-center justify-center bg-white rounded-full size-[34px]"
				>
					<Trash2 />
				</button>
			</div>
			<Link to={`/${id}`} onMouseEnter={() => setHoverId(id)} onMouseLeave={() => setHoverId("")}>
				<figure className="bg-gray-100 w-full h-[250px] flex items-center justify-center rounded-[8px] relative overflow-hidden">
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
				</div>
			</Link>
		</article>
	);
}
