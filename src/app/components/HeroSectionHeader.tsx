"use client";
import { Particles } from "@/components/magicui/particles";
import { PinContainer } from "@/components/ui/3d-pin";
import React from "react";
import ScrollableMarquee from "./ScrollableMarquee";

const HeroSectionHeader = () => {    

    return (
        <div className="container mx-auto px-4 py-10 min-h-screen">
            <Particles
                className="fixed inset-0 h-full w-full"
                quantity={500}
                ease={100}
                color="#ffffff"
                refresh
            />
            <div className="relative z-10 grid grid-cols-1 gap-4 md:grid-cols-2 pt-28">
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
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="relative max-w-[32rem] overflow-hidden">
                        <PinContainer
        title="Ask Question"
        href="/questions/ask"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            HeapFlow
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
                Find Answers, Share Knowledge, and Build Community!
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
                    </div>
                </div>
                
            </div>
            <ScrollableMarquee/>
        </div>
    );
};

export default HeroSectionHeader;