import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import { Navbar } from "../components/Navbar";
import { auth } from "../config/firebase";

function MyApp({ Component, pageProps }) {
	const [user, setUser] = useState(null);

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				setUser(user);
			} else {
				setUser(null);
			}
		});
	}, []);

	return (
		<>
			<Navbar user={user} />
			<Component {...pageProps} user={user} />
		</>
	);
}

export default MyApp;
