import Head from "next/head";
import dynamic from "next/dynamic";
const ComparisonProblem = dynamic(() => import("../components/ComparisonProblem"), { ssr: false });

/**
 * Home page
 */
export default function Home() {
  return (
    <div className="px-8">
      <Head>
        <title>Teachley Programming Task</title>
        <meta name="description" content="Teachley Programming Task" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen max-w-[800px] flex-col items-start justify-start py-8">
        <ComparisonProblem />
      </main>
    </div>
  );
}
