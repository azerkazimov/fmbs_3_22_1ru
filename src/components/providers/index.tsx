"use client";
import NextTopLoader from "nextjs-toploader";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <NextTopLoader />
    </>
  );
}
