import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: "A summary of my projects.",
};
export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <p className="prose prose-neutral dark:prose-invert">On building ....</p>
    </section>
  );
}
