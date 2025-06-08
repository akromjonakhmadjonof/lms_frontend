'use client';

import {Card, CardContent} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";
import {Badge} from "@/components/ui/badge";
import {Input} from "@/components/ui/input";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Search} from "lucide-react";
import {cn} from "@/lib/utils";

const assignments = [
    {
        title: "Market Analysis Report",
        category: "Business Strategy",
        due: "Oct 20, 2027",
        status: "In Progress",
        progress: 30,
        attachments: 2,
        comments: 24,
    },
    {
        title: "Corporate Finance Case Study",
        category: "Finance",
        due: "Nov 5, 2027",
        status: "Not Started",
        progress: 0,
        attachments: 0,
        comments: 0,
    },
    {
        title: "Leadership Styles Essay",
        category: "Organizational Management",
        due: "Nov 15, 2027",
        status: "In Progress",
        progress: 50,
        attachments: 5,
        comments: 46,
    },
    {
        title: "Business Ethics Presentation",
        category: "Business Ethics",
        due: "Dec 10, 2027",
        status: "In Progress",
        progress: 20,
        attachments: 2,
        comments: 17,
    },
    {
        title: "Entrepreneurship Project",
        category: "Innovation Management",
        due: "Dec 15, 2027",
        status: "In Progress",
        progress: 10,
        attachments: 1,
        comments: 13,
    },
];

function AssignmentsSection() {
    return (
        <div className="mt-[20px] space-y-6 w-full">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Assignments</h2>
                <div className="relative w-72">
                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground"/>
                    <Input placeholder="Search task, course, etc" className="pl-10"/>
                </div>
            </div>
            <Card>
                <CardContent className="p-0">
                    <ScrollArea className="h-[500px]">
                        {assignments.map((task, idx) => (
                            <div key={idx}
                                 className="flex items-center justify-between px-6 py-4 border-b last:border-none">
                                <div className="flex items-start gap-4 w-[40%]">
                                    <div className="bg-muted p-2 rounded-md">
                                        <div className="w-6 h-6 bg-primary/20 rounded"/>
                                    </div>
                                    <div>
                                        <div className="font-medium text-sm">{task.title}</div>
                                        <div className="text-muted-foreground text-xs">{task.category}</div>
                                    </div>
                                </div>
                                <div className="w-[15%] text-xs">
                                    <p className="text-muted-foreground">Due Date</p>
                                    <p>{task.due}</p>
                                </div>
                                <div className="w-[15%] text-xs">
                                    <Badge
                                        variant={task.status === "Not Started" ? "destructive" : "outline"}
                                        className={cn(
                                            "text-xs",
                                            task.status === "In Progress" && "bg-yellow-100 text-yellow-600 border-none"
                                        )}
                                    >
                                        {task.status}
                                    </Badge>
                                    <p className="mt-2 text-sm font-medium">{task.progress}%</p>
                                    <Progress value={task.progress} className="h-1 mt-1"/>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                    <span>📎 {task.attachments}</span>
                                    <span>💬 {task.comments}</span>
                                </div>
                            </div>
                        ))}
                    </ScrollArea>
                </CardContent>
            </Card>
        </div>
    );
}

export default AssignmentsSection
