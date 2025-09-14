import * as React from "react";

export function HeroSection() {
  return (
    <main className="self-center mt-12 ml-3 w-full max-w-[1179px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <section className="w-[58%] max-md:ml-0 max-md:w-full">
          <div className="mt-32 text-white max-md:mt-10 max-md:max-w-full">
            <h1 className="text-6xl font-bold max-md:max-w-full max-md:text-4xl">
              Pure Sound. Redefined
            </h1>
            <p className="mt-16 mr-14 text-5xl tracking-[9.6px] max-md:mt-10 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
              Experience audio in its most precise, personal, and powerful form.
            </p>
          </div>
        </section>
        <aside className="ml-5 w-[42%] max-md:ml-0 max-md:w-full">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/8c1ab8cd66ca80b89614b56b29bba15c319ce35f?placeholderIfAbsent=true&apiKey=3a8a5c4006e34a17bcb85e88c500c10b"
            alt="Audio equipment showcase"
            className="object-contain grow w-full aspect-[0.63] max-md:mt-10 max-md:max-w-full"
          />
        </aside>
      </div>
    </main>
  );
}

