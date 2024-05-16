"use client";
import Table from "@/components/Manage/Table";
import { getToken } from "@/helper/tokenHandler";
import axios from "axios";
import { useEffect, useState } from "react";
type questionsProps = {
  _id: string;
  title: string;
  tags: string[];
  name: string;
  addedBy: string;
  url1: string;
  url2?: string;
  difficulty: string;
  createdAt: string;
  updatedAt: string;
};

export default function Page() {
  const [questions, setQuestions] = useState<questionsProps[]>([]);
  const [notfound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_API_URL + "/questions/getuserquestions",
          { headers: { Authorization: `Bearer ${getToken()}` } }
        );
        if (response.status === 200) {
          setLoading(false);
          setQuestions(response.data.questions);
        } else if (response.status === 404) {
          setLoading(false);
          setNotFound(true);
        }
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    })();
  }, []);
  if (loading)
    return (
      <div className="mt-16 text-center w-full">
        <p>Loading...</p>
      </div>
    );

  return (
    <main className="flex min-h-screen mt-16 overflow-hidden w-full flex-col  gap-4 sm:px-4 px-4">
      {questions.length > 0 && loading == false ? (
        <>
          <Header count={questions.length} />
          <Table questions={questions} setQuestions={setQuestions} />
        </>
      ) : (
        <div className="mt-10 bg-gray-100 border rounded-md w-full p-4 text-center">
          <p>No questions found</p>
        </div>
      )}
    </main>
  );
}

function Header({ count }: { count: number }) {
  return (
    <div>
      <h2 className="text-3xl font-semibold">Questions</h2>
      <span className="text-sm text-gray-600">
        Total {count} questions found.{" "}
      </span>
    </div>
  );
}
