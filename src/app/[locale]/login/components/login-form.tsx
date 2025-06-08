'use client'

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginSchema, LoginDTO } from "@/hooks/schemas/useLoginSchema";
import useMutation from "@/hooks/useMutation";
import apiRoutes from "@/utils/api-routes";
import { toast } from "react-hot-toast";
import { useRouter } from "@/i18n/navigation";
import routes from "@/constants/routes";

const LoginForm = () => {
    const t = useTranslations("Login");
    const { push } = useRouter();
    const schema = useLoginSchema();

    const {
        reset,
        register,
        handleSubmit
    } = useForm<LoginDTO>({
        resolver: zodResolver(schema),
    });

    const { mutate, loading } = useMutation<LoginDTO, LoginDTO>({
        url: apiRoutes.login,
        method: 'post',
        onSuccess: () => {
            reset();
            toast.success('Login successfully!');
            push(routes.dashboard);
        },
    });

    return (
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12">
            <div className="w-full max-w-sm">
                <h2 className="text-[28px] font-bold text-gray-900 mb-[10px]">{t('welcome_back')}</h2>
                <p className="text-[14px] text-gray-500 mb-[40px] leading-[22px]">{t('subtitle')}</p>

                <form onSubmit={handleSubmit(data => mutate(data))} className="space-y-[25px]">
                    <div>
                        <label className="block text-[14px] text-gray-700 mb-[6px]">{t('email')}</label>
                        <Input
                            {...register('email')}
                            placeholder="Enter something..."
                            type="email"
                            disabled={loading}
                            className="px-[14px] py-[14px] text-[14px] rounded-[10px] bg-gray-50"
                        />
                    </div>

                    <div>
                        <label className="block text-[14px] text-gray-700 mb-[6px]">{t('password')}</label>
                        <Input
                            {...register('password')}
                            placeholder="Enter something..."
                            type="password"
                            disabled={loading}
                            className="px-[14px] py-[14px] text-[14px] rounded-[10px] bg-gray-50"
                        />
                    </div>

                    <div className="text-right -mt-[10px]">
                        <a href="#" className="text-[12px] text-blue-600 hover:underline">{t('forgot_password')}</a>
                    </div>

                    <Button
                        disabled={loading}
                        type="submit"
                        className="w-full py-[14px] text-[14px] font-medium rounded-[10px]"
                    >
                        {t('sign_in')}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
