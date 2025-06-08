'use client'

import {Languages as LanguagesIcon} from "lucide-react";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu";
import _ from "lodash";
import {useLocale} from "next-intl";
import {useSearchParams} from "next/navigation";
import {usePathname, useRouter} from "@/i18n/navigation";
import languages from "@/constants/languages";
import {LanguageItemType} from "@/types";


export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();
    const searchParams = useSearchParams()

    const handleLanguageChange = (lang: string) => {
        const params = new URLSearchParams(searchParams.toString());
        router.replace(`${pathname}?${params}`, {locale: lang});
        router.refresh()
    };
    return (
        <div className="fixed bottom-6 right-6 z-50">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button
                        className="w-14 h-14 rounded-full bg-[#0E6BDD] text-white flex items-center justify-center">
                        <LanguagesIcon className="w-7 h-7"/>
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="top" align="end" className="w-40">
                    {_.map(languages, (lang: LanguageItemType) => {
                        const {code, label, icon} = lang
                        return (
                            <DropdownMenuItem
                                key={code}
                                onClick={() => handleLanguageChange(code)}
                                className={locale === code ? "font-semibold bg-gray-100" : ""}
                            >
                                {icon}
                                {label}
                            </DropdownMenuItem>
                        )
                    })}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
