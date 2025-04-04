"use client";
import { Particles } from "@/components/magicui/particles";
import { PinContainer } from "@/components/ui/3d-pin";
import React from "react";
import ScrollableMarquee from "./ScrollableMarquee";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import Image from "next/image";
import ScrollableMarqueeVertical from "./ScrollableMarqueeVertical";

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
            <div className="relative z-10 grid grid-cols-1 md:gap-4 md:grid-cols-2 pt-20">
                <div className="flex items-center justify-center">
                    <div className="space-y-4 md:space-y-10 text-center">
                        <h1 className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-5xl md:text-7xl font-bold leading-none tracking-tighter text-transparent">
                            HeapFlow
                        </h1>
                            <SparklesText text="Join a community of developers to ask questions, share insights, and help others solve coding challenges." className="text-center text-lg md:text-xl font-medium leading-7 text-gray-300"/>
                            <LineShadowText className="text-center text-sm md:text-xl text-gray-400 leading-6 italic" shadowColor="white">
                                “Sharing knowledge is the most fundamental act of friendship. Because it is a way you can give something without losing something.”
                            </LineShadowText>
                        <p className="text-end text-sm md:text-xl leading-none">
                            <strong className="text-gray-300"> — Richard Stallman</strong>
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
            <Image src="/HeapFlow.png" height={100} width={400} alt="HeapFlow Image" className="flex flex-1 w-full rounded mt-8 hover:mt-2 transition-all"/>
        </div>
      </PinContainer>
                    </div>
                </div>
                
            </div>
            <div className="hidden md:flex"><ScrollableMarquee/></div>
            <div className="flex md:hidden justify-center items-center"><ScrollableMarqueeVertical/></div>
        </div>
    );
};

export default HeroSectionHeader;