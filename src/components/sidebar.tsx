'use client'

import Image from "next/image";
import logo from "@/root/public/logo.svg";
import menus from "@/constants/menu";
import Link from "next/link";
import _ from "lodash";
import {usePathname} from "@/i18n/navigation";
import {useTranslations} from "next-intl";
import {MenuItemType} from "@/types";

export default function Sidebar() {
    const pathname = usePathname()
    const t = useTranslations();

    return (
        <div
            className="min-w-[215px] max-w-[215px] h-screen fixed top-0 left-0 bg-white pl-4 py-7 pr-0 pt-10 flex flex-col gap-[10px]">
            <div className="mb-6 pl-[18px]">
                <Image src={logo} alt={'logo'} className="w-10 h-10"/>
            </div>
            {_.map(menus, (menu: MenuItemType, index: number) => {
                const {icon, label, path, badge} = menu
                return (
                    <Link key={index} href={path}
                          className={`flex items-center  pl-[18px] rounded-tl-md rounded-bl-md w-full h-[44px]  min-h-[44px] gap-[10px] ${path === pathname ? ' bg-[#F7F8F9] ' : ''}`}>
                        <div className="relative">
                            {icon}
                            {badge && (
                                <span
                                    className="absolute -top-2 -right-2 bg-[#FB3B3B] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {badge}
                    </span>
                            )}
                        </div>
                        <span className="hidden md:inline text-sm">{t(label)}</span>
                    </Link>
                )
            })}
        </div>
    );
}
