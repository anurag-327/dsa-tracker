import SignUp from "@/components/Auth/SignUp";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="w-full mt-6 md:mt-0 font-sans min-h-[100vh] flex justify-center items-center">
        <SignUp />
      </main>
    </Suspense>
  );
}
