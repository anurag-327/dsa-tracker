"use client";
import Sidebar from "@/components/Manage/Sidebar";
import { getToken } from "@/helper/tokenHandler";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  useEffect(() => {
    if (getToken() === null) router.push("/login?callback_url=/manage");
  }, []);
  return (
    <div className="flex min-h-screen bg-white overflow-hidden w-full">
      <Sidebar />
      {children}
    </div>
  );
}
