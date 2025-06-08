'use client'

import Header from "@/components/header";
import {useTranslations} from "next-intl";
import RolesTable from "@/app/[locale]/roles/components/roles-table";
import {Plus} from "lucide-react";
import RoleCreate from "@/app/[locale]/roles/components/role-create";
import {useState} from "react";

const RolesGrid = () => {
    const t = useTranslations()
    const buttons = [
        {
            icon: <Plus/>,
            onClick: () => {
                setOpen(true)
            }
        }
    ]
    const [open, setOpen] = useState(false);
    return (
        <div className="w-full">
            <Header title={t('roles.title')} buttons={buttons}/>
            <RoleCreate open={open} onClose={() => setOpen(false)}/>

            <RolesTable/>
        </div>
    )
}

export default RolesGrid
