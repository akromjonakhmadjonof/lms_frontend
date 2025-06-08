'use client'

import useDateFormatter from "@/hooks/useDateFormatter";
import {useLocale} from "use-intl";
import React from "react";


type ButtonType = {
    icon: React.ReactNode;
    text?: string;
    onClick?: () => void;
    hasBadge?: boolean;
}

interface HeaderProps {
    title: string,
    buttons?: ButtonType[]
}

const Header = (props: HeaderProps) => {
    const {title, buttons} = props
    const locale = useLocale()
    const dateFormatter = useDateFormatter(locale)

    return (
        <div className="flex items-start justify-between w-full h-auto">
            <div>
                <h1 className="text-2xl font-bold text-black">{title}</h1>
                <p className="text-sm text-gray-500">{dateFormatter.fullDateTime(new Date())}</p>
            </div>

            <div className="flex items-center space-x-3">
                {
                    buttons?.map((button, index) => {
                        const {icon, hasBadge, onClick} = button
                        return (
                            <button
                                key={index}
                                onClick={onClick}
                                className="cursor-pointer relative w-[48px] h-[48px] flex items-center justify-center rounded-xl bg-white shadow-sm">
                                {icon}
                                {
                                    hasBadge && (
                                        <span
                                            className="absolute top-[12px] right-[15px] w-2 h-2 bg-red-500 rounded-full"></span>
                                    )
                                }
                            </button>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Header
