import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { auth, db } from "../config/firebase";

const Register = ({ user }) => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async () => {
		try {
			const res = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			await res.user
				.updateProfile({
					displayName: username,
				})
				.then(async () => {
					await db.collection("users").doc(user.displayName).set({
						username: user.displayName,
						email: user.email,
						uid: user.uid,
					});
				})
				.then(() => router.push("/"));
		} catch (err) {
			alert(err.message);
		}
	};

	return (
		<div>
			<div className="flex min-h-screen flex-col items-center justify-center m-6">
				<div>
					<h1 className="text-3xl">
						Join the{" "}
						<span className="text-green-500 font-bold underline">
							Pasters
						</span>{" "}
						Party
					</h1>
				</div>
				<div className="grid grid-cols-2">
					<div>
						<Image
							src="/images/register.png"
							width={600}
							height={600}
							alt="Login page side image"
						/>
					</div>
					<div className="text-center my-auto items-center justify-center">
						<div>
							<form
								onSubmit={(e) => {
									e.preventDefault();
									handleSubmit();
								}}
							>
								<input
									className="py-2 outline-none w-3/4 px-5 m-5 border-b-2 border-blue-500"
									name="username"
									type="text"
									placeholder="My Name"
									value={username}
									onChange={(e) =>
										setUsername(e.target.value)
									}
								/>
								<br />
								<input
									className="py-2 mt-0 outline-none w-3/4 px-5 m-5 border-b-2 border-blue-500"
									name="email"
									type="email"
									placeholder="example@web.com"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<br />
								<input
									className="py-2 outline-none w-3/4  px-5 m-5 mt-0 border-b-2 border-blue-500"
									name="password"
									type="password"
									placeholder="**********"
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
								<br />
								<div className="text-center">
									<button className="bg-green-500 text-white rounded-2xl text-xl py-3 px-6">
										Sign Up
									</button>
								</div>
							</form>
						</div>
						<div className="m-6">
							<h3 className="text-sm">
								Already have an account?{" "}
								<Link href="/login">
									<span className="font-black cursor-pointer">
										Login
									</span>
								</Link>
							</h3>
						</div>
					</div>
				</div>
				{/* <div className="absolute bottom-0">
					<h1>Hello</h1>
				</div> */}
			</div>
		</div>
	);
};

export default Register;
