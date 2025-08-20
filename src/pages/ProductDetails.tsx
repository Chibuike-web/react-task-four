import { useParams } from "react-router";
import allProducts from "../lib/data.json";
import type { Product } from "../lib/types";
import { useState } from "react";
import { cn, getStarRating, sizes } from "../lib/utils";
import { Rating } from "../components/ProductCard";
import ProductColors from "../components/ProductColors";

export default function ProductDetails() {
	const { id } = useParams();

	const product = allProducts.find((p) => p.id === id);

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

			<div className="flex gap-16">
				<ImageCarousel product={product} />

				<div>
					<h1 className="text-[24px] font-semibold">{product.name}</h1>
					<div>
						<Rating full={full} half={half} empty={empty} />{" "}
						<span>
							{product.reviews && product.reviews > 0
								? `(${product.reviews}) reviews`
								: "No reviews"}
						</span>
						| <span className="text-green-500">In Stock</span>
					</div>
					<div>${product.price.toFixed(2)}</div>
					<span>
						PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy
						bubble free install & mess free removal Pressure sensitive.
					</span>

					<span />

					<div>
						Colors : <ProductColors colors={product.colors} />
					</div>
					<div className="flex items-center gap-4">
						Size: <Sizes />
					</div>
				</div>
			</div>
		</main>
	);
}

const ImageCarousel = ({ product }: { product: Product }) => {
	const [imageIndex, setImageIndex] = useState(0);
	return (
		<div className="flex gap-[30px] h-[600px]">
			<div className="flex flex-col gap-4 overflow-auto min-w-[200px] ">
				{product.images.map((image, index) => (
					<button
						key={index}
						onClick={() => setImageIndex(index)}
						className={cn(
							"w-full min-h-[138px] flex items-center justify-center bg-[#F5F5F5]",
							imageIndex !== index && "opacity-25"
						)}
					>
						<img src={image} alt="" className=" w-[121px] " />
					</button>
				))}
			</div>

			<div className="w-[500px]  bg-[#F5F5F5] flex justify-center items-center">
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
