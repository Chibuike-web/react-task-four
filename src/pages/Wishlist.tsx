import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../lib/store/store";
import { addToWishlist, removeFromWishlist } from "../lib/store/wishlistSlice";
import { cn } from "../lib/utils";
import { Trash2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router";
import { useState } from "react";
import type { Product } from "../lib/types";
import allProducts from "../lib/data.json";
import ProductCard from "../components/ProductCard";
import { addToCart } from "../lib/store/cartItemSlice";

export default function Wishlist() {
	const wishlist = useSelector((state: RootState) => state.wishlist.items);
	return (
		<main className="max-w-[73.125rem] mx-auto pt-[60px] pb-[140px] px-6 xl:px-0">
			<section className="mb-20">
				<div className="flex items-center justify-between w-full mb-[4rem]">
					<p>Wishlist ({wishlist.length})</p>

					<button className="border border-black/50 px-4 py-2 md:px-12 md:py-4 rounded-[4px]">
						Move All To Bag
					</button>
				</div>
				<div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-7.5">
					{wishlist.map((item) => (
						<WishlistProductCard key={item.id} {...item} />
					))}
				</div>
			</section>

			<section>
				<div className="flex items-center justify-between w-full mb-[4rem]">
					<div className="flex items-center gap-4">
						<span className="block bg-primary w-[20px] h-10 rounded-[4px]" />
						<span className="text-primary font-semibold ">Just For You</span>
					</div>
					<button className="border border-black/50 px-4 py-2 md:px-12 md:py-4 rounded-[4px]">
						See All
					</button>
				</div>
				<div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-7.5">
					{allProducts
						.filter((item) => item.tags?.includes("Just For You"))
						.map((i) => (
							<ProductCard key={i.id} {...i} />
						))}
				</div>
			</section>
		</main>
	);
}

function WishlistProductCard({ id, image, discount, name, price, rating, reviews, tags }: Product) {
	const discountRate = discount && discount / 100;
	const discountPrice = discountRate && Math.round(price * (1 - discountRate));
	const [hoverId, setHoverId] = useState("");
	const wishlist = useSelector((state: RootState) => state.wishlist.items);
	const [status, setStatus] = useState<"idle" | "added">("idle");
	const dispatch = useDispatch();
	const cartItem = useSelector((state: RootState) => state.cartItem.items);
	const isAlreadyInCart = cartItem.some((item) => item.id === id);
	const isWishlisted = wishlist.some((item) => item.id === id);

	const toggleWishlist = () => {
		if (isWishlisted) {
			dispatch(removeFromWishlist(id));
		} else {
			dispatch(addToWishlist({ id, image, name, price, rating, reviews, tags }));
		}
	};

	const handleAddToCart = () => {
		dispatch(
			addToCart({
				id,
				image,
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
					className="flex items-center justify-center bg-white rounded-full size-[34px]"
				>
					<Trash2 />
				</button>
			</div>
			<Link to={`/${id}`} onMouseEnter={() => setHoverId(id)} onMouseLeave={() => setHoverId("")}>
				<div className="bg-gray-100 w-full h-[250px] flex items-center justify-center rounded-[8px] relative overflow-hidden">
					<img src={image} alt={`image of ${name}`} className="w-full max-w-[190px]" />
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
				</div>
			</Link>
		</article>
	);
}
