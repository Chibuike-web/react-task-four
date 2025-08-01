import { z } from "zod";

const passwordRegex =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&()[\]{}^#~<>.,;:`'"|\\/_+=-]).{6,}$/;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const authSchema = z.object({
	name: z.string().trim().nonempty("Name is required"),

	email: z
		.string()
		.trim()
		.nonempty("Email is required")
		.refine((val) => emailRegex.test(val), {
			message: "Enter a valid email",
		}),

	password: z
		.string()
		.nonempty("Password is required")
		.min(6, "Password must be at least 6 characters")
		.refine((val) => passwordRegex.test(val), {
			message: "Password must include uppercase, lowercase, number, and special character",
		}),
});

export type AuthSchemaType = z.infer<typeof authSchema>;
