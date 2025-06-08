'use client'

import React from "react";
import Sidebar from "@/components/sidebar";
import {useFetch} from "@/hooks/useFetch";
import apiRoutes from "@/utils/api-routes";

interface LayoutInterface {
    children: React.ReactNode;
}

const BaseLayout = (props: LayoutInterface) => {
    const {children} = props;
    useFetch({
        url: apiRoutes.user.me,
        storeKey: 'user_me',
        key: []
    })

    return (
        <div className="flex bg-[#F7F8F9]">
            <Sidebar/>
            <main className="p-[28px] pl-[243px] w-full h-full">
                {children}
            </main>
        </div>
    )
}

export default BaseLayout
