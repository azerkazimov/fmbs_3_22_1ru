import { useTranslations } from "next-intl";
import Link from "next/link";

export default function About() {
  const t = useTranslations("about");

  return (
    <div className="container flex flex-col gap-3 min-h-screen w-full justify-center items-center">
      <div className="flex flex-col gap-3 w-full justify-center items-center">
        <h1 className="text-4xl">{t("title")}</h1>
        <p>{t("description")}</p>
      </div>
      <div className="flex gap-2 ">
        <button className="bg-white text-black p-2 border rounded-xl">
          <Link href="/">{t("buttons.home")}</Link>
        </button>
        <button className="bg-white text-black p-2 border rounded-xl">
          <Link href="/contacs">{t("buttons.contact")}</Link>
        </button>
      </div>
    </div>
  );
}
