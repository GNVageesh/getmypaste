import React from "react";
import Link from "next/link";
import { auth } from "../config/firebase";
import { useRouter } from "next/router";
import { useState } from "react";

export const Navbar = ({ user }) => {
	const router = useRouter();
	const [active, setActive] = useState(false);

	const handleClick = () => {
		setActive(!active);
	};
	return (
		<div>
			{/* <div className="m-4 bg-green-400 py-0 px-6 rounded-xl text-white">
				<div className="flex justify-between py-3 px-4 items-center">
					<div className="text-xl">
						<h1>GetMyPaste</h1>
					</div>
					<div>
						{user ? (
							<div>
								<div className="flex justify-between items-center">
									<div>
										<Link href="#">
											<a className="mx-3 font-bold rounded-2xl py-2 px-4 hover:bg-green-600">
												New
											</a>
										</Link>
										<Link href="#">
											<a className="mx-3 font-bold rounded-2xl py-2 px-4 hover:bg-green-600">
												Account
											</a>
										</Link>
										<Link href="#">
											<a className="mx-3 font-bold rounded-2xl py-2 px-4 hover:bg-green-600">
												Dashboard
											</a>
										</Link>
									</div>
									<div>
										<button
											onClick={() => auth.signOut()}
											className="bg-blue-500 py-2 px-4 rounded-full"
										>
											Logout
										</button>
									</div>
								</div>
							</div>
						) : (
							<>
								<div className="flex items-center">
									<div>
										<Link href="#">
											<a className="mx-3 font-bold rounded-2xl py-2 px-4 hover:bg-green-600">
												About Us
											</a>
										</Link>
										<Link href="#">
											<a className="mx-3 font-bold rounded-2xl py-2 px-4 hover:bg-green-600">
												Guide
											</a>
										</Link>
									</div>
									<div>
										<button
											onClick={() =>
												router.push("/login")
											}
											className="bg-blue-500 py-2 px-4 rounded-full"
										>
											Login
										</button>
									</div>
								</div>
							</>
						)}
					</div>
					<div></div>
				</div>
			</div> */}
			<nav className="flex items-center flex-wrap bg-green-400 py-1 px-4 m-4 rounded-2xl ">
				<Link href="/">
					<a className="inline-flex items-center p-2 mr-4 ">
						<span className="text-xl text-white font-bold tracking-wide">
							GetMyPaste
						</span>
					</a>
				</Link>
				<button
					className=" inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
					onClick={handleClick}
				>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
				{/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
				<div
					className={`${
						active ? "" : "hidden"
					}   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
				>
					<div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
						{user ? (
							<div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
								<Link href="/new">
									<a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white hover:rounded-2xl">
										New
									</a>
								</Link>
								<Link href="/">
									<a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white hover:rounded-2xl">
										About Us
									</a>
								</Link>
								<Link href="/">
									<a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white hover:rounded-2xl">
										Contact us
									</a>
								</Link>
								<button
									onClick={() => auth.signOut()}
									className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white hover:rounded-2xl"
								>
									Logout
								</button>
							</div>
						) : (
							<div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
								<Link href="/">
									<a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white hover:rounded-2xl">
										Home
									</a>
								</Link>
								<Link href="/">
									<a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white hover:rounded-2xl">
										About us
									</a>
								</Link>
								<Link href="/">
									<a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white hover:rounded-2xl">
										Contact us
									</a>
								</Link>
								<button
									onClick={() => router.push("/login")}
									className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white hover:rounded-2xl"
								>
									Login
								</button>
							</div>
						)}
					</div>
				</div>
			</nav>
		</div>
	);
};
