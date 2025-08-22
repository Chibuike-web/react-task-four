import { createContext, useLayoutEffect, useState } from "react";

export const Context = createContext<{
	user: string;
	hydrated: boolean;
	setUser: (value: string) => void;
}>({
	user: "",
	hydrated: false,
	setUser: () => {},
});

export default function UserContextProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState("");
	const [hydrated, setHydrated] = useState(false);

	useLayoutEffect(() => {
		const storedUser = localStorage.getItem("user");
		if (storedUser) {
			const parsed = JSON.parse(storedUser);
			setUser(parsed.email);
		}
		setHydrated(true);
	}, []);

	return <Context.Provider value={{ user, setUser, hydrated }}>{children}</Context.Provider>;
}
