"use client";
import Table from "@/components/Sheets/Table";
import { Book } from "@phosphor-icons/react";
import {
  BookBookmark,
  Bookmark,
  BookmarkSimple,
  Star,
} from "@phosphor-icons/react/dist/ssr";
import axios from "axios";
import { useEffect, useState } from "react";
import { set } from "react-hook-form";
interface questionProps {
  addedBy: string;
  _id: string;
  createdAt?: string;
  difficulty: string;
  name: string;
  title: string;
  updatedAt?: string;
  url1: string;
  url2?: string;
  tags: string[];
}
interface SheetProps {
  _id: string;
  addedBy: { name: string; username: string };
  description: string;
  isPublic: boolean;
  name: string;
  questions: string[];
  title: string;
  starCount: number;
  createdAt?: string;
  updatedAt?: string;
}
export default function Page({ params }: { params: { slug: string } }) {
  const [questions, setQuestions] = useState<questionProps[]>([]);
  const [sheet, setSheet] = useState<SheetProps>();
  const [notFound, setNotFound] = useState(false);
  useEffect(() => {
    try {
      (async function () {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_API_URL + `/sheets/getsheet/${params.slug}`
        );
        if (response.status === 200) {
          setSheet(response.data.sheet);
          setQuestions(response.data.sheet.questions);
        } else {
          setNotFound(true);
        }
      })();
    } catch (error) {
      setNotFound(true);
    }
  }, [params.slug]);

  if (notFound) return <p>Sheet not found</p>;
  return (
    <main className="flex min-h-screen  overflow-hidden w-full flex-col items-center gap-4 sm:px-8 px-4">
      <div className="mt-20 max-w-5xl w-full flex flex-col items-center">
        {sheet && questions ? (
          <>
            <Description sheet={sheet} />
            <Table sheet={sheet} questions={questions} />
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
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
            <BookmarkSheet bookmarked={true} />
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

function BookmarkSheet({ bookmarked }: { bookmarked: boolean }) {
  return (
    <button className="border flex justify-center items-center gap-2 w-fit px-4 sm:text-base text-sm bg-blue-500 text-white py-1.5 sm:py-2 rounded-lg">
      {bookmarked ? (
        <BookmarkSimple size={24} weight="fill" />
      ) : (
        <BookmarkSimple size={24} />
      )}
      {bookmarked ? <span>Bookmarked</span> : <span>Bookmark</span>}
    </button>
  );
}
