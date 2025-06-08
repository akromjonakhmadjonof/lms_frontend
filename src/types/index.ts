import React from "react";

export type MenuItemType = {
    icon: React.ReactNode;
    label: string;
    path: string,
    permission: string;
    badge?: number | null
}


export type LanguageItemType = {
    code: string;
    label: string,
    icon: React.ReactNode
}
