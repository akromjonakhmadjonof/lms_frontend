import Image from "next/image";
import heroImage from "@/rootpublic/login-img.png";

const LoginHero = () => {
    return (
        <div className="hidden lg:block w-full lg:w-1/2 relative">
            <Image
                src={heroImage}
                alt="Login Visual"
                fill
                className="object-cover w-full h-full"
                priority
            />
        </div>
    );
};

export default LoginHero;
