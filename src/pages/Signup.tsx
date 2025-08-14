import { Link, useNavigate } from "react-router";
import authImage from "../assets/auth.png";
import { GoogleLogo } from "../assets/Icons";
import { useForm } from "react-hook-form";
import { authSchema, type AuthSchemaType } from "../lib/authSchema";
import { auth } from "../lib/firebase";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup() {
	const navigate = useNavigate();

	const {
		register,
		reset,
		handleSubmit,
		setError,
		formState: { errors, isSubmitting },
	} = useForm<AuthSchemaType>({
		resolver: zodResolver(authSchema),
	});

	const onSubmit = async (data: AuthSchemaType) => {
		const { email, password } = data;

		try {
			const userCredential = await createUserWithEmailAndPassword(auth, email, password);

			if (!userCredential || !userCredential.user) {
				setError("root", { type: "firebase", message: "Something went wrong. Please try again." });
				return;
			}
			reset();
			navigate("/login");
		} catch (err) {
			if (typeof err === "object" && err !== null && "code" in err) {
				const errorCode = (err as { code: string }).code;
				if (errorCode === "auth/email-already-in-use") {
					setError("email", {
						type: "firebase",
						message: "This email is already in use. Please sign in or use a different email.",
					});
				} else if (errorCode === "auth/invalid-email") {
					setError("email", { type: "firebase", message: "Invalid email address format." });
				}
			} else {
				setError("root", { type: "firebase", message: "Something went wrong. Please try again." });
				console.error(err);
			}
		}
	};
	return (
		<main className="max-w-[73.125rem] mx-auto flex lg:justify-end pt-[60px] pb-[140px] items-center">
			<div className="flex flex-col lg:flex-row gap-x-[129px] w-full lg:w-max lg:items-center">
				<div className="w-full lg:w-[805px]">
					<img src={authImage} className="w-full h-full object-cover" />
				</div>
				<div className="w-full lg:w-[371px] px-6 lg:px-0 pt-16 lg:py-0">
					<h1 className="font-semibold text-[36px] mb-6">Create an acoount</h1>
					<p>Enter your details below</p>

					<form className="flex flex-col mt-12" onSubmit={handleSubmit(onSubmit)}>
						{errors.root && (
							<p className=" self-center mb-8 w-full text-center bg-red-100 text-red-700 text-sm px-4 py-2 rounded-md border border-red-300 mt-4">
								{errors.root.message}
							</p>
						)}
						<div className="mb-10">
							<input
								type="text"
								id="name"
								{...register("name")}
								placeholder="Name"
								className="border-b border-black/25 w-full py-2 focus:outline-0"
							/>
							{errors.name && (
								<p className="text-[13px] mt-[2px] text-red-500">{errors.name.message}</p>
							)}
						</div>
						<div className="mb-10">
							<input
								type="email"
								id="email"
								{...register("email")}
								placeholder="Email"
								className="border-b border-black/25 w-full py-2 focus:outline-0"
							/>
							{errors.email && (
								<p className="text-[13px] mt-[2px] text-red-500">{errors.email.message}</p>
							)}
						</div>
						<div className="mb-10">
							<input
								type="password"
								id="password"
								{...register("password")}
								placeholder="Password"
								className="border-b border-black/25 w-full py-2 focus:outline-0"
							/>
							{errors.password && (
								<p className="text-[13px] mt-[2px] text-red-500">{errors.password.message}</p>
							)}
						</div>
						<button
							className="bg-primary w-full text-center h-14 rounded-[4px] text-white disabled:opacity-50"
							disabled={isSubmitting}
						>
							{isSubmitting ? (
								<span className="flex gap-2 items-center justify-center">
									<div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
									Creating account...
								</span>
							) : (
								"Create account"
							)}
						</button>
					</form>
					<button
						type="button"
						className="h-14 rounded-[4px] border border-gray-400 w-full flex items-center justify-center mt-4 mb-8"
					>
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
				</div>
			</div>
		</main>
	);
}
