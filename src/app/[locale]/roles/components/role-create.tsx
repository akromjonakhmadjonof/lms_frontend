'use client';

import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useRoleSchema, RoleDTO} from "@/hooks/schemas/useRoleSchema";
import useMutation from "@/hooks/useMutation";
import apiRoutes from "@/utils/api-routes";
import {toast} from "react-hot-toast";
import {useTranslations} from "next-intl";

interface Props {
    open: boolean;
    onClose: () => void
}

function RoleCreate(props: Props) {
    const {open, onClose} = props
    const t = useTranslations("roles")
    const schema = useRoleSchema();

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm<RoleDTO>({
        resolver: zodResolver(schema),
    });

    const {mutate, loading} = useMutation<RoleDTO, RoleDTO>({
        url: apiRoutes.roles,
        method: 'post',
        onSuccess: () => {
            toast.success(t('created_successfully'));
            reset();
            onClose();
        },
        onError: () => {
            toast.error(t('creation_failed'));
        },
    });

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{t('add_role')}</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit(data => mutate(data))} className="space-y-4">
                    <div>
                        <Label htmlFor="name">{t('name')}</Label>
                        <Input
                            id="name"
                            disabled={loading}
                            {...register("name")}
                            placeholder="e.g. teacher"
                            className="bg-gray-50"
                        />
                        {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                        <Label htmlFor="label">{t('label')}</Label>
                        <Input
                            id="label"
                            disabled={loading}
                            {...register("label")}
                            placeholder="e.g. Teacher"
                            className="bg-gray-50"
                        />
                        {errors.label && <p className="text-sm text-red-500 mt-1">{errors.label.message}</p>}
                    </div>

                    <div>
                        <Label htmlFor="description">{t('description')}</Label>
                        <Input
                            id="description"
                            disabled={loading}
                            {...register("description")}
                            placeholder="e.g. Can manage courses"
                            className="bg-gray-50"
                        />
                    </div>

                    <div>
                        <Label htmlFor="priority">{t('priority')}</Label>
                        <Input
                            id="priority"
                            type="number"
                            disabled={loading}
                            {...register("priority", {valueAsNumber: true})}
                            placeholder="e.g. 1"
                            className="bg-gray-50"
                        />
                    </div>

                    <div className="flex justify-end pt-2">
                        <Button type="submit" disabled={loading} className="w-full">
                            {t('create')}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}


export default RoleCreate;
