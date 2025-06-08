'use client';

import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {DropdownMenu, DropdownMenuContent, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {ChevronDown} from "lucide-react";
import {
    BarChart,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Bar
} from 'recharts';

const activityData = [
    {day: 'Sun', ux: 2, front: 2, copy: 2},
    {day: 'Mon', ux: 3, front: 2, copy: 3},
    {day: 'Tue', ux: 3, front: 2, copy: 2},
    {day: 'Wed', ux: 2, front: 2, copy: 2},
    {day: 'Thu', ux: 2, front: 2, copy: 3},
    {day: 'Fri', ux: 2, front: 2, copy: 3},
    {day: 'Sat', ux: 2, front: 2, copy: 3},
];

const progressData = [
    {name: 'UX Design', value: 43, color: '#2563eb'},
    {name: 'Front-End', value: 32, color: '#e879f9'},
    {name: 'Copywriting', value: 25, color: '#facc15'},
];

function StatisticsSection() {
    return (
        <div className="mt-[25px] space-y-6">
            <div className="grid grid-cols-2 gap-6">
                <Card>
                    <CardContent className="p-5">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold">Learning Activity</h3>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="sm" className="gap-2">Last Week <ChevronDown
                                        size={16}/></Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-32"><p className="px-3 py-2 text-sm">This Week</p>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <ResponsiveContainer width="100%" height={200}>
                            <BarChart data={activityData} stackOffset="sign">
                                <Tooltip/>
                                <Bar dataKey="ux" stackId="a" fill="#2563eb"/>
                                <Bar dataKey="front" stackId="a" fill="#e879f9"/>
                                <Bar dataKey="copy" stackId="a" fill="#facc15"/>
                            </BarChart>
                        </ResponsiveContainer>
                        <div className="flex items-center gap-4 mt-4 text-sm">
                            <span className="flex items-center gap-1"><span
                                className="w-3 h-3 rounded-full bg-[#2563eb]"/> UX Design</span>
                            <span className="flex items-center gap-1"><span
                                className="w-3 h-3 rounded-full bg-[#e879f9]"/> Front-End</span>
                            <span className="flex items-center gap-1"><span
                                className="w-3 h-3 rounded-full bg-[#facc15]"/> Copywriting</span>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-5">
                        <h3 className="text-lg font-semibold mb-4">My Progress</h3>
                        <div className="flex items-center justify-between">
                            <ResponsiveContainer width={160} height={160}>
                                <PieChart>
                                    <Pie
                                        data={progressData}
                                        dataKey="value"
                                        nameKey="name"
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={50}
                                        outerRadius={70}
                                        paddingAngle={3}
                                        isAnimationActive={false}
                                    >
                                        {progressData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color}/>
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="space-y-2">
                                {progressData.map((item, idx) => (
                                    <p key={idx} className="text-sm flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full" style={{backgroundColor: item.color}}/>
                                        {item.name} <span className="ml-auto font-medium">{item.value}%</span>
                                    </p>
                                ))}
                            </div>
                        </div>
                        <p className="text-center mt-4 text-muted-foreground text-sm font-medium">124 Total Tasks</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default StatisticsSection