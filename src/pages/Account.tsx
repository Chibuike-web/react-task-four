import { Fragment, useLayoutEffect } from "react";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router";
import { cn } from "../lib/utils";
import { data, profile } from "./data";

export default function Account() {
	const [searchParams, setSearchParams] = useSearchParams();
	const { pathname } = useLocation();
	const navigate = useNavigate();

	useLayoutEffect(() => {
		if (pathname === "/account") {
			navigate("/account?tab=profile");
		}
	}, [pathname]);

	const tab = searchParams.get("tab");

	const mainContent = () => {
		switch (tab) {
			case "profile":
				return <Profile />;
			case "address-book":
				return <AddressBook />;
			case "my-payment-options":
				return <MyPaymentOptions />;
			case "my-returns":
				return <MyReturns />;
			case "my-cancellations":
				return <MyCancellations />;
			default:
				return <Profile />;
		}
	};
	return (
		<main className="max-w-[73.125rem] mx-auto pt-20 pb-[140px] px-6 xl:px-0">
			<div className="flex items-center justify-between w-full">
				<div className="flex gap-6 text-black/40">
					<span>Home</span>
					<span>/</span>
					<span className="text-black">My Account</span>
				</div>
				<div>
					Welcome! <span className="text-primary">Md Rimel</span>
				</div>
			</div>

			<div className="flex items-start gap-8 justify-between w-full mt-8">
				<div className="w-[200px] flex flex-col gap-6 ">
					{data.map((item) => (
						<Fragment key={item.category}>
							{Array.isArray(item.subcategory) ? (
								<div className="w-full flex flex-col gap-4 items-end">
									<span className="font-medium w-full">{item.category}</span>
									<div className="flex flex-col w-[165px] gap-1 items-start">
										{item.subcategory.map((i) => {
											const isMatch = i.tabKey === tab;
											return (
												<button
													key={i.id}
													onClick={() => setSearchParams({ tab: i.tabKey })}
													className={cn("", isMatch ? "text-primary w-max" : "text-black/50")}
												>
													{i.text}
												</button>
											);
										})}
									</div>
								</div>
							) : (
								<Link to={`/${item.link}`}>{item.category}</Link>
							)}
						</Fragment>
					))}
				</div>
				{mainContent()}
			</div>
		</main>
	);
}

const Profile = () => {
	return (
		<div className="w-full max-w-[870px] px-20 py-10 shadow">
			<h2 className="text-primary text-[20px] font-medium">Edit Your Profile</h2>

			<div className="flex flex-col gap-6 items-end mt-4">
				<div className="w-full grid grid-cols-2 gap-4">
					{profile.map(
						(item, index) =>
							!Array.isArray(item.content) && (
								<div key={index}>
									<label>{item.label}</label>
									<input
										type={item.type}
										disabled={item.disabled}
										value={item.content}
										className="w-full bg-[#F5F5F5] text-black/40 border border-transparent rounded-md px-3 py-2 outline-none focus:border-black/40"
									/>
								</div>
							)
					)}
				</div>

				{profile.map(
					(item, i) =>
						Array.isArray(item.content) && (
							<div key={i} className="flex flex-col gap-2 w-full">
								<label>{item.label}</label>{" "}
								<div className="flex flex-col gap-4 w-full">
									{item.content.map((i, index) => (
										<input
											key={index}
											type={item.type}
											placeholder={i}
											className="w-full bg-[#F5F5F5] text-black/40 border border-transparent rounded-md px-3 py-2 outline-none focus:border-black/40"
										/>
									))}
								</div>
							</div>
						)
				)}

				<div className="flex gap-8">
					<button>Cancel</button>
					<button className="bg-primary text-white w-max px-4 py-2 md:px-12 md:py-4 rounded-[4px] flex-shrink-0">
						Save Changes
					</button>
				</div>
			</div>
		</div>
	);
};

const AddressBook = () => {
	return <div>Address Book</div>;
};
const MyPaymentOptions = () => {
	return <div>My Payment Options</div>;
};
const MyReturns = () => {
	return <div>My Returns</div>;
};
const MyCancellations = () => {
	return <div>My Cancellation</div>;
};
