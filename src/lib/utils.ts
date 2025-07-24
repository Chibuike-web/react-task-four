import type { ClassValue } from "clsx";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getStarRating(rating: number) {
	const full = Math.floor(rating);
	const half = rating % 1 >= 0.5 ? 1 : 0;
	const empty = 5 - full - half;

	return { full, half, empty };
}

// id: string;
// image: string;
// price: number;
// name: string;
// rating: number;
// reviews: number;
// discount: string;
// tags?: string[];
