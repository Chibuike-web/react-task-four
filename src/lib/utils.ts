import type { ClassValue } from "clsx";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import {
	GamingIcon,
	HeadphoneIcon,
	PhoneIcon,
	SmartwatchIcon,
	ComputerIcon,
	CameraIcon,
} from "../assets/Icons";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getStarRating(rating: number) {
	const full = Math.floor(rating);
	const half = rating % 1 >= 0.5 ? 1 : 0;
	const empty = 5 - full - half;

	return { full, half, empty };
}

export const categories = [
	{
		id: "phones",
		label: "Phones",
		icon: PhoneIcon,
	},
	{
		id: "computers",
		label: "Computers",
		icon: ComputerIcon,
	},
	{
		id: "smartwatch",
		label: "SmartWatch",
		icon: SmartwatchIcon,
	},
	{
		id: "camera",
		label: "Camera",
		icon: CameraIcon,
	},
	{
		id: "headphones",
		label: "HeadPhones",
		icon: HeadphoneIcon,
	},
	{
		id: "gaming",
		label: "Gaming",
		icon: GamingIcon,
	},
];

export const sizes = ["XS", "S", "M", "L", "XL"];
