import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_PROJECT_ID,
	projectNumber: import.meta.env.VITE_PROJECT_NUMBER,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
