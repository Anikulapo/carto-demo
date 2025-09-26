"use client";

import SlideShow from "./Content/SlideShow";
import Generate from "./Content/Generate";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function Home() {
  const theme = useSelector((state: RootState) => state.theme.mode);

  return (
    <div className={
      `${theme == "light" ? "bg-white": "bg-[#0a0a0a]"}
      `
    }>
      <SlideShow />
      <Generate />
    </div>
  );
}
