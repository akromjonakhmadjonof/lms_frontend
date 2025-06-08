import Header from "@/components/header";
import {useTranslations} from "next-intl";
import {MoreVertical} from "lucide-react";

function Courses() {
    const t = useTranslations()
    const buttons = [
        {
            icon: <MoreVertical/>
        }
    ]
    return (
        <div className="flex w-full gap-[28px]">
            <div className={'w-[75%]'}>
                <Header title={t('Courses.title')} buttons={buttons}/>
            </div>
        </div>
    );
}


export default Courses;
