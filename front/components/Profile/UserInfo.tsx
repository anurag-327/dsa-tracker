interface props {
	username: string;
}
export default function UserInfo() {
	return (
		<div className="w-full max-h-screen">
			<div className="max-w-4xl px-4 py-10 mx-auto sm:px-6 lg:px-8 lg:py-14 bg-zinc-100">
				<h1 className="text-2xl flex justify-start">Profile</h1>
				<h1 className="font-mono mb-6">mannage yoyr details:</h1>

				<form>
					<div className="grid grid-flow-dense gap-4 ">
						<div className="inline-block">
							<label htmlFor="full-name" className="inline-block text-sm">
								Full-Name:
							</label>
							<div className="sm:col-span-9">
								<input className="rounded-lg ring-1 ring-black w-full" type="text" placeholder="Enter your full name" />
							</div>
						</div>
						<div className="inline-block ">
							<label htmlFor="user-name" className="inline-block text-sm">
								User-Name:
							</label>
							<div className="">
								<input className="rounded-lg ring-1 ring-black h-[5vh] w-full" type="text" placeholder="Enter your user name" />
							</div>
						</div>
						<div className="inline-block">
							<label htmlFor="email" className="inline-block text-sm">
								Email:
							</label>
							<div className="flex">
								<input className="rounded-lg ring-1 ring-black h-[5vh] w-full" type="email" readOnly placeholder="Enter your email" />
							</div>
						</div>
						<div className="inline-block">
							<label htmlFor="pasword" className="inline-block text-sm">
								Password:
							</label>
							<div className="flex flex-col gap-4 rounded-lg">
								<input className="rounded-lg ring-1 ring-black h-[5vh] w-full" type="password" placeholder="Enter your old password" />
							
								<input className="rounded-lg ring-1 ring-black h-[5vh] w-full" type="password" placeholder="Enter your new password" />
							</div>
						</div>
					</div>
					<div className="flex justify-center items-center mt-5">
						<div className="bg-green-400 hover:bg-blue-700 text-black w-[10vw] h-[7vh] rounded flex justify-center ">
							<button type="submit" className="inline-block justify-end">
								Save Changes
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
