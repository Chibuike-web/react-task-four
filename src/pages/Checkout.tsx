import { useSelector } from "react-redux";
import type { RootState } from "../lib/store/store";

export default function Checkout() {
	const cartItem = useSelector((state: RootState) => state.cartItem.items);
	const selectCartSubtotal = (state: RootState) => {
		return state.cartItem.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
	};
	const subtotal = useSelector(selectCartSubtotal);
	return (
		<main className="max-w-[73.125rem] mx-auto pt-8 pb-[140px] px-6 xl:px-0">
			<div className="flex gap-6">
				<span>Account</span>
				<span>/</span>
				<span>My Account</span>
				<span>/</span>
				<span>Product</span>
				<span>/</span>
				<span>View Cart</span>
				<span>/</span>
				<span>Checkout</span>
			</div>
			<h1 className="text-[36px] font-medium mt-20 mb-12">Billing Details</h1>

			<div className="flex gap-[175px]">
				<div className="w-full max-w-[470px] flex flex-col gap-4">
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
				</div>
				<div className="w-full">
					<div className="w-full flex flex-col gap-6">
						{cartItem.map((item) => (
							<div key={item.id} className="flex justify-between items-center w-full">
								<div className="flex items-center gap-6">
									<img src={item.image} className="size-[54px]" />
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
				</div>
			</div>
		</main>
	);
}
