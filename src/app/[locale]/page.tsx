import Header from "@/components/header";
import {useTranslations} from "next-intl";
import HeroSection from "@/app/components/hero-section";
import AssignmentsSection from "@/app/components/assignments-section";
import StatisticsSection from "@/app/components/statistics-section";
import RightSection from "@/app/components/right-section";
import {MessageCircleMore, Bell} from "lucide-react";

function Home() {
    const t = useTranslations();
    const buttons = [
        {
            icon: <Bell/>,
            hasBadge: true
        },
        {
            icon: <MessageCircleMore/>,
            hasBadge: true
        }
    ]
    return (
        <div className="flex w-full gap-[28px]">
            <div className={'w-[75%]'}>
                <Header title={t('Dashboard.title')} buttons={buttons}/>
                <HeroSection/>
                <StatisticsSection/>
                <AssignmentsSection/>
            </div>
            <RightSection/>
        </div>
    );
}

export default Home

