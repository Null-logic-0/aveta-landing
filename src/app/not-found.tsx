"use client";
import Button from "@/components/UI/Button";
import { useRouter } from "next/navigation";

function BlogNotFoundPage() {
  const router = useRouter();

  const handleRoute = () => router.push("/");
  return (
    <main className="flex-col gap-2 p-4 mx-auto w-full justify-center flex items-center h-screen">
      <h1 className="text-center font-bold text-2xl text-white/50 leading-10">
        404 ERROR | Page Not Found !
      </h1>

      <p className="font-medium text-center text-lg text-white/50 leading-10">
        Please go back to safety!
      </p>
      <Button onClick={handleRoute} className="w-[140px]">
        Go Back
      </Button>
    </main>
  );
}

export default BlogNotFoundPage;
