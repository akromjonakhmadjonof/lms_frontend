'use client';

import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import {Calendar} from "@/components/ui/calendar";
import {Plus, MoreVertical} from "lucide-react";
import {useStore} from "@/hooks/useStore";

function RightSection() {
    const store = useStore();
    const user_data = store.get('user_me')
    const events = [
        {
            date: "October 15, 2027",
            title: "Business Strategy Development Test",
            category: "Business Strategy",
            time: "9:00 AM - 10:30 AM",
            color: "bg-blue-100 text-blue-800"
        },
        {
            date: "November 1, 2027",
            title: "Financial Analysis Presentation",
            category: "Finance",
            time: "2:00 PM - 4:00 PM",
            color: "bg-pink-100 text-pink-700"
        },
        {
            date: "November 20, 2027",
            title: "Organizational Behavior Quiz",
            category: "Management",
            time: "11:00 AM - 12:30 PM",
            color: "bg-yellow-100 text-yellow-700"
        },
    ];

    const activities = [
        {
            icon: "▶️",
            action: "Watched",
            description: "a lecture video on Business Ethics",
            time: "1:00 PM",
            color: "bg-blue-600"
        },
        {
            icon: "📄",
            action: "Submitted",
            description: "Leadership Styles Essay on Innovation Management",
            time: "10:30 AM",
            color: "bg-pink-400"
        },
        {
            icon: "💬",
            action: "Viewed",
            description: "the Market Analysis Report assignment",
            time: "9:15 AM",
            color: "bg-yellow-400"
        },
        {
            icon: "➡️",
            action: "Logged",
            description: "into the dashboard",
            time: "9:00 AM",
            color: "bg-blue-600"
        },
    ];

    return (
        <div className="space-y-6 w-[25%] bg-white mt-[-28px]  mr-[-28px] p-[28px]">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Avatar>
                        <AvatarImage src="/avatar.jpg" alt="Gareth Christopher"/>
                        <AvatarFallback>GC</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold leading-tight">{user_data?.full_name}</p>
                        <p className="text-sm text-muted-foreground">@christopher</p>
                    </div>
                </div>
                <Button size="icon" variant="ghost">
                    <MoreVertical className="w-5 h-5"/>
                </Button>
            </div>

            <Card>
                <CardContent className="p-4">
                    <Calendar
                        mode="single"
                        selected={new Date(2027, 10, 4)}
                        className="rounded-md border"
                        showOutsideDays
                    />
                </CardContent>
            </Card>

            <div>
                <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-base">My Schedule</h3>
                    <Button size="icon" variant="ghost">
                        <Plus className="w-4 h-4"/>
                    </Button>
                </div>
                <div className="space-y-3">
                    {events.map((e, i) => (
                        <Card key={i} className="bg-muted">
                            <CardContent className="p-3 space-y-1">
                                <div
                                    className={`text-xs px-2 py-1 rounded-md w-max font-medium ${e.color}`}>{e.date}</div>
                                <p className="font-medium text-sm">{e.title}</p>
                                <p className="text-sm text-muted-foreground">{e.category} • {e.time}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-base">Recent Activities</h3>
                    <Button size="icon" variant="ghost">
                        <MoreVertical className="w-5 h-5"/>
                    </Button>
                </div>
                <Card>
                    <CardContent className="p-4 space-y-4">
                        <p className="text-sm font-medium text-muted-foreground">Today</p>
                        <div className="space-y-4">
                            {activities.map((a, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div
                                        className={`w-8 h-8 rounded-full text-white flex items-center justify-center ${a.color}`}>{a.icon}</div>
                                    <div className="text-sm">
                                        <p><span className="font-semibold">{a.action}</span> {a.description}</p>
                                        <p className="text-xs text-muted-foreground mt-1">{a.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default RightSection;
