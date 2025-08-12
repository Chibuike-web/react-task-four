import { useSelector } from "react-redux";
import type { RootState } from "../lib/store/store";
import { Check } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";
import bkash from "../assets/checkout/bkash.png";
import visa from "../assets/checkout/visa.png";
import mastercard from "../assets/checkout/mastercard.png";
import image from "../assets/checkout/image.png";

export default function Checkout() {
	const cartItem = useSelector((state: RootState) => state.cartItem.items);
	const selectCartSubtotal = (state: RootState) => {
		return state.cartItem.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
	};
	const subtotal = useSelector(selectCartSubtotal);
	return (
		<main className="max-w-[73.125rem] mx-auto pt-8 pb-[140px] px-6 xl:px-0">
			<div className="flex gap-6 flex-wrap text-black/40">
				<span>Account</span>
				<span>/</span>
				<span>My Account</span>
				<span>/</span>
				<span>Product</span>
				<span>/</span>
				<span>View Cart</span>
				<span>/</span>
				<span className="text-black">Checkout</span>
			</div>
			<h1 className="text-[36px] font-medium mt-20 mb-12">Billing Details</h1>

			<div className="flex flex-col lg:flex-row items-start justify-between gap-20">
				<div className="w-full lg:w-[470px] flex flex-col gap-4">
					<div>
						<label htmlFor="firstName" className="block text-black/40 text-sm font-medium mb-1">
							First Name<span className="text-red-500">*</span>
						</label>
						<input
							type="text"
							name="firstName"
							id="firstName"
							className="w-full bg-[#F5F5F5] text-black/40 border border-transparent rounded-md px-3 py-2 outline-none focus:border-black/40"
						/>
					</div>

					<div>
						<label htmlFor="companyName" className="block text-black/40 text-sm font-medium mb-1">
							Company Name
						</label>
						<input
							type="text"
							name="companyName"
							id="companyName"
							className="w-full bg-[#F5F5F5] text-black/40 border border-transparent rounded-md px-3 py-2 outline-none focus:border-black/40"
						/>
					</div>

					<div>
						<label htmlFor="streetAddress" className="block text-black/40 text-sm font-medium mb-1">
							Street Address<span className="text-red-500">*</span>
						</label>
						<input
							type="text"
							name="streetAddress"
							className="w-full bg-[#F5F5F5] text-black/40 border border-transparent rounded-md px-3 py-2 outline-none focus:border-black/40"
						/>
					</div>

					<div>
						<label htmlFor="apartment" className="block text-black/40 text-sm font-medium mb-1">
							Apartment, floor etc. (optional)
						</label>
						<input
							type="text"
							name="apartment"
							className="w-full bg-[#F5F5F5] text-black/40 border border-transparent rounded-md px-3 py-2 outline-none focus:border-black/40"
						/>
					</div>

					<div>
						<label htmlFor="town" className="block text-black/40 text-sm font-medium mb-1">
							Town/City<span className="text-red-500">*</span>
						</label>
						<input
							type="text"
							className="w-full bg-[#F5F5F5] text-black/40 border border-transparent rounded-md px-3 py-2 outline-none focus:border-black/40"
						/>
					</div>

					<div>
						<label htmlFor="phoneNumber" className="block text-black/40 text-sm font-medium mb-1">
							Phone Number<span className="text-red-500">*</span>
						</label>
						<input
							type="text"
							className="w-full bg-[#F5F5F5] text-black/40 border border-transparent rounded-md px-3 py-2 outline-none focus:border-black/40"
						/>
					</div>

					<div>
						<label htmlFor="email" className="block text-black/40 text-sm font-medium mb-1">
							Email Address <span className="text-red-500">*</span>
						</label>
						<input
							type="text"
							className="w-full bg-[#F5F5F5] text-black/40 border border-transparent rounded-md px-3 py-2 outline-none focus:border-black/40"
						/>
					</div>
					<Save />
				</div>
				<div className="w-full lg:w-[527px] flex flex-col items-start">
					<div className="w-full flex flex-col gap-6">
						{cartItem.map((item) => (
							<div key={item.id} className="flex justify-between items-center w-full">
								<div className="flex items-center gap-6">
									<img src={item.image} className="max-w-[54px] object-cover" />
									<span>{item.name}</span>
								</div>
								<span>${item.price}</span>
							</div>
						))}
					</div>
					<div className="w-full">
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
					</div>
					<form className="mt-8">
						<label className="flex items-center gap-4 mb-8">
							<div className="flex items-center gap-4">
								<input type="radio" name="payment" id="bank" className="accent-black size-6" />
								<span>Bank</span>
							</div>
							<div className="flex items-center gap-4">
								<img src={bkash} alt="bKash logo" className="max-w-[42px] object-cover w-full" />
								<img src={visa} alt="visa logo" className="max-w-[42px] object-cover w-full" />
								<img
									src={mastercard}
									alt="mastercard logo"
									className="max-w-[42px] object-cover w-full"
								/>
								<img src={image} alt="logo" className="max-w-[42px] object-cover w-full" />
							</div>
						</label>
						<label className="flex items-center gap-4 mb-8">
							<input
								type="radio"
								name="payment"
								id="cashOnDelivery"
								className="accent-black size-6"
							/>
							<span>Cash on delivery</span>
						</label>
					</form>
					<div className="flex flex-col md:flex-row md:items-center gap-4 w-full lg:w-max mb-8">
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
					<button className="bg-primary text-white px-4 py-2 md:px-12 md:py-4 rounded-[4px] flex-shrink-0">
						Place Order
					</button>
				</div>
			</div>
		</main>
	);
}

const Save = () => {
	const [active, setActive] = useState(false);
	return (
		<label className=" flex gap-3 items-center">
			<input
				type="checkbox"
				name="save"
				id="save"
				className="sr-only"
				onChange={(e) => setActive(e.target.checked)}
			/>
			<div
				className={cn(
					"flex size-6 rounded-[4px] relative flex-shrink-0",
					active ? "bg-primary" : "bg-[#f5f5f5]"
				)}
			>
				<span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-shrink-0">
					{active && <Check className="size-[20px] text-white flex-shrink-0" />}
				</span>
			</div>
			<span>Save this information for faster check-out next time</span>
		</label>
	);
};
