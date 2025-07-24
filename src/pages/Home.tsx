import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import { AppleLogo } from "../assets/Icons";
import heroImage from "../assets/home/hero.png";
import allProducts from "../lib/data.json";
import ProductCard from "../components/ProductCard";

export default function Home() {
	return (
		<main className=" px-4 xl:px-0 ">
			<section className="flex items-stretch gap-10 max-w-[73.125rem] mx-auto">
				<ul className="flex flex-col gap-4 pr-6 border-r-[0.5px] border-black/30 min-w-[233px] pt-8">
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
						<li key={index} className="flex">
							{item} {(index === 0 || index === 1) && <ChevronRight />}
						</li>
					))}
				</ul>
				<div className="bg-black flex items-center gap-5 w-full pl-16 py-12 text-white my-6">
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
			<section className="mt-[140px] max-w-[73.125rem] mx-auto flex flex-col">
				<div className="flex flex-col">
					<div className="flex items-center gap-6">
						<span className="block bg-primary w-[20px] h-10 rounded-[4px]" />
						<span className="text-primary font-semibold ">Today's</span>
					</div>
					<div className="flex w-full items-end justify-between mt-6 gap-6  mb-10">
						<div className="flex items-end mt-6 gap-6">
							<h2 className="font-semibold text-[36px] leading-[30px]">Flash Sales</h2>
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
					{allProducts.map((item) => (
						<ProductCard key={item.id} {...item} />
					))}
				</div>
				<button
					type="button"
					className="flex self-center bg-primary px-12 py-4 rounded-[4px] text-white font-medium my-[60px]"
				>
					View All Products
				</button>
			</section>
		</main>
	);
}
