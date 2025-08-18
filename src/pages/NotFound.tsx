import { Link } from "react-router";

export default function NotFound() {
	return (
		<main className="max-w-[73.125rem] mx-auto pt-20 px-6 xl:px-0 pb-[140px]">
			<div className="flex items-center justify-between w-full mb-20">
				<div className="flex gap-6 text-black/40">
					<span>Home</span>
					<span>/</span>
					<span className="text-black">404 Error</span>
				</div>
			</div>

			<div className="flex flex-col items-center">
				<h1 className="text-[clamp(2.5rem,4vw+4rem,7rem)] font-medium mb-4 text-center leading-[1.2]">
					404 Not Found
				</h1>{" "}
				<p className="mb-10">Your visited page not found. You may go home page.</p>
				<Link
					to="/"
					className="bg-primary text-white w-max px-4 py-2 md:px-12 md:py-4 rounded-[4px] flex-shrink-0"
				>
					Return to home page
				</Link>
			</div>
		</main>
	);
}
