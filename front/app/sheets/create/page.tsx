"use client";
import { getToken } from "@/helper/tokenHandler";
import { useRouter } from "next/navigation";
import { use, useEffect } from "react";
import { Formik, Form, Field, FormikHelpers } from "formik";
import * as Yup from "yup";
import { get } from "http";
interface formValues {
  name: string;
  title: string;
  description?: string;
  isPublic: boolean;
  url1: string;
}
export default function Page() {
  const router = useRouter();
  const handleSubmit = (values: any) => {
    console.log(values);
  };
  useEffect(() => {
    if (getToken() === null) {
      router.push("/login?callback_url=/sheets/create");
    }
  }, []);
  if (getToken() === null) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }
  return (
    <main className="flex min-h-screen bg-gradient-to-b from-blue-200 justify-center to-gray-50 via-bg-white overflow-hidden gap-4 sm:px-8 px-4">
      <div className="mt-10 w-full items-start max-w-5xl flex flex-col sm:mt-20">
        <h2 className="text-4xl font-bold">Create Sheet</h2>
        <p className="text-start mt-2 text-sm text-gray-500">
          Create custom study sheets to organize your practice questions and
          study materials. <br /> Fill out the form below to get started.
        </p>
        <Formik
          initialValues={{
            name: "",
            title: "",
            description: "",
            isPublic: false,
            url1: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Name is required"),
            title: Yup.string()
              .required("Title is required")
              .matches(/^\S*$/, "Title should not contain spaces"),
            url1: Yup.string().required("URL 1 is required"),
          })}
          onSubmit={(
            values: formValues,
            actions: FormikHelpers<formValues>
          ) => {
            handleSubmit(values);
          }}
        >
          {(props) => (
            <form
              className="flex w-[450px] bg-white p-4 rounded-lg flex-col gap-2 mx-auto mt-10"
              onSubmit={props.handleSubmit}
            >
              <div className="mt-2 flex flex-col">
                <label className="text-sm font-[500]" htmlFor="name">
                  Name<span className="text-red-500">*</span>
                </label>
                <Field
                  className="px-2 py-1.5 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  type="text"
                  id="name"
                  name="name"
                />
              </div>

              <div className="mt-2 flex flex-col">
                <label className="text-sm font-[500]" htmlFor="title">
                  Title<span className="text-red-500">*</span>
                </label>
                <Field
                  className="px-2 py-1.5 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  type="text"
                  id="title"
                  name="title"
                />
              </div>

              <div className="mt-2 flex flex-col">
                <label className="text-sm font-[500]" htmlFor="description">
                  Description
                </label>
                <Field
                  className="px-2 py-1.5 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  as="textarea"
                  id="description"
                  name="description"
                />
              </div>

              <div className="mt-2 flex gap-4">
                <label className="text-sm font-[500]" htmlFor="isPublic">
                  Public
                </label>
                <Field
                  className="px-2 py-1.5 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  type="checkbox"
                  id="isPublic"
                  name="isPublic"
                />
              </div>

              <div className="mt-4 flex flex-col">
                <label className="text-sm font-[500]" htmlFor="url1">
                  URL 1 <span className="text-red-500">*</span>
                </label>
                <Field
                  className="px-2 py-1.5 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  type="text"
                  id="url1"
                  name="url1"
                />
              </div>

              {/* <div className="mt-4 flex flex-col">
             <label htmlFor="url2">URL 2</label>
             <Field
               className="px-2 py-1.5 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
               type="text"
               id="url2"
               name="url2"
             />
           </div> */}

              <div className="mt-4">
                <button type="submit">Submit</button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </main>
  );
}
