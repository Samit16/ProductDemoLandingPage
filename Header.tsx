import * as React from "react";
import { Navigation } from "./Navigation";

export function Header() {
  return (
    <header className="flex flex-wrap gap-5 justify-between w-full text-2xl font-semibold text-white whitespace-nowrap max-md:max-w-full">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/55cf923e13cb63def7af1107a3ade19fc21d21e9?placeholderIfAbsent=true&apiKey=3a8a5c4006e34a17bcb85e88c500c10b"
        alt="Company Logo"
        className="object-contain shrink-0 aspect-square w-[68px]"
      />
      <Navigation />
    </header>
  );
}

