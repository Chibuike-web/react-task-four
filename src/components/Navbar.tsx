import { NavLink, useLocation, useMatch } from "react-router";
import { Heart, ShoppingCart, Search, ChevronDown, Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { cn } from "../lib/utils";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [signIn, setSignedIn] = useState("");
	const { pathname } = useLocation();
	const handleToggle = useCallback(() => {
		setIsOpen((prev) => !prev);
	}, []);

	useEffect(() => {
		const storedUser = localStorage.getItem("user");
		if (!storedUser) return;
		const user = JSON.parse(storedUser);
		setSignedIn(user.email);
	}, []);

	const isExist = ["/signup", "/login"].includes(pathname);
	const navLinks = [
		{
			id: "home",
			label: "Home",
		},
		{
			id: "contact",
			label: "Contact",
		},
		{
			id: "about",
			label: "About",
		},
		{
			id: "signup",
			label: "Sign Up",
		},
	].filter((link) => !(link.id === "signup" && signIn));

	return (
		<header>
			{!isOpen && (
				<div className="bg-black w-full flex items-center text-white px-4 xl:px-0">
					<div className="flex gap-4 justify-between xl:gap-[14.4375rem] py-2 max-w-[73.125rem] w-full mx-auto items-center xl:justify-end relative">
						<p className="text-[clamp(0.5rem,2.5vw,0.875rem)] w-full min-w-[160.82px] lg:w-max">
							<span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>{" "}
							<span>Shop Now</span>
						</p>
						<Select />
					</div>
				</div>
			)}

			<nav className="px-4 xl:px-0 shadow-[0_0.125rem_0_rgba(0,0,0,0.1)] h-[5.875rem] flex items-center ">
				<div className="max-w-[73.125rem] w-full justify-between mx-auto flex items-center">
					<span className="font-bold text-[clamp(1.2rem,2.5vw,1.5rem)]">Exclusive</span>

					<ul className="hidden lg:flex items-center gap-12">
						{navLinks.map((item) => {
							const to = item.id === "home" ? "/" : `/${item.id}`;
							return (
								<li key={item.id}>
									<NavLink
										to={to}
										className={({ isActive }) =>
											isActive ? "underline underline-offset-4 font-semibold" : "font-normal"
										}
									>
										{item.label}
									</NavLink>
								</li>
							);
						})}
					</ul>

					<div className={cn("flex items-center", !isExist ? "gap-8" : "gap-0")}>
						<Searchbar />
						{!isExist && (
							<div className="flex items-center gap-4">
								<Heart className="size-[clamp(1.5rem,2vw,2rem)]" />
								<ShoppingCart className="size-[clamp(1.5rem,2vw,2rem)]" />
							</div>
						)}
						<button onClick={handleToggle}>
							{isOpen ? <X /> : <Menu className="size-[clamp(1.5rem,2vw,2rem)] lg:hidden" />}
						</button>
					</div>
				</div>
			</nav>
			<MobileNav isOpen={isOpen} handleToggle={handleToggle} navLinks={navLinks} />
		</header>
	);
}

const Searchbar = () => {
	return (
		<div className="relative hidden lg:block w-full">
			<input
				type="text"
				name="search"
				placeholder="What are you looking for?"
				className="bg-gray-200 h-[38px] rounded-[7px] placeholder:text-[12px] pl-4 focus:border-2 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none"
			/>
			<span className="absolute right-2 top-1/2 -translate-y-1/2">
				<Search />
			</span>
		</div>
	);
};

const Select = () => {
	return (
		<label htmlFor="lang" className="relative">
			<select
				name="lang"
				id=""
				className="appearance-none min-w-[100px] p-2 text-[clamp(0.7rem,2vw,1rem)]"
			>
				<option value="en" className="text-black">
					English
				</option>
				<option value="en" className="text-black">
					English
				</option>
				<option value="en" className="text-black">
					English
				</option>
			</select>

			<span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
				<ChevronDown size={20} />
			</span>
		</label>
	);
};

type MobileNavType = {
	isOpen: boolean;
	handleToggle: () => void;
	navLinks: { id: string; label: string }[];
};

const MobileNav = ({ isOpen, handleToggle, navLinks }: MobileNavType) => {
	if (!isOpen) return null;

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	return (
		<nav className="bg-white fixed top-[94px] inset-0">
			<ul className="flex flex-col items-start gap-12 px-4 mt-12">
				{navLinks.map((item) => {
					const to = item.id === "home" ? "/" : `/${item.id}`;
					const match = useMatch(to);
					return (
						<li
							key={item.id}
							className={`py-4 text-[20px] w-full transition px-4 rounded-[8px] ${
								match ? "bg-gray-200 font-semibold" : "bg-white font-normal"
							}`}
						>
							<NavLink to={to} onClick={handleToggle}>
								{item.label}
							</NavLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
