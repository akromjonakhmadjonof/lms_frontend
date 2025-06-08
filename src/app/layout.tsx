import type {Metadata} from "next";
import {Montserrat} from "next/font/google";
import "./globals.css";
import React from "react";
import {NextIntlClientProvider} from "next-intl";
import 'moment/locale/ru';
import 'moment/locale/uz-latn';
import 'moment/locale/uz';
import Layout from "@/components/layouts/main";
import ReactQueryProvider from "@/providers/react-query-provider";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin", "latin-ext", "cyrillic", 'cyrillic-ext'],
});


export const metadata: Metadata = {
    title: "Talab365",
    description: "",
    icons: {
        icon: './favicon.ico',
    },
};

interface LayoutInterface {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}

async function RootLayout(props: Readonly<LayoutInterface>) {
    const {
        children,
        params
    } = props
    const {locale} = await params
    return (
        <html lang={locale}>
        <body
            className={montserrat.className}
        >
        <ReactQueryProvider>
            <NextIntlClientProvider>
                <Layout>
                    {children}
                </Layout>
            </NextIntlClientProvider>
        </ReactQueryProvider>
        </body>
        </html>
    );
}

export default RootLayout
