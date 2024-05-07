"use client";

import React from "react";
import {
	FacebookLogo,
	GithubLogo,
	TwitterLogo,
	WhatsappLogo,
	LinkedinLogo,
} from "@phosphor-icons/react";
import Link from "next/link";

const Footer: React.FC = () => {
	return (
		<footer className="bg-gray-500 text-white py-4 w-full flex justify-between">
      <div className="pl-5">
			<div className="social-media-icons flex flex-row justify-center items-center gap-8 ">
				<div className="hover:text-blue-600 hover:bg-black hover:rounded">
					<Link
						href="https://www.linkedin.com/in/gyan-pratap-singh-275785236/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<LinkedinLogo size={30} />
					</Link>
				</div>
        <div className="hover:text-blue-600 hover:bg-black hover:rounded">
				<Link
					href="https://github.com/Gyanthakur"
					target="_blank"
					rel="noopener noreferrer"
				>
					<GithubLogo size={30} />
				</Link>
        </div>
        <div className="hover:text-blue-600 hover:bg-black hover:rounded">
				<Link
					href="https://twitter.com/gps_96169"
					target="_blank"
					rel="noopener noreferrer"
				>
					<TwitterLogo size={30} />
				</Link>
        </div>
        <div className="hover:text-blue-600 hover:bg-black hover:rounded">
				<Link
					href="https://www.facebook.com/profile.php?id=100026766931684"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FacebookLogo size={30} />
				</Link>
        </div>
        <div className="hover:text-blue-600 hover:bg-black hover:rounded">
				<Link
					href="https://wa.me/918957818597"
					target="_blank"
					rel="noopener noreferrer"
				>
					<WhatsappLogo size={30} />
				</Link>
        </div>
			</div>
			<div className="py-4 text-center">
				<p>
					&copy; {new Date().getFullYear()} DSA-TRACKER. All rights
					reserved.
				</p>
			</div>
      </div>

      <div className="flex flex-col justify-between">
        <p className="text-center">Made with ❤️ by Gyan Pratap Singh</p>
        <p className="text-center">Made with ❤️ by Durgesh Pratap Singh</p>
        <p className="text-center">Made with ❤️ by Anurag Srivastva</p>
      </div>
		</footer>
	);
};

export default Footer;
