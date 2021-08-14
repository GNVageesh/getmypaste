import React from "react";
import { db } from "../../config/firebase";
import Link from "next/link";

export async function getServerSideProps(context) {
	const snap = await db
		.collection("pastes")
		.orderBy("createdAt", "desc")
		.get();
	const allpastes = snap.docs.map((data) => {
		return {
			...data.data(),
			createdAt: data.data().createdAt.toMillis(),
			id: data.id,
		};
	});

	return {
		props: { allpastes },
	};
}

function PastesIndex({ allpastes }) {
	return (
		<div>
			<div className="m-10">
				<div>
					{allpastes.map((paste) => (
						<div>
							<Link href={"/pastes/" + paste.id} key={paste.id}>
								<div className="m-4 border-green-500 border-2 w-auto text-center py-2 px-6 rounded-full cursor-pointer">
									<h1>{paste.title}</h1>
									<p>{paste.body}</p>
								</div>
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default PastesIndex;
