import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./globals.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import UserContextProvider from "./context/UserContext.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<UserContextProvider>
			<Provider store={store}>
				<App />
			</Provider>
		</UserContextProvider>
	</StrictMode>
);
