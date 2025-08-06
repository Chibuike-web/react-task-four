import { Copyright, SendHorizonal } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { cn } from "../lib/utils";
import qrCode from "../assets/footer/qr-code.png";
import apple from "../assets/footer/apple.png";
import googlePlay from "../assets/footer/google-play.png";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "../assets/Icons";

export default function Footer() {
	return (
		<footer className="bg-black px-4 xl:px-0 py-12">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-[repeat(5,max-content)] text-white gap-x-16 xl:gap-x-[87px] gap-y-[4rem] max-w-[73.125rem] mx-auto">
				<div className="w-full max-w-[217px]">
					<span className="block font-bold text-[clamp(1.2rem,2.5vw,1.5rem)] mb-6">Exclusive</span>
					<p className="text-[20px] font-medium mb-6">Subscribe</p>
					<span className="block mb-4">Get 10% off your first order</span>
					<div className="border w-full border-white flex items-center justify-between px-2 py-2 h-12">
						<input
							type="email"
							name="email"
							placeholder="Enter your email"
							className="w-40 focus:outline-none border-0"
						/>
						<SendHorizonal className="flex-shrink-0" />
					</div>
				</div>
				{footerLinks.map((i) => (
					<div key={i.id} className="flex flex-col gap-2">
						<p>{i.heading}</p>
						<div className="flex flex-col gap-2">
							{i.items.map((item, index) => (
								<p key={item.id} className={cn(index === 0 && "max-w-[175px]")}>
									{item.label}
								</p>
							))}
						</div>
					</div>
				))}
				<div className="w-full">
					<p className="text-[20px] mb-6">Download App</p>
					<p className="text-[0.75rem] mb-2">Save $3 with App New User Only</p>
					<div className="flex items-center gap-2">
						<img src={qrCode} alt="Qr Code" className="max-w-20 w-full" />
						<div className="flex flex-col gap-2">
							<img
								src={googlePlay}
								alt="Google Play Store Badge"
								className="w-full max-w-[104px]"
							/>
							<img src={apple} alt="Apple Store Badge" className="w-full max-w-[104px]" />
						</div>
					</div>
					<div className="flex items-center gap-6 mt-4">
						<FacebookIcon />
						<TwitterIcon />
						<InstagramIcon />
						<LinkedinIcon />
					</div>
				</div>
			</div>

			<div className="text-white/25 border-t border-white/25 pt-4  flex items-center justify-center text-center mt-15">
				<div className="flex items-center gap-2 ">
					<Copyright />{" "}
					<p className="text-[clamp(0.5rem,1.5vw+1.5vh,1.125rem)] text-left">
						Copyright Rimel 2022. All rights reserved
					</p>
				</div>
			</div>
		</footer>
	);
}

const footerLinks = [
	{
		id: "footer-support",
		heading: "Support",
		items: [
			{
				id: uuidv4(),
				label: "111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.",
			},
			{
				id: uuidv4(),
				label: "exclusive@gmail.com",
			},
			{
				id: uuidv4(),
				label: "+88015-88888-9999",
			},
		],
	},
	{
		id: "footer-account",
		heading: "Account",
		items: [
			{
				id: "my-account",
				label: "My Account",
			},
			{
				id: "signup",
				label: "Login/Register",
			},
			{
				id: "cart",
				label: "Cart",
			},
			{
				id: "wishlist",
				label: "Wishlist",
			},
			{
				id: "shop",
				label: "Shop",
			},
		],
	},
	{
		id: "footer-quicklink",
		heading: "Quick Link",
		items: [
			{
				id: "privacy-policy",
				label: "Privacy Policy",
			},
			{
				id: "terms-of-use",
				label: "Terms Of Use",
			},
			{
				id: "faq",
				label: "FAQ",
			},
			{
				id: "contact",
				label: "Contact",
			},
		],
	},
];
