import { Eye, Heart, Star, StarHalf } from "lucide-react";
import { Link } from "react-router";
import { cn, getStarRating } from "../lib/utils";
import type { Product } from "../lib/types";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { addToWishlist, removeFromWishlist } from "../store/wishlistSlice";
import { addToCart } from "../store/cartItemSlice";
import ProductColors from "./ProductColors";

export default function ProductCard({
	id,
	images,
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
	const [status, setStatus] = useState<"idle" | "added">("idle");
	const dispatch = useDispatch();
	const cartItem = useSelector((state: RootState) => state.cartItem.items);
	const wishlist = useSelector((state: RootState) => state.wishlist.items);
	const isWishlisted = wishlist.some((item) => item.id === id);
	const isAlreadyInCart = cartItem.some((item) => item.id === id);

	const handleAddToCart = () => {
		dispatch(
			addToCart({
				id,
				image: images[0],
				price,
				name,
				quantity: 1,
			})
		);
		setStatus("added");

		setTimeout(() => {
			setStatus("idle");
		}, 2000);
	};

	const toggleWishlist = () => {
		if (isWishlisted) {
			dispatch(removeFromWishlist(id));
		} else {
			dispatch(addToWishlist({ id, images, name, price, rating, reviews, tags }));
		}
	};

	let cartButtonLabel = null;

	if (isAlreadyInCart) {
		if (status === "added") {
			cartButtonLabel = "Added to Cart";
		} else {
			cartButtonLabel = "Already in cart";
		}
	} else {
		cartButtonLabel = "Add to cart";
	}

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
					className={cn(
						"flex items-center justify-center bg-white rounded-full size-[34px]",
						isWishlisted && "text-primary"
					)}
				>
					<Heart />
				</button>
				<span className="flex items-center justify-center bg-white rounded-full size-[34px]">
					<Eye />
				</span>
			</div>
			<Link to={`products/${id}`}>
				<div
					className="bg-gray-100 w-full h-[250px] flex items-center justify-center rounded-[8px] relative overflow-hidden "
					onMouseEnter={() => setHoverId(id)}
					onMouseLeave={() => setHoverId("")}
				>
					<img src={images[0]} alt={`image of ${name}`} className="w-full max-w-[190px]" />
					<AnimatePresence>
						{hoverId === id && (
							<motion.button
								disabled={isAlreadyInCart}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: isAlreadyInCart ? 0.5 : 1, y: 0 }}
								transition={{ duration: 0.2 }}
								exit={{ opacity: 0, y: 20 }}
								onClick={(e) => {
									e.preventDefault();
									e.stopPropagation();
									handleAddToCart();
								}}
								className="left-0 bottom-0 absolute right-0 flex items-center justify-center bg-black text-white h-10 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{cartButtonLabel}
							</motion.button>
						)}
					</AnimatePresence>
				</div>
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
						<span className="text-[14px] text-gray-500 font-semibold">({reviews})</span>
					</div>
				</div>
			</Link>
		</article>
	);
}

export const Rating = ({ full, empty, half }: { full: number; empty: number; half: number }) => {
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

export function MainProductCard({
	id,
	images,
	name,
	price,
	rating,
	reviews,
	tags,
	colors,
}: Product) {
	const { full, half, empty } = getStarRating(rating);
	const [hoverId, setHoverId] = useState("");
	const [status, setStatus] = useState<"idle" | "added">("idle");
	const dispatch = useDispatch();
	const cartItem = useSelector((state: RootState) => state.cartItem.items);
	const wishlist = useSelector((state: RootState) => state.wishlist.items);
	const isWishlisted = wishlist.some((item) => item.id === id);
	const isAlreadyInCart = cartItem.some((item) => item.id === id);
	const handleAddToCart = () => {
		dispatch(
			addToCart({
				id,
				image: images[0],
				price,
				name,
				quantity: 1,
			})
		);
		setStatus("added");

		setTimeout(() => {
			setStatus("idle");
		}, 2000);
	};

	const toggleWishlist = () => {
		if (isWishlisted) {
			dispatch(removeFromWishlist(id));
		} else {
			dispatch(addToWishlist({ id, images, name, price, rating, reviews, tags, colors }));
		}
	};

	let cartButtonLabel = null;

	if (isAlreadyInCart) {
		if (status === "added") {
			cartButtonLabel = "Added to Cart";
		} else {
			cartButtonLabel = "Already in cart";
		}
	} else {
		cartButtonLabel = "Add to cart";
	}

	return (
		<article className="relative w-full">
			{tags?.includes("New") && (
				<span className="absolute z-[100] left-[12px] top-[12px] bg-secondary w-[55px] h-[26px] rounded-[4px] flex items-center justify-center text-white text-[12px] font-normal">
					NEW
				</span>
			)}
			<div className="absolute top-[12px] right-[12px] flex flex-col gap-2 z-[100]">
				<button
					onClick={toggleWishlist}
					className={cn(
						"flex items-center justify-center bg-white rounded-full size-[34px]",
						isWishlisted && "text-primary"
					)}
				>
					<Heart />
				</button>
				<span className="flex items-center justify-center bg-white rounded-full size-[34px]">
					<Eye />
				</span>
			</div>
			<Link
				to={`products/${id}`}
				onMouseEnter={() => setHoverId(id)}
				onMouseLeave={() => setHoverId("")}
			>
				<div className="bg-gray-100 w-full h-[250px] flex items-center justify-center rounded-[8px] relative overflow-hidden ">
					<img src={images[0]} alt={`image of ${name}`} className="w-full max-w-[190px]" />
					<AnimatePresence>
						{hoverId === id && (
							<motion.button
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: isAlreadyInCart ? 0.5 : 1, y: 0 }}
								transition={{ duration: 0.2 }}
								exit={{ opacity: 0, y: 20 }}
								disabled={isAlreadyInCart}
								onClick={(e) => {
									e.preventDefault();
									e.stopPropagation();
									handleAddToCart();
								}}
								className="left-0 bottom-0 absolute right-0 flex items-center justify-center bg-black text-white h-10 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{cartButtonLabel}
							</motion.button>
						)}
					</AnimatePresence>
				</div>
				<div className="flex flex-col gap-2">
					<p className="font-medium mt-4 mb-2">{name}</p>

					<div className="flex items-center gap-2">
						<p className="text-primary font-medium">${price}</p>
						<Rating full={full} empty={empty} half={half} />
						<span className="text-[14px] text-gray-500 font-semibold">({reviews})</span>
					</div>
				</div>
			</Link>
			<ProductColors colors={colors ?? []} />
		</article>
	);
}
