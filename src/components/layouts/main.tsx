'use client'

import React from "react";
import {usePathname} from "@/i18n/navigation";
import NotAuthorizedLayout from "@/components/layouts/not-authorized";
import BaseLayout from "@/components/layouts/base";
import Languages from "@/components/languages";
import TopLoader from "@/components/top-loader";
import { Toaster } from 'react-hot-toast';

interface LayoutInterface {
    children: React.ReactNode;
}

const Layout = (props: LayoutInterface) => {
    const {children} = props;
    const pathname = usePathname()

    const isLogin = pathname === '/login'

    const LayoutComponent = isLogin ? NotAuthorizedLayout : BaseLayout;
    return (
        <LayoutComponent>
            <Toaster />
            <TopLoader/>
            {children}
            <Languages/>
        </LayoutComponent>
    )

}

export default Layout
