import {LanguageItemType} from "@/types";
import Uzbekistan from "@/components/icons/uzbekistan";
import Russia from "@/components/icons/russia";
import UnitedKingdom from "@/components/icons/united-kingdom";

const languages: LanguageItemType[] = [
    {
        code: "uz",
        label: "Ўзбекча",
        icon: <Uzbekistan/>
    },
    {
        code: "uz-latn",
        label: "O'zbekcha",
        icon: <Uzbekistan/>
    },
    {
        code: "ru",
        label: "Русский",
        icon: <Russia/>
    },
    {
        code: "en",
        label: "English",
        icon: <UnitedKingdom/>
    },
];
export default languages