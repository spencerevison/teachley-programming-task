import Head from "next/head";

export default function Home() {
  return (
    <div className="px-8">
      <Head>
        <title>Teachley Programming Task</title>
        <meta name="description" content="Teachley Programming Task" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-start justify-start py-16">
        <h1 className="text-5xl leading-tight sm:text-6xl">Comparison Problem</h1>

        <p className="my-8 text-xl sm:text-2xl">
          Mark says 1/4 of his candy bar is smaller than 1/5 of the same candy bar. Is Mark right?
          Yes or No. Draw a picture or use words to explain why you think Mark is right or wrong.
        </p>
      </main>
    </div>
  );
}
