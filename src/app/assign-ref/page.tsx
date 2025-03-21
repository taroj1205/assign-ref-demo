import { AssignRefDemo } from "@/components/assign-ref";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-[100svh] flex flex-col items-center justify-center">
      <AssignRefDemo />
      <Link
        href="/"
        className="text-2xl font-bold text-indigo-600 hover:text-indigo-500 transition-colors"
      >
        Go back
      </Link>
    </main>
  );
}
