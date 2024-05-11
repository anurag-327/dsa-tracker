"use client";
import axios from "axios";
import { useEffect, useState } from "react";
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
export default function Table({
  sheet,
  questions,
}: {
  sheet: SheetProps;
  questions: questionProps[];
}) {
  return (
    <div className="flex flex-col mt-10 w-full max-w-5xl">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
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
                    number={index + 1}
                    data={data}
                    sheet={sheet}
                  />
                ))}
              </tbody>
              {/* <tfoot>
                <tr className="bg-emerald-400">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                    Congratulations!
                  </td>
                  <td></td>
                  <td></td>
                </tr>
              </tfoot> */}
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
  sheet,
}: {
  data: questionProps;
  number: number;
  sheet: SheetProps;
}) {
  const difficultyColor = {
    easy: "bg-teal-100 text-teal-800 dark:bg-teal-500/10 dark:text-teal-500",
    medium:
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-green-200",
    hard: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-green-200",
  };

  let { _id, name, title, difficulty, url1, tags } = data;
  let sortedTags = sortByLength(tags);
  return (
    <tr>
      <td className="px-6 h-px w-px py-4 whitespace-nowrap text-gray-800 dark:text-gray-200">
        <Checkbox qid={_id} sid={sheet._id} />
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
            ${difficultyColor[difficulty]}`}
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

function Checkbox({ qid, sid }: { qid: string; sid: string }) {
  // const done = useStore((state) => state.done);
  // const addID = useStore((state) => state.addID);
  // const removeID = useStore((state) => state.removeID);

  // const [ids, setIDS] = useState([]);
  // useEffect(() => {
  //   setIDS(done);
  // }, [done]);

  return (
    <div className="flex justify-center items-center h-5 ">
      <input
        id="hs-table-checkbox-1"
        type="checkbox"
        className="border-gray-600 rounded text-blue-600 focus:ring-blue-500 h-4 w-4 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
        // checked={ids.includes(number)}
        onChange={(e) => {
          if (e.target.checked) {
            // addID(number);
            alert("added");
          } else {
            // removeID(number);
            alert("removed");
          }
        }}
      />
      <label htmlFor="hs-table-checkbox-1" className="sr-only">
        Checkbox
      </label>
    </div>
  );
}
