"use client";

import Button from "@/components/UI/Button";

function ErrorPage() {
  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <main className="flex p-6  justify-center flex-col gap-6 items-center h-screen">
      <h1 className="text-center font-bold text-2xl text-white/50 leading-10">
        Oops... Something Went Wrong
      </h1>
      <Button className="w-[140px]" onClick={handleRefresh}>
        Refresh page
      </Button>
    </main>
  );
}

export default ErrorPage;
