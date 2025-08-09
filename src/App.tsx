import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./pages/About";
import Home from "./pages/Home";
import RouteLayout from "./RouteLayout";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RouteLayout />,
		children: [
			{ path: "", element: <Home /> },
			{ path: "about", element: <About /> },
			{ path: "signup", element: <Signup /> },
			{ path: "login", element: <Login /> },
			{ path: "wishlist", element: <Wishlist /> },
			{ path: "cart", element: <Cart /> },
			{ path: "checkout", element: <Checkout /> },
			{ path: "*", element: <NotFound /> },
		],
	},
]);
export default function App() {
	return <RouterProvider router={router} />;
}
