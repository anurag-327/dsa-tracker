"use client";
import { getToken } from "@/helper/tokenHandler";
import { Star } from "@phosphor-icons/react/dist/ssr";
import axios from "axios";
import { use, useEffect } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  useEffect(() => {
    async function fetchData() {
      const response = await axios(
        process.env.NEXT_PUBLIC_API_URL +
          `/data/getsheetmanagamentdata/${params.slug}`,
        { headers: { Authorization: `Bearer ${getToken()}` } }
      );
      console.log(response.data);
      if (response.status === 200) {
        console.log(response.data.sheet);
      } else {
        console.error("Error fetching data");
      }
    }
    fetchData();
  }, []);
  return (
    <main className="flex min-h-screen mt-16 overflow-hidden w-full flex-col  gap-4 sm:px-4 px-4">
      {/* <Description sheet={sheet} /> */}
      {params.slug}
    </main>
  );
}

function Description({ sheet }: { sheet: SheetProps }) {
  return (
    <div className="flex flex-col sm:mt-20 w-full max-w-5xl">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">{sheet.name}</h1>
        <p className="sm:-mt-4">{sheet.description}</p>
        <div className="flex flex-col sm:-mt-1 gap-2">
          <div className="flex flex-col sm:flex-row gap-1 sm:items-center sm:justify-between">
            <div className="flex w-fit border border-gray-200 bg-gray-100 px-4 py-1 rounded-full justify-between items-center flex-row gap-1">
              <Star size={20} weight="fill" className="text-yellow-500" />
              <span className="text-base text-gray-700 font-semibold">
                {sheet.starCount}
              </span>
            </div>
          </div>
          <div className="text-sm ">
            Added By :{" "}
            <a
              href={`/user/${sheet.addedBy.username}`}
              className="text-blue-600 underline font-semibold"
            >
              {sheet.addedBy.username}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
