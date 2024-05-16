"use client";
import { getToken } from "@/helper/tokenHandler";
import axios from "axios";
import { useEffect, useState } from "react";

type questionProps = {
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
export default function Table({
  questions,
  setQuestions,
  selected,
  setSelected,
  Header,
}: {
  questions: questionProps[];
  setQuestions: React.Dispatch<React.SetStateAction<questionProps[]>>;
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  Header?: React.ReactNode;
}) {
  if (questions.length === 0)
    return (
      <div className="mt-10 bg-gray-100 border rounded-md w-full p-4 text-center">
        <p>No questions found</p>
      </div>
    );
  return (
    <div className="flex flex-col mt-4 w-full mx-auto max-w-5xl">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <Header
            questions={questions}
            count={questions.length}
            setSelected={setSelected}
            selected={selected}
            setQuestions={setQuestions}
          />
          <div className="border rounded-lg overflow-hidden dark:border-gray-700">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Checkbox
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    NUMBER
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Title
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Difficulty
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Tags
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y bg-gray-50 divide-gray-200 dark:divide-gray-700">
                {questions.map((data, index) => (
                  <Row
                    key={data._id}
                    selected={selected}
                    setSelected={setSelected}
                    number={index + 1}
                    data={data}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function sortByLength(array: string[]) {
  return array.sort((a, b) => {
    if (a.length > b.length) return 1;
    else if (a.length === b.length) return 0;
    return -1;
  });
}

function Row({
  data,
  number,
  selected,
  setSelected,
}: {
  data: questionProps;
  number: number;
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  let { _id, name, title, difficulty, url1, tags } = data;
  let sortedTags = sortByLength(tags);
  return (
    <tr>
      <td className="px-6 h-px w-px py-4 whitespace-nowrap text-gray-800 dark:text-gray-200">
        <Checkbox selected={selected} setSelected={setSelected} qid={_id} />
      </td>
      <td className="px-6 h-px w-px py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
        {number}
      </td>
      <td className="px-6 py-4 min-w-[250px] whitespace-nowrap font-[450] text-sm text-gray-800 dark:text-gray-200">
        <a href={url1} className="underline" target="_blank">
          {name}
        </a>
      </td>

      <td className="px-6 py-4 h-px w-px whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
        <span
          className={`
            py-1 px-2 inline-flex items-center gap-x-1 text-xs font-medium rounded-full
            ${
              difficulty == "Easy" &&
              `bg-teal-100 text-teal-800 dark:bg-teal-500/10 dark:text-teal-500`
            } 
            ${
              difficulty == "Medium" &&
              `bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-green-200`
            } 
            ${
              difficulty == "Hard" &&
              `bg-red-100 text-red-800 dark:bg-red-900 dark:text-green-200`
            }`}
        >
          {difficulty}
        </span>
      </td>

      <td className="whitespace-nowrap px-6">
        <div className="flex space-x-1">
          {sortedTags.slice(0, 3).map((tag, index) => (
            <div key={index + 1} className="p-1">
              <span className="inline-flex items-center gap-1.5 py-1 px-2 rounded-lg text-xs font-medium bg-gray-100 border text-gray-800 dark:bg-gray-900 dark:text-gray-200">
                {tag}
              </span>
            </div>
          ))}
          {sortedTags.length > 3 && (
            <div key={4} className="p-1">
              <span className="inline-flex items-center gap-1.5 py-1 px-2 rounded-lg border text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
                +{tags.length - 3}
              </span>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
}

function Checkbox({
  qid,
  selected,
  removeHandler,
  addHandler,
}: {
  qid: string;
  selected: string[];
  removeHandler: (id: string) => void;
  addHandler: (id: string) => void;
}) {
  return (
    <div className="flex justify-center items-center h-5 ">
      <input
        id="hs-table-checkbox-1"
        type="checkbox"
        className="border-gray-600 rounded text-blue-600 focus:ring-blue-500 h-4 w-4 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
        checked={selected.includes(qid)}
        onChange={(e) => {
          if (e.target.checked) {
            addHandler(qid);
            // setSelected((prev) => [...prev, qid]);
          } else {
            removeHandler(qid);
            // setSelected((prev) => prev.filter((id) => id !== qid));
          }
        }}
      />
      <label htmlFor="hs-table-checkbox-1" className="sr-only">
        Checkbox
      </label>
    </div>
  );
}

function Header({
  questions,
  setQuestions,
  selected,
  setSelected,
  count,
}: {
  questions: questionProps[];
  setQuestions: React.Dispatch<React.SetStateAction<questionProps[]>>;
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  count: number;
}) {
  async function deleteQuestions() {
    if (selected.length === 0) return;
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_URL + "/questions/deletequestions",
        { ids: selected },
        { headers: { Authorization: `Bearer ${getToken()}` } }
      );
      console.log(response);
      if (response.status === 200) {
        setSelected([]);
        setQuestions(questions.filter((q) => !selected.includes(q._id)));
      }
    } catch (error) {}
  }
  return (
    <div className="w-full flex justify-between gap-2 rounded-md mb-2 p-2 border bg-gray-100">
      <div className="flex gap-2 ml-10 items-center">
        <div>
          <input
            id="hs-table-checkbox-1"
            type="checkbox"
            className="border-gray-600 rounded text-blue-600 focus:ring-blue-500 h-4 w-4 mt-1 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
            checked={selected.length === count}
            onChange={(e) => {
              if (e.target.checked) {
                setSelected((prev) => questions.map((q) => q._id));
              } else {
                setSelected([]);
              }
            }}
          />
        </div>
        <div>
          <span className="text-gray-600 text-xs">
            {selected.length} / {count} selected
          </span>
        </div>
      </div>
      <div>
        <button
          onClick={deleteQuestions}
          className="px-2 py-1 bg-red-400 text-white rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
