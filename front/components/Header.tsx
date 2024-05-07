"use client";

import { Code } from "@phosphor-icons/react";

export default function Header() {
	return (
		<header className="flex items-center justify-between h-[12vh] w-full p-4 bg-zinc-200 ">
			<div className="flex flex-row justify-center items-center ">
				<div className="bg-blue-900 text-white rounded ring-2 ring-offset-white">
					<Code size={30} />
				</div>
				<h1 className="text-2xl font-bold ml-5 text-purple-800">Dsa-tracker</h1>
			</div>
			{/* navbar */}
			<div className=" w-1/2 flex items-center justify-between p-4">
				<a href="/home" className="">
					<button className="text-black rounded text-2xl w-[10vw] h-[7vh] hover:underline hover:text-purple-900 ">
						Home
					</button>
				</a>
				<a href="/about" className="">
					<button className="text-black rounded text-2xl w-[10vw] h-[7vh] hover:underline hover:text-purple-900 ">
						About
					</button>
				</a>
				<a href="/profile" className="">
					<button className="text-black rounded text-2xl w-[10vw] h-[7vh] hover:underline hover:text-purple-900 ">
						Profile
					</button>
				</a>

				<a href="/login" className="text-blue-500 hover:underline">
					<button className="text-white bg-red-700 rounded text-2xl w-[10vw] h-[7vh]">
						Login
					</button>
				</a>
			</div>
		</header>
	);
}
