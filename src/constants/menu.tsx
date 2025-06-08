import React from "react";
import {Home, Book, CalendarDays, Mail, History, MonitorPlay, Bell, HelpCircle, User, ShieldCheck} from "lucide-react";
import {MenuItemType} from "@/types";


const menus: MenuItemType[] = [
    {
        icon: <Home size={20}/>,
        label: "Dashboard.title",
        path: "/",
        permission: "dashboard_menu"
    },
    {
        icon: <ShieldCheck size={20}/>,
        label: "roles.title",
        path: "/roles",
        permission: "roles_menu"
    },
    {
        icon: <User size={20}/>,
        label: "Account.title",
        path: "/account",
        permission: "roles_menu"
    },
    {
        icon: <Book size={20}/>,
        label: "Courses.title",
        path: "/courses",
        permission: "courses_menu"
    },
    {
        icon: <CalendarDays size={20}/>,
        label: "Calendar.title",
        path: "/calendar",
        permission: "calendar_menu"
    },
    {
        icon: <Mail size={20}/>,
        label: "Inbox.title",
        path: "/inbox",
        badge: 2,
        permission: "inbox_menu"
    },
    {
        icon: <History size={20}/>,
        label: "History.title",
        path: "/history",
        permission: "history_menu"
    },
    {
        icon: <MonitorPlay size={20}/>,
        label: "Media.title",
        path: "/media",
        permission: "media_menu"
    },
    {
        icon: <Bell size={20}/>,
        label: "Notices.title",
        path: "/notices",
        permission: "notices_menu"
    },
    {
        icon: <HelpCircle size={20}/>,
        label: "Help.title",
        path: "/help",
        badge: 6,
        permission: "help_menu"
    },
];


export default menus
