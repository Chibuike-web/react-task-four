import { useState } from "react";
import { cn } from "../lib/utils";
import type { Colors } from "../lib/types";

export default function ProductColors({ colors }: { colors?: Colors[] }) {
	if (!colors || colors.length === 0) return null;
	const [colorId, setColorId] = useState(colors[0].id);

	return (
		<div className="flex gap-2 mt-2">
			{colors.map(({ id, label, colorCode }) => (
				<span
					key={id}
					role="button"
					tabIndex={0}
					onClick={() => setColorId(id)}
					onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setColorId(id)}
					title={label}
					className={cn(
						"w-5 h-5 rounded-full inline-block cursor-pointer",
						colorCode,
						id === colorId && "border-4 border-white shadow-[0_0_0_2px_rgba(0,0,0,1)]"
					)}
				>
					<span className="sr-only">{label}</span>
				</span>
			))}
		</div>
	);
}
