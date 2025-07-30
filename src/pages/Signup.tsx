import { Link } from "react-router";
import authImage from "../assets/auth.png";
import { GoogleLogo } from "../assets/Icons";

export default function Signup() {
	return (
		<main>
			<section className="max-w-[73.125rem] mx-auto flex lg:justify-end items-center">
				<div className="flex flex-col lg:flex-row gap-x-[129px] w-full lg:w-max lg:items-center">
					<aside className="w-full lg:w-[805px]">
						<img src={authImage} className="w-full h-full object-cover" />
					</aside>
					<aside className="w-full lg:w-[371px] px-6 lg:px-0 py-6 lg:py-0">
						<h1 className="font-semibold text-[36px] mb-6">Create an acoount</h1>
						<p>Enter your details below</p>

						<form className="flex flex-col mt-12">
							<div className="mb-10">
								<input
									type="text"
									id="name"
									placeholder="Name"
									className="border-b w-full py-2 focus:outline-0"
								/>
							</div>
							<div className="mb-10">
								<input
									type="email"
									id="email"
									placeholder="Email"
									className="border-b w-full py-2 focus:outline-0"
								/>
							</div>
							<div className="mb-10">
								<input
									type="password"
									id="password"
									placeholder="Name"
									className="border-b w-full py-2 focus:outline-0"
								/>
							</div>
							<button className="bg-primary w-full text-center h-14 rounded-[4px] text-white">
								Create Account
							</button>
						</form>
						<button className="h-14 rounded-[4px] border border-gray-400 w-full flex items-center justify-center mt-4 mb-8">
							<div className="flex gap-3">
								<GoogleLogo /> <span>Sign up with Google</span>
							</div>
						</button>

						<p className="flex gap-2 items-center justify-self-center">
							Already have account?{" "}
							<Link to="/login" className="underline underline-offset-4 font-medium">
								Login
							</Link>
						</p>
					</aside>
				</div>
			</section>
		</main>
	);
}
