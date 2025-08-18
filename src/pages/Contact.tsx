import { Mail, Phone } from "lucide-react";
import { useState, type ChangeEvent } from "react";
import { cn } from "../lib/utils";

export default function Contact() {
	const [focusId, setFocusId] = useState("");
	const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

	const focusInput = (id: string) => {
		setFocusId(id);
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { id, value } = e.target as HTMLInputElement;
		setFormData((prev) => ({ ...prev, [id]: value }));
	};

	const handleBlur = () => {
		setFocusId("");
	};
	return (
		<main className="max-w-[73.125rem] mx-auto pt-20 px-6 xl:px-0 pb-[140px]">
			<div className="flex items-center justify-between w-full mb-20">
				<div className="flex gap-6 text-black/40">
					<span>Home</span>
					<span>/</span>
					<span className="text-black">Contact</span>
				</div>
			</div>
			<div className="flex flex-col lg:flex-row gap-10">
				<div className="p-10 shadow flex flex-col gap-10 w-full lg:max-w-[340px]">
					<div>
						<div className="flex gap-6 items-center mb-6">
							<span className="flex items-center justify-center bg-primary text-white size-10 rounded-full ">
								<Phone />
							</span>
							<span>Call To Us</span>
						</div>
						<p className="mb-4">We are available 24/7, 7 days a week</p>
						<p>Phone: +8801611112222</p>
					</div>
					<span className="block bg-black/50 w-full h-[1px]" />
					<div>
						<div className="flex gap-6 items-center mb-6">
							<span className="flex items-center justify-center bg-primary text-white size-10 rounded-full ">
								<Mail />
							</span>
							<span>Write To Us</span>
						</div>
						<p className="mb-4">Fill out form and we will contact you within 24 hours</p>
						<p className="mb-4">Email: customer@exclusive.com</p>
						<p>Email:support@exclusive.com</p>
					</div>
				</div>
				<div className="p-10 shadow flex flex-col gap-10 w-full max-w-[800px]">
					<div className="grid grid-cols-3 gap-4">
						<div
							className={cn(
								"w-full flex bg-[#F5F5F5] text-black/40 border border-transparent rounded-md px-3 py-2 outline-none focus:border-black/40",
								focusId === "name" && "border-black/40",
								formData.name && "text-black/60 font-medium"
							)}
							onClick={() => {
								focusInput("name");
							}}
						>
							{"name" === focusId || formData.name.trim() ? (
								<input
									type="text"
									autoFocus
									value={formData.name}
									className="border-none focus:border-one focus:outline-none"
									onBlur={handleBlur}
									onInput={handleChange}
									id="name"
								/>
							) : (
								<p className="flex items-center gap-1">
									Your Name <span className="text-primary">*</span>
								</p>
							)}
						</div>

						<div
							className={cn(
								"w-full flex bg-[#F5F5F5] text-black/40 border border-transparent rounded-md px-3 py-2 outline-none focus:border-black/40",
								focusId === "email" && "border-black/40",
								formData.email && "text-black/60 font-medium"
							)}
							onClick={() => focusInput("email")}
						>
							{focusId === "email" || formData.email ? (
								<input
									type="email"
									autoFocus
									value={formData.email}
									className="border-none focus:border-one focus:outline-none"
									onBlur={handleBlur}
									onInput={handleChange}
									id="email"
								/>
							) : (
								<p className="flex items-center gap-1">
									Your Email <span className="text-primary">*</span>
								</p>
							)}
						</div>
						<div
							className={cn(
								"w-full flex bg-[#F5F5F5] text-black/40 border border-transparent rounded-md px-3 py-2 outline-none focus:border-black/40",
								focusId === "phone" && "border-black/40",
								formData.phone && "text-black/60 font-medium"
							)}
							onClick={() => focusInput("phone")}
						>
							{focusId === "phone" || formData.phone ? (
								<input
									type="text"
									autoFocus
									value={formData.phone}
									className="border-none focus:border-one focus:outline-none"
									onBlur={handleBlur}
									onInput={handleChange}
									id="phone"
								/>
							) : (
								<p className="flex items-center gap-1">
									Your Phone <span className="text-primary">*</span>
								</p>
							)}
						</div>
					</div>
					<div>
						<textarea
							placeholder="Your Message"
							className="w-full bg-[#F5F5F5] resize-none text-black/60 font-medium border border-transparent rounded-md px-3 py-2 outline-none focus:border-black/40 h-[207px]"
						/>
						<button className="bg-primary text-white w-max px-4 py-2 md:px-12 md:py-4 rounded-[4px] flex-shrink-0 mt-4 justify-self-end flex">
							Send Messages
						</button>
					</div>
				</div>
			</div>
		</main>
	);
}
