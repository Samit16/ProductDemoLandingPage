import * as React from "react";

interface LoginButtonProps {
  children: React.ReactNode;
}

export function LoginButton({ children }: LoginButtonProps) {
  return (
    <button className="overflow-hidden px-8 pt-2 pb-4 bg-white bg-opacity-10 rounded-[60px] shadow-[0px_4px_4px_rgba(255,255,255,0.23)] max-md:px-5 text-2xl font-semibold text-white whitespace-nowrap">
      {children}
    </button>
  );
}

