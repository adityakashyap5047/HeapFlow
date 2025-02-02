"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/Auth";
import Link from "next/link";

const BottomGradient = () => {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>;
};

export default function Register() {
    const { login, createAccount } = useAuthStore();
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const firstname = formData.get("firstname");
        const lastname = formData.get("lastname");
        const email = formData.get("email");
        const password = formData.get("password");

        if (!firstname || !lastname || !email || !password) {
            setError(() => "Please fill out all fields");
            return;
        }

        setIsLoading(() => true);
        setError(() => "");

        const response = await createAccount(
            `${firstname} ${lastname}`,
            email.toString(),
            password.toString()
        );

        if (response.error) {
            setError(() => response.error!.message);
        } else {
            const loginResponse = await login(email.toString(), password.toString());
            if (loginResponse.error) {
                setError(() => loginResponse.error!.message);
            }
        }

        setIsLoading(() => false);
    };

    return (
        <div className="mx-auto w-full max-w-md border border-solid border-white/30 bg-white p-4 shadow-input dark:bg-black rounded-2xl md:p-8">
            <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
                Welcome to HeapFlow
            </h2>
            <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
                Signup with heapflow if you don&apos;t have an account.
                <br /> If you already have an account,{" "}
                <Link href="/login" className="text-orange-500 hover:underline">
                    login
                </Link>{" "}
                to heapflow
            </p>

            {error && (
                <p className="mt-8 text-center text-sm text-red-500 dark:text-red-400">{error}</p>
            )}
            <form className="my-8" onSubmit={handleSubmit}>
                <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
                    <LabelInputContainer>
                        <Label htmlFor="firstname">First name</Label>
                        <Input className="text-white bg-[#020617] border border-gray-500 focus:border-gray-400 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0" id="firstname" name="firstname" placeholder="Tyler" type="text" />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="lastname">Last name</Label>
                        <Input className="text-white bg-[#020617] border border-gray-500 focus:border-gray-400 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"  id="lastname" name="lastname" placeholder="Durden" type="text" />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                    className="text-white bg-[#020617] border border-gray-500 focus:border-gray-400 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0" 
                        id="email"
                        name="email"
                        placeholder="projectmayhem@fc.com"
                        type="email"
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="password">Password</Label>
                    <Input className="text-white bg-[#020617] border border-gray-500 focus:border-gray-400 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"  id="password" name="password" placeholder="••••••••" type="password" />
                </LabelInputContainer>

                <button
                    className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                    disabled={isLoading}
                >
                    Sign up &rarr;
                    <BottomGradient />
                </button>

                <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

            </form>
        </div>
    );
}