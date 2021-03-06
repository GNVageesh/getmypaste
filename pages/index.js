import Head from "next/head";
import Link from "next/link";
import router from "next/router";

export default function Home({ user }) {
	function gotPage(link) {
		router.push(link);
	}

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Head>
				<title>GetMyPaste | Home</title>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="A Place For All Your Pastes"
				/>
				<meta
					name="google-site-verification"
					content="w5AEpKTK4j7WT2iTr-uW4B__Q29_Vxk27xneiA4XahY"
				/>
				<meta
					name="keywords"
					content="copy, paste, cut, programming, getmypaste, pastebin, hastebin, bin"
				/>
				<meta name="author" content="GN Vageesh" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
			</Head>

			{user ? (
				<div className="text-center text-2xl">
					<h1>
						Welcome{" "}
						<span className="font-bold">{user.displayName}</span>,
						get started by creating new pastes
					</h1>
					<Link href="/new">
						<a className="underline m-4 text-green-500 font-bold text-xl">
							New Paste
						</a>
					</Link>
				</div>
			) : (
				<div className="text-center">
					<h1 className="text-3xl">Get My Paste</h1>
					<div className="m-5">
						<button
							onClick={() => gotPage("/login")}
							className="bg-blue-500 py-2 px-6 m-4 rounded-xl text-white text-xl"
						>
							Login
						</button>
						<button
							onClick={() => gotPage("/register")}
							className="bg-green-500 py-2 px-6 m-4 rounded-xl text-white text-xl"
						>
							Sign Up
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
