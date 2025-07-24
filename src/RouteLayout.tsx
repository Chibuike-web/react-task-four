import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

export default function RouteLayout() {
	return (
		<div>
			<Navbar />
			<Outlet />
			<p>Footer</p>
		</div>
	);
}
