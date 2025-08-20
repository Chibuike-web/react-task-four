import { Link, NavLink, useLocation, useMatch } from "react-router";
import { Heart, ShoppingCart, Search, ChevronDown, Menu, X } from "lucide-react";
import { useCallback, useContext, useEffect, useState, type ComponentType } from "react";
import { cn } from "../lib/utils";
import { CancelIcon, LogoutIcon, OrderIcon, ProfileIcon, StarIcon } from "../assets/Icons";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { Context } from "../context/userContext";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const [profile, setProfile] = useState(false);

	const { pathname } = useLocation();
	const handleToggle = useCallback(() => {
		setIsOpen((prev) => !prev);
		setProfile(false);
	}, []);
	const { user } = useContext(Context);

	useEffect(() => {
		const profileDropdown = (e: MouseEvent) => {
			if (!(e.target instanceof HTMLElement)) return;
			if (!e.target.classList.contains("profile-btn")) {
				setProfile(false);
			}
		};
		document.body.addEventListener("click", profileDropdown);
		return () => {
			document.body.removeEventListener("click", profileDropdown);
		};
	}, [profile]);

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
	].filter((link) => !(link.id === "signup" && user));

	const wishlist = useSelector((state: RootState) => state.wishlist.items);
	const cartItem = useSelector((state: RootState) => state.cartItem.items);

	return (
		<header className="relative z-[1000]">
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

					<div
						className={cn(
							"flex items-center w-max lg:w-full lg:max-w-[350px]",
							!isExist ? "gap-8 justify-between" : "gap-0 justify-between"
						)}
					>
						<Searchbar />
						{!isExist && (
							<div className="flex items-center gap-4 relative">
								<Link to="/wishlist" className="relative">
									{wishlist.length > 0 && (
										<span className="absolute bg-primary text-white text-[10px] rounded-full size-3 right-0 top-0 flex items-center justify-center">
											{wishlist.length}
										</span>
									)}

									<Heart className="size-[clamp(1.2rem,2vw,1.5rem)]" />
								</Link>
								<Link to="/cart" className="relative">
									{cartItem.length > 0 && (
										<span className="absolute bg-primary text-white text-[10px] rounded-full size-3 right-0 top-0 flex items-center justify-center">
											{cartItem.length}
										</span>
									)}
									<ShoppingCart className="size-[clamp(1.2rem,2vw,1.5rem)]" />
								</Link>
								{user && (
									<button
										onClick={() => setProfile((prev) => !prev)}
										className={cn(
											"profile-btn size-[2rem] rounded-full flex items-center justify-center",
											profile && "text-white bg-primary"
										)}
									>
										<ProfileIcon className="size-[1.5rem]" strokeWidth="2" />
									</button>
								)}

								{profile && (
									<ul className="absolute right-0 top-[38px] w-[225px] rounded-[8px] text-white flex flex-col gap-6 p-4 text-[14px] bg-black/40 backdrop-blur-sm">
										{profileItem.map(({ id, link, label, icon: Icon }) => (
											<Link
												key={id}
												to={`${link}`}
												className="flex items-center gap-2 cursor-pointer"
											>
												<span>
													<Icon className="size-[1.5rem]" />
												</span>
												<span> {label}</span>
											</Link>
										))}
										<li className="flex items-center gap-2 cursor-pointer">
											<span>
												<LogoutIcon />
											</span>
											<span>Logout</span>
										</li>
									</ul>
								)}
							</div>
						)}

						<button onClick={handleToggle} className=" lg:hidden">
							{isOpen ? <X /> : <Menu className="size-[clamp(1.5rem,2vw,2rem)]" />}
						</button>
					</div>
				</div>
			</nav>
			{isOpen && <MobileNav isOpen={isOpen} handleToggle={handleToggle} navLinks={navLinks} />}{" "}
		</header>
	);
}

export type ProfileItem = {
	id: string;
	label: string;
	link: string;
	icon: ComponentType<any>;
};

const profileItem: ProfileItem[] = [
	{
		id: uuidv4(),
		label: "Manage My Account",
		link: "/account",
		icon: ProfileIcon,
	},
	{
		id: uuidv4(),
		label: "My Order",
		link: "/account?tab=my-returns",
		icon: OrderIcon,
	},
	{
		id: uuidv4(),
		label: "My Cancellations",
		link: "/account?tab=my-cancellations",
		icon: CancelIcon,
	},
	{
		id: uuidv4(),
		label: "My Reviews",
		link: "/reviews",
		icon: StarIcon,
	},
];

const Searchbar = () => {
	return (
		<div className="relative hidden lg:block w-full">
			<input
				type="text"
				name="search"
				placeholder="What are you looking for?"
				className="bg-gray-200 h-[38px] w-full rounded-[7px] placeholder:text-[12px] pl-4 focus:border-2 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none"
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
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
			console.log(isOpen);
		} else {
			document.body.style.overflow = "";
			console.log(isOpen);
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	return (
		<nav className="bg-white fixed top-[94px] z-[1000] inset-0">
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
