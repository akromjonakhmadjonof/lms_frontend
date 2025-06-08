'use client'

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import character from '@/root/public/character.svg'
import {useStore} from "@/hooks/useStore";

function HeroSection() {
    const store = useStore();
    const user_data = store.get('user_me')
    return (
        <div className="space-y-6 mt-[20px]">
            <div className="flex flex-col md:flex-row gap-6">
                <Card
                    className="h-[240px] flex-1 bg-[#0E6BDD] text-primary-foreground flex flex-col md:flex-row justify-between items-center p-6 relative">
                    <div className="max-w-sm flex flex-col justify-around h-full">
                        <div className={''}>
                            <CardTitle className="text-2xl mb-[12px]">Hello, {user_data?.full_name}!</CardTitle>
                            <p className="text-sm mb-4 leading-[25px]">
                                We’ve missed you! Check out what’s new and improved in your dashboard.
                            </p>
                        </div>
                        <Button variant="secondary" className={'w-fit text-[#0E6BDD]'}>Explore More Courses</Button>
                    </div>
                    <Image
                        src={character}
                        alt="Guy working on laptop"
                        width={150}
                        height={150}
                        className="absolute right-0 bottom-0 w-[260px]"
                    />
                </Card>

                <Card className="w-full md:w-64 text-center border-0">
                    <CardHeader>
                        <CardTitle>Performance</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center">
                        <div className="relative w-28 h-28">
                            <div
                                className="absolute inset-0 rounded-full border-[6px] border-[#0E6BDD]  border-r-muted"/>
                            <div
                                className="absolute inset-0 flex items-center justify-center text-xl font-semibold">1.274
                            </div>
                        </div>
                        <p className="text-sm text-[#667383] mt-5">🏅 4th in leaderboard</p>
                    </CardContent>
                </Card>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card className="text-center">
                    <CardContent className="py-6">
                        <div className="text-2xl text-primary mb-1">18 Tasks</div>
                        <p className="text-muted-foreground text-sm">Active Tasks</p>
                    </CardContent>
                </Card>
                <Card className="text-center">
                    <CardContent className="py-6">
                        <div className="text-2xl text-primary mb-1">8 Tasks</div>
                        <p className="text-muted-foreground text-sm">Completed Tasks</p>
                    </CardContent>
                </Card>
                <Card className="text-center">
                    <CardContent className="py-6">
                        <div className="text-2xl text-primary mb-1">132</div>
                        <p className="text-muted-foreground text-sm">Rank Score</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default HeroSection
