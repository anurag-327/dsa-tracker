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
      </div>
    </main>
  );
}
