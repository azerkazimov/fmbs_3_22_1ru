'use client'

import Section from "@/components/shared/section";
import { useTranslations } from "next-intl";
import Banner from "./banner";
import { Button } from "@/components/shared/actions";
import { useRef } from "react";

export default function Hero() {
  const t = useTranslations("Home");

  const handleMenuScroll = () => {
    const menuElement = document.getElementById("menu");
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const homeRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={homeRef} className="mt-[50px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 p-5 flex flex-col justify-center items-center">
            <div className="w-full">
              <Section head={t("title")} />
              <div className="container">
                <p className="py-3 text-gray-600">{t("description")}</p>
                <p className="py-3 text-gray-600">{t("video.title")}</p>
                <iframe
                  src="https://www.youtube.com/embed/8Q_9h6VKm9c?si=hm2OmM08FRWLzDxU"
                  title="YouTube video player"
                  className="my-3 rounded-[20px] w-full aspect-video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <p className="py-3 text-gray-600">{t("video.description")}</p>

                <div className="flex items-center gap-4 relative mt-4">
                  <Button name="To order" onClick={handleMenuScroll} />
                  <button className="px-4 py-2 border border-[#ff6432] text-[#ff6432] rounded-full hover:bg-gray-100 transition-colors">
                    Pizza menu
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-3">
            <Banner />
          </div>
        </div>
      </div>
    </div>
  );
}
