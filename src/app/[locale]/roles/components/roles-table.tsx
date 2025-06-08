'use client';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {useFetch} from "@/hooks/useFetch";
import {useStore} from "@/hooks/useStore";
import apiRoutes from "@/utils/api-routes";
import {Pencil, Trash2} from "lucide-react";
import {useTranslations} from "next-intl";

function RolesTable() {
    useFetch({
        url: apiRoutes.roles,
        storeKey: "roles",
        key: ["roles"],
    });

    const t = useTranslations('roles');
    const tt = useTranslations('table');
    const store = useStore();
    const roles = store.get("roles") || [];


    return (
        <div className={"bg-white rounded-[10px] p-[20px] mt-[20px]"}>
            <div className="rounded-lg border shadow-sm">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead
                                className="cursor-pointer"
                            >
                                {tt('header.name')}
                            </TableHead>
                            <TableHead>{tt('header.label')}</TableHead>
                            <TableHead>{tt('header.description')}</TableHead>
                            <TableHead>{tt('header.system')}</TableHead>
                            <TableHead className="text-right">{tt('header.actions')}</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {roles.map((role) => (
                            <TableRow key={role.uuid}>
                                <TableCell className="font-medium">{t(role.name)}</TableCell>
                                <TableCell>{role.label}</TableCell>
                                <TableCell>{t(role.description) || "-"}</TableCell>
                                <TableCell>
                                    <Badge variant={role.is_system ? "default" : "outline"}>
                                        {role.is_system ? "System" : "Custom"}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    <div className="flex justify-end gap-2">
                                        <Button size="icon" variant="ghost">
                                            <Pencil className="w-4 h-4"/>
                                        </Button>
                                        <Button size="icon" variant="ghost">
                                            <Trash2 className="w-4 h-4"/>
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

export default RolesTable;
