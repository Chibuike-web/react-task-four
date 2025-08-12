import { v4 as uuidv4 } from "uuid";

type ProfileItem = {
	label: string;
	type: string;
	content: string | string[];
	disabled: boolean;
};
export const profile: ProfileItem[] = [
	{
		label: "First Name",
		type: "text",
		content: "Md",
		disabled: true,
	},
	{
		label: "Last Name",
		type: "text",
		content: "Rimel",
		disabled: true,
	},
	{
		label: "Email",
		type: "email",
		content: "rimel1111@gmail.com",
		disabled: true,
	},
	{
		label: "Address",
		type: "text",
		content: "Kingston, 5236, United State",
		disabled: true,
	},
	{
		label: "Password Changes",
		type: "password",
		content: ["Current Password", "New Password", "Confirm New Password"],
		disabled: false,
	},
];

type Subcategory = {
	id: string;
	text: string;
	tabKey: string;
};

type Category =
	| {
			category: string;
			subcategory: Subcategory[];
			link?: never;
	  }
	| {
			category: string;
			link: string;
			subcategory?: never;
	  };

export const data: Category[] = [
	{
		category: "Manage My Account",
		subcategory: [
			{
				id: uuidv4(),
				text: "My Profile",
				tabKey: "profile",
			},
			{
				id: uuidv4(),
				text: "Address Book",
				tabKey: "address-book",
			},
			{
				id: uuidv4(),
				text: "My Payment Options",
				tabKey: "my-payment-options",
			},
		],
	},
	{
		category: "My Orders",
		subcategory: [
			{
				id: uuidv4(),
				text: "My Returns",
				tabKey: "my-returns",
			},
			{
				id: uuidv4(),
				text: "My Cancellations",
				tabKey: "my-cancellations",
			},
		],
	},
	{
		category: "My Wishlist",
		link: "wishlist",
	},
];
