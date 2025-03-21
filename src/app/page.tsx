import { AssignRefDemo } from "@/components/normal";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-[100svh] flex flex-col items-center justify-center">
      <AssignRefDemo />
      <Link
        href="/assign-ref"
        className=" text-2xl font-bold text-indigo-600 hover:text-indigo-500 transition-colors"
      >
        Better version using assignRef
      </Link>
    </main>
  );
}
