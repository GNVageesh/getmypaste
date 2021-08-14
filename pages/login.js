import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { auth } from "../config/firebase";
import { useRouter } from "next/router";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const router = useRouter();

	const handleSubmit = async () => {
		try {
			const res = await auth.signInWithEmailAndPassword(email, password);
			router.push("/");
		} catch (err) {
			alert(err.message);
		}
	};

	return (
		<div>
			<div className="flex min-h-screen flex-col items-center justify-center m-6">
				<div>
					<h1 className="text-3xl">
						Welcome Back{" "}
						<span className="text-blue-500 font-bold underline">
							Paster
						</span>
						!
					</h1>
				</div>
				<div className="grid grid-cols-2">
					<div>
						<Image
							src="/images/login.png"
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
									name="email"
									type="text"
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
										Login
									</button>
								</div>
							</form>
						</div>
						<div className="m-6">
							<h3 className="text-sm">
								Dont have an account?{" "}
								<Link href="/register">
									<span className="underline font-black cursor-pointer">
										Create one
									</span>
								</Link>
							</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
