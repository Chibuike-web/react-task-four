import { createContext, useContext, useState, type ReactNode } from "react";

type Details = {
	id: string;
	quantity: number;
};

type DetailsContextType = {
	details: Details[];
	setDetails: React.Dispatch<React.SetStateAction<Details[]>>;
	increaseQuantity: (id: string) => void;
	decreaseQuantity: (id: string) => void;
	getQuantity: (id: string) => number;
};

const DetailsContext = createContext<DetailsContextType | undefined>(undefined);

export default function DetailsContextProvider({ children }: { children: ReactNode }) {
	const [details, setDetails] = useState<Details[]>([]);

	const increaseQuantity = (id: string) => {
		setDetails((prev) => {
			const found = prev.find((t) => t.id === id);
			if (found) {
				return prev.map((t) => (t.id === id ? { ...t, quantity: t.quantity + 1 } : t));
			} else {
				return [...prev, { id, quantity: 1 }];
			}
		});
	};
	const decreaseQuantity = (id: string) => {
		setDetails((prev) => {
			const found = prev.find((t) => t.id === id);
			if (found) {
				return prev.map((t) =>
					t.id === id ? { ...t, quantity: t.quantity > 1 ? t.quantity - 1 : 1 } : t
				);
			} else {
				return [...prev, { id, quantity: 1 }];
			}
		});
	};

	const getQuantity = (id: string) => {
		const found = details.find((d) => d.id === id);
		return found ? found.quantity : 1;
	};

	return (
		<DetailsContext.Provider
			value={{ details, setDetails, increaseQuantity, decreaseQuantity, getQuantity }}
		>
			{children}
		</DetailsContext.Provider>
	);
}

export function useDetailsContext() {
	const context = useContext(DetailsContext);
	if (!context) throw new Error("useDetailsContext must be used within a DetailsContextProvider");
	return context;
}
