import LoginForm from "@/app/[locale]/login/components/login-form";
import LoginHero from "@/app/[locale]/login/components/login-hero";

export default function LoginPage() {
    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-white">
            <div className="flex flex-col lg:flex-row w-full h-full lg:h-[100vh]">
                <LoginForm />
                <LoginHero />
            </div>
        </div>
    );
}
