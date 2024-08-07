'use client'

import { QuestionDisplay } from "../components/questionDisplay";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <section className="z-10 items-center justify-center font-mono text-xl lg:flex">
        <h1 className="relative p-4 flex w-full justify-center">
            Generate a question
        </h1>
      </section>
      <section>
        {/*Question generator button and display should go here*/}
        <QuestionDisplay />
      </section>
      <section>
        {
          // Contact form should go here
        }
      </section>
    </main>
  );
}
