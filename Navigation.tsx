import * as React from "react";
import { LoginButton } from "./LoginButton";

export function Navigation() {
  return (
    <nav className="flex flex-wrap gap-10 self-start mt-5 max-md:max-w-full">
      <div className="flex flex-wrap flex-auto gap-10 my-auto max-md:max-w-full">
        <a href="#" className="basis-auto text-2xl font-semibold text-white whitespace-nowrap">
          Home
        </a>
        <a href="#" className="basis-auto text-2xl font-semibold text-white whitespace-nowrap">
          Products
        </a>
        <a href="#" className="basis-auto text-2xl font-semibold text-white whitespace-nowrap">
          Gallery
        </a>
      </div>
      <div className="flex flex-auto gap-9">
        <a href="#" className="my-auto basis-auto text-2xl font-semibold text-white whitespace-nowrap">
          Contact
        </a>
        <LoginButton>Login</LoginButton>
      </div>
    </nav>
  );
}

