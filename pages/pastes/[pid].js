import React from "react";
import { db } from "../../config/firebase";
import Head from "next/link";

export async function getServerSideProps({ params: { pid } }) {
	const res = await db.collection("pastes").doc(pid).get();
	return {
		props: {
			paste: {
				...res.data(),
				createdAt: res.data().createdAt.toMillis(),
			},
		},
	};
}

export default function IndiPage({ paste }) {
	return (
		<div>
			<div>
				<div>
					<h1>{paste.title}</h1>
					<h4>
						Created On: {new Date(paste.createdAt).toDateString()}
					</h4>
					<p>{paste.body}</p>
				</div>
			</div>
		</div>
	);
}
