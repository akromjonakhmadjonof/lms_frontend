import {User} from "@/types/user";
import {Role} from "@/types/role";

export type StoreKeyTypeMap = {
  theme: 'light' | 'dark'
  user_me: User
  roles:Role[]
  language: 'en' | 'uz' | 'ru'
}
