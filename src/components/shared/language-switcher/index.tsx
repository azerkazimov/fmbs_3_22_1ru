"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

export default function LanguageSwitcher() {
  const params = useParams();
  const locale = (params.locale as string) || "en";
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = useCallback((value: string) => {
    const currentPath = pathname.replace(/^\/(en|ru)/, "");
    router.push(`/${value}${currentPath}`);
  }, [pathname, router]);

  return (
    <Select defaultValue={locale || "ru"} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-fit">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="ru">Русский</SelectItem>
      </SelectContent>
    </Select>
  );
}
