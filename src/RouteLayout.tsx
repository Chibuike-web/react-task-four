import { Outlet } from "react-router";

export default function RouteLayout() {
	return (
		<div>
			<p>Navbar</p>
			<Outlet />
			<p>Footer</p>
		</div>
	);
}
