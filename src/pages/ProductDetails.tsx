import { useParams } from "react-router";
import allProducts from "../lib/data.json";
import type { Product } from "../lib/types";
import { useState } from "react";
import { cn, getStarRating, sizes } from "../lib/utils";
import ProductCard, { Rating } from "../components/ProductCard";
import ProductColors from "../components/ProductColors";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { Heart, Minus, Plus } from "lucide-react";
import { increaseItemQuantity, decreaseItemQuantity } from "../store/cartItemSlice";
import { useDetailsContext } from "../context/DetailsContext";
import { DeliveryIcon, ReturnIcon } from "../assets/Icons";

export default function ProductDetails() {
	const { id } = useParams();
	const cartItem = useSelector((state: RootState) => state.cartItem.items);
	const dispatch = useDispatch();
	const mainItem = cartItem.find((c) => c.id === id);
	const product = allProducts.find((p) => p.id === id);
	const { details, increaseQuantity, decreaseQuantity } = useDetailsContext();
	const contextQuantity = details.find((d) => d.id === id)?.quantity ?? 1;
	const quantityToShow = mainItem?.quantity ?? contextQuantity;
	if (!product) return <div>Product not found</div>;
	const { full, half, empty } = getStarRating(product.rating);
	return (
		<main className="max-w-[73.125rem] mx-auto pt-20 px-6 xl:px-0 pb-[140px]">
			<div className="flex items-center justify-between w-full mb-20">
				<div className="flex gap-6 text-black/40">
					<span>Home</span>
					<span>/</span>
					<span>Gaming</span>
					<span>/</span>
					<span className="text-black">{product.name}</span>
				</div>
			</div>

			<div className="flex flex-col gap-16 xl:flex-row">
				<ImageCarousel product={product} />

				<div className=" leading-[1] flex flex-col">
					<h1 className="text-[24px] font-semibold mb-4">{product.name}</h1>
					<div className="flex items-center gap-2 mb-4">
						<Rating full={full} half={half} empty={empty} />{" "}
						<span>
							{product.reviews && product.reviews > 0
								? `(${product.reviews}) reviews`
								: "No reviews"}
						</span>
						| <span className="text-green-500">In Stock</span>
					</div>
					<div className="text-[24px] mb-6">${product.price.toFixed(2)}</div>
					<span className="text-[14px] leading-[1.4]">
						PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy
						bubble free install & mess free removal Pressure sensitive.
					</span>

					<span className="block h-[1px] w-full bg-black/50 my-6" />

					<div className="flex items-center gap-4 mb-6">
						<span className="text-[20px]">Colors:</span> <ProductColors colors={product.colors} />
					</div>
					<div className="flex items-center gap-4">
						<span className="text-[20px]">Sizes:</span> <Sizes />
					</div>

					<div className="mt-6 flex flex-col md:flex-row xl:items-center gap-4 w-full">
						<div className=" h-[44px] flex items-center w-full md:w-max">
							<button
								onClick={() => {
									if (mainItem) {
										dispatch(decreaseItemQuantity(product.id));
									} else {
										decreaseQuantity(product.id);
									}
								}}
								className="border rounded-l-[4px] border-black/60 flex items-center justify-center w-30 xl:w-10 h-full"
							>
								<Minus />
							</button>
							<span className="border-y h-full border-black/60 flex items-center justify-center w-full xl:w-[80px]">
								{quantityToShow}
							</span>

							<button
								onClick={() => {
									if (mainItem) {
										dispatch(increaseItemQuantity(product.id));
									} else {
										increaseQuantity(product.id);
									}
								}}
								className=" flex items-center rounded-r-[4px] justify-center w-30 xl:w-10 h-full bg-primary text-white"
							>
								<Plus />
							</button>
						</div>
						<div className="flex items-center gap-4 w-full">
							<button className="bg-primary px-12 py-[10px] w-full md:w-max rounded-[4px] flex justify-center text-white leading-[1.5] text-center">
								Buy Now
							</button>
							<button className="border border-black/50 rounded-[6px] size-10 flex flex-shrink-0 items-center justify-center">
								<Heart />
							</button>
						</div>
					</div>
					<div className="mt-10 border border-black/50 rounded-[6px] leading-[1.4]">
						<div className="flex gap-4 my-4 px-6">
							<span className="flex flex-shrink-0">
								<DeliveryIcon />
							</span>
							<div className="flex flex-col gap-1">
								<span>Free Delivery</span>
								<span className="text-[12px]">
									Enter your postal code for Delivery Availability
								</span>
							</div>
						</div>
						<span className="block w-full h-[1px] bg-black/50" />
						<div className="flex gap-4 m-6">
							<span className="flex flex-shrink-0">
								<ReturnIcon />
							</span>
							<div className="flex flex-col gap-1">
								<span>Return Delivery</span>
								<span className="text-[12px]">Free 30 Days Delivery Returns. Details</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<section className="mt-40">
				<div className="flex items-center gap-4 mb-[64px]">
					<span className="block bg-primary w-[20px] h-10 rounded-[4px]" />
					<span className="text-primary font-semibold ">Related</span>
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

const ImageCarousel = ({ product }: { product: Product }) => {
	const [imageIndex, setImageIndex] = useState(0);
	return (
		<div className="flex flex-col-reverse xl:flex-row gap-[30px] xl:h-[600px]">
			<div className="flex  xl:flex-col gap-4 overflow-auto min-w-[180px] ">
				{product.images.map((image, index) => (
					<button
						key={index}
						onClick={() => setImageIndex(index)}
						className={cn(
							"w-full xl:min-h-[138px] flex items-center justify-center bg-[#F5F5F5]",
							imageIndex !== index && "opacity-25"
						)}
					>
						<img src={image} alt="" className=" w-[121px] " />
					</button>
				))}
			</div>

			<div className="w-full xl:w-[500px] bg-[#F5F5F5] flex justify-center items-center h-[500px] xl:h-auto">
				<img src={product.images[imageIndex]} className="object-cover w-full max-w-[446px]" />
			</div>
		</div>
	);
};

export const Sizes = () => {
	const [active, setActive] = useState(0);
	return (
		<div className="flex items-center gap-2">
			{sizes.map((s, index) => (
				<button
					key={index}
					onClick={() => setActive(index)}
					className={cn(
						"size-8 flex items-center justify-center rounded-[4px]",
						index === active ? "bg-primary text-white" : "border border-black/50"
					)}
				>
					{s}
				</button>
			))}
		</div>
	);
};
