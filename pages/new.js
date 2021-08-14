import React from "react";
import { useState, useEffect } from "react";
import { db, timeStamp, firebase } from "../config/firebase";
import { useRouter } from "next/router";

export default function New({ user }) {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const router = useRouter();

	const handleSubmit = async () => {
		await db
			.collection("pastes")
			.add({
				title: title,
				body: content,
				createdBy: user.uid,
				createdAt: timeStamp,
			})
			.then(async () => {
				await db
					.collection("users")
					.doc(user.displayName)
					.update({
						title: firebase.firestore.FieldValue.arrayUnion(title),
					});
			})
			.then(() => {
				router.push("/pastes");
				setTimeout(() => {
					router.reload();
				}, 1000);
			});
	};

	return (
		<div>
			<div className="flex justify-center min-h-screen items-center">
				<div>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							handleSubmit();
						}}
					>
						<input
							className="p-2 m-4 text-xl w-3/4 border-b-2 border-green-500 outline-none"
							type="text"
							name="title"
							placeholder="My Paste Title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
						<br />
						<textarea
							className="border-2 border-green-500 rounded-2xl p-2 outline-none"
							type="text"
							name="title"
							cols="100"
							rows="20"
							placeholder="Something about my paste"
							value={content}
							onChange={(e) => setContent(e.target.value)}
						/>
						<br />
						<div className="text-center m-6">
							<button className="py-3 px-8 rounded-3xl bg-blue-500 text-white text-xl">
								Create Paste
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
