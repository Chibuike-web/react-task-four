import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./pages/About";
import Home from "./pages/Home";
import RouteLayout from "./RouteLayout";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RouteLayout />,
		children: [
			{ path: "", element: <Home /> },
			{ path: "about", element: <About /> },
			{ path: "signup", element: <Signup /> },
			{ path: "*", element: <NotFound /> },
		],
	},
]);
export default function App() {
	return <RouterProvider router={router} />;
}
