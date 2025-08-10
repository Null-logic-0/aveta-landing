import Spinner from "@/components/UI/Spinner/Spinner";

function loading() {
  return (
    <main className="flex justify-center h-screen items-center">
      <Spinner />
    </main>
  );
}

export default loading;
