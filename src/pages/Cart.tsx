import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../lib/store/store";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { CartItemType } from "../lib/types";
import { decreaseItemQuantity, increaseItemQuantity } from "../lib/store/cartItemSlice";

export default function Cart() {
	const cartItem = useSelector((state: RootState) => state.cartItem.items);
	const selectCartSubtotal = (state: RootState) => {
		return state.cartItem.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
	};
	const subtotal = useSelector(selectCartSubtotal);
	return (
		<main className="max-w-[73.125rem] mx-auto pt-[60px] pb-[140px] px-6 xl:px-0">
			<div className="mt-20 flex gap-6">
				<span>Home</span>
				<span>/</span>
				<span>Cart</span>
			</div>

			<div className="mt-20 ">
				<div className="grid grid-cols-[1fr_1fr_1fr_max-content] justify-between items-center rounded-[8px] w-full h-[72px] px-10 shadow">
					<p className="w-full">Product</p>
					<p className="w-full">Price</p>
					<p className="w-full">Quantity</p>
					<p className="w-max">Subtotal</p>
				</div>
			</div>
			<div className="flex flex-col gap-10 mt-10">
				{cartItem.map((item) => (
					<CartItemList key={item.id} {...item} />
				))}
			</div>
			<div className="flex justify-between items-center w-full mt-6">
				<button className="border border-black/50 px-4 py-2 md:px-12 md:py-4 rounded-[4px]">
					Return To Shop
				</button>
				<button className="border border-black/50 px-4 py-2 md:px-12 md:py-4 rounded-[4px]">
					Update Cart
				</button>
			</div>
			<div className="mt-20 flex items-start justify-between w-full">
				<div className="flex items-center gap-4">
					<input
						type="text"
						name="couponCode"
						id="couponCode"
						placeholder="Coupon Code"
						className="border border-black/50 px-4 w-full max-w-[300px] rounded-[4px] py-2 md:py-4"
					/>
					<button className="bg-primary text-white px-4 py-2 md:px-12 md:py-4 rounded-[4px]">
						Apply Coupon
					</button>
				</div>
				<div className="w-[470px] border border-black py-8 px-6">
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
					<button className="bg-primary text-white px-4 py-2 md:px-12 md:py-4 rounded-[4px] flex justify-self-center mt-4">
						Proceed to checkout
					</button>
				</div>
			</div>
		</main>
	);
}

const CartItemList = (item: CartItemType) => {
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

			<div>
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
			</div>

			<div>
				<span>${item.price * item.quantity}</span>
			</div>
		</div>
	);
};
