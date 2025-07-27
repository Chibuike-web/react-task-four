export type Product = {
	id: string;
	image: string;
	price: number;
	name: string;
	rating: number;
	reviews: number;
	discount?: number;
	tags?: string[];
	colors?: Colors[];
};

export type Colors = {
	id: string;
	label: string;
	colorCode: string;
};
