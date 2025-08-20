import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { CartItemType } from "../lib/types";
import { decreaseItemQuantity, increaseItemQuantity } from "../store/cartItemSlice";
import { useMediaQuery } from "../lib/Hooks";
import React from "react";
import { Link } from "react-router";

export default function Cart() {
	const cartItem = useSelector((state: RootState) => state.cartItem.items);
	const selectCartSubtotal = (state: RootState) => {
		return state.cartItem.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
	};
	const subtotal = useSelector(selectCartSubtotal);
	const matches = useMediaQuery("(min-width:768px)");
	return (
		<main className="max-w-[73.125rem] mx-auto pt-20 pb-[140px] px-6 xl:px-0">
			<div className="flex gap-6">
				<span>Home</span>
				<span>/</span>
				<span>Cart</span>
			</div>

			<div className="mt-20 ">
				<div className="hidden lg:grid grid-cols-[1fr_1fr_1fr_max-content] justify-between items-center rounded-[8px] w-full h-[72px] px-10 shadow">
					<p className="w-full">Product</p>
					<p className="w-full">Price</p>
					<p className="w-full">Quantity</p>
					<p className="w-max">Subtotal</p>
				</div>
			</div>
			<div className="flex flex-col gap-10 mt-10">
				{cartItem.map((item) => (
					<React.Fragment key={item.id}>
						{matches ? <DesktopCartItemList {...item} /> : <MobileCartItemList {...item} />}
					</React.Fragment>
				))}
			</div>
			<div className="flex flex-col sm:flex-row gap-y-4 sm:justify-between sm:items-center w-full mt-6">
				<button className="border border-black/50 px-4 py-2 md:px-12 md:py-4 rounded-[4px]">
					Return To Shop
				</button>
				<button className="border border-black/50 px-4 py-2 md:px-12 md:py-4 rounded-[4px]">
					Update Cart
				</button>
			</div>
			<div className="mt-20 flex flex-col gap-6 items-start lg:flex-row lg:justify-between w-full">
				<div className="flex flex-col md:flex-row md:items-center gap-4 w-full lg:w-max">
					<input
						type="text"
						name="couponCode"
						id="couponCode"
						placeholder="Coupon Code"
						className="border border-black/50 px-4 md:w-[300px] rounded-[4px] py-2 md:py-4"
					/>
					<button className="bg-primary text-white px-4 py-2 md:px-12 md:py-4 rounded-[4px] flex-shrink-0">
						Apply Coupon
					</button>
				</div>
				<div className="lg:w-[470px] border border-black py-8 px-6 w-full">
					<p className="text-[20px] font-medium">Cart Total</p>

					<div className="flex items-center w-full justify-between pt-6 pb-4 border-b border-black/40">
						<span>Subtotal:</span>
						<span>${subtotal}</span>
					</div>
					<div className="flex items-center w-full justify-between pt-4 pb-4 border-b border-black/40">
						<span>Shipping:</span>
						<span>FREE</span>
					</div>
					<div className="flex items-center w-full justify-between pt-4">
						<span>Total:</span>
						<span>${subtotal}</span>
					</div>
					<Link
						to="/checkout"
						className="bg-primary text-white px-4 py-2 md:px-12 md:py-4 rounded-[4px] flex justify-self-center mt-4"
					>
						Proceed to checkout
					</Link>
				</div>
			</div>
		</main>
	);
}

const MobileCartItemList = (item: CartItemType) => {
	const dispatch = useDispatch();
	return (
		<div className="flex flex-col rounded-[8px] w-full p-10 shadow">
			<div className="flex flex-col sm:flex-row sm:items-center gap-6">
				<img src={`${item.image}`} alt="" className="max-w-[150px] object-cover w-full" />
				<p className="text-[1.5rem]">{item.name}</p>
			</div>

			<span className="text-[1.2rem] mt-6">${item.price}</span>

			<div className="flex items-center justify-between mt-4">
				<div className="flex border border-black/50 rounded-[8px] w-[72px] h-[44px] items-center justify-center gap-4">
					<span>{item.quantity}</span>
					<div className="flex flex-col">
						<button onClick={() => dispatch(increaseItemQuantity(item.id))}>
							<ChevronUp className="size-4" />
						</button>
						<button onClick={() => dispatch(decreaseItemQuantity(item.id))}>
							<ChevronDown className="size-4" />
						</button>
					</div>
				</div>
				<span className="text-[1.2em]">${item.price * item.quantity}</span>
			</div>
		</div>
	);
};

const DesktopCartItemList = (item: CartItemType) => {
	const dispatch = useDispatch();

	return (
		<div className="grid grid-cols-[1fr_1fr_1fr_68px] justify-between items-center rounded-[8px] w-full h-[102px] px-10 shadow">
			<div className="flex items-center gap-6">
				<img src={`${item.image}`} alt="" className="max-w-[54px] object-cover w-full" />
				<p>{item.name}</p>
			</div>
			<div>
				<span>${item.price}</span>
			</div>

			<div className="flex border border-black/50 rounded-[8px] w-[72px] h-[44px] items-center justify-center gap-4">
				<span>{item.quantity}</span>
				<div className="flex flex-col">
					<button onClick={() => dispatch(increaseItemQuantity(item.id))}>
						<ChevronUp className="size-4" />
					</button>
					<button onClick={() => dispatch(decreaseItemQuantity(item.id))}>
						<ChevronDown className="size-4" />
					</button>
				</div>
			</div>

			<div>
				<span>${item.price * item.quantity}</span>
			</div>
		</div>
	);
};
