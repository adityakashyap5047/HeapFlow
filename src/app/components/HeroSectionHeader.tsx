"use client";
import { Particles } from "@/components/magicui/particles";
// import { ShimmerButton } from "@/components/magicui/shimmer-button";
// import { useAuthStore } from "@/store/Auth";
// import Link from "next/link";
import React from "react";

const HeroSectionHeader = () => {
    // const { session } = useAuthStore();
    

    return (
        <div className="container mx-auto px-4 py-10 min-h-screen">
            <Particles
                className="fixed inset-0 h-full w-full"
                quantity={500}
                ease={100}
                color="#ffffff"
                refresh
            />
            <div className="relative z-10 grid grid-cols-1 gap-4 md:grid-cols-2 pt-36">
                <div className="flex items-center justify-center">
                    <div className="space-y-10 text-center">
                        <h1 className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
                            HeapFlow
                        </h1>
                        <p className="text-center text-xl font-bold leading-none tracking-tighter">
                        Find Answers, Share Knowledge, and Build Community!
                        </p>
                        <p className="text-center text-xl font-bold leading-none tracking-tighter">
                            Ask questions, share knowledge, and collaborate with developers
                            worldwide. Join our community and enhance your coding skills!
                        </p>
                        <p className="text-center text-xl font-bold leading-none tracking-tighter">
                        Join a community of developers to ask questions, share insights, and help others solve coding challenges.
                        </p>
                        <p className="text-center text-xl font-bold leading-none tracking-tighter">
                        Join a community of developers to ask questions, share insights, and help others solve coding challenges.
                        </p>
                        {/* <div className="flex items-center justify-center gap-4">
                            {session ? (
                                <Link href="/questions/ask">
                                    <ShimmerButton className="shadow-2xl">
                                        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                            Ask a question
                                        </span>
                                    </ShimmerButton>
                                </Link>
                            ) : (
                                <>
                                    <Link href="/register">
                                        <ShimmerButton className="shadow-2xl">
                                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                                Sign up
                                            </span>
                                        </ShimmerButton>
                                    </Link>
                                    <Link
                                        href="/login"
                                        className="relative rounded-full border border-neutral-200 px-8 py-3 font-medium text-black dark:border-white/[0.2] dark:text-white"
                                    >
                                        <span>Login</span>
                                        <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                                    </Link>
                                </>
                            )}
                        </div> */}
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="relative max-w-[32rem] overflow-hidden">
                        Some thing amazing
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default HeroSectionHeader;