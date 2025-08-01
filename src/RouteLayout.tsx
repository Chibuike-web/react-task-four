import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RouteLayout() {
	return (
		<div>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
}
