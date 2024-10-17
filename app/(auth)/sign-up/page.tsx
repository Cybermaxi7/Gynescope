"use client";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CiLock } from "react-icons/ci";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

const formSchema = z.object({
    username: z.string().min(1, "Username is required"),
    email: z.string().email("Please enter a valid email"),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
            "Password must contain at least one uppercase letter, one lowercase letter, and one number"
        ),
});

export default function Signup() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false); // Loading state

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
    });

    // Submit handler with Supabase integration
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const { username, email, password } = values;
        setError(null);
        setLoading(true); // Set loading to true when submission starts

        // Supabase sign-up logic with email and password
        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    username, // Store username in the user metadata
                },
            },
        });

        setLoading(false); // Reset loading state after submission

        if (error) {
            setError(error.message);
        } else {
            router.push("/confirm");
        }
    };

    return (
        <div className="min-h-screen relative flex items-center justify-center">
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: `url('/images/loginBg.jpg')`,
                }}
            />

            <Image
                src="/icons/logo.svg"
                alt="genyscope logo"
                width={150}
                height={63}
                className="z-20 absolute top-[44px] left-[41px]"
            />

            <div
                className="absolute inset-0 z-10"
                style={{
                    backgroundColor: "#1C7DB4",
                    opacity: "0.70",
                }}
            />

            <section className="z-10 font-poppins text-white flex flex-col gap-6 px-2 md:px-0">
                <header className="flex flex-col items-center justify-center">
                    <h1 className="text-[35px] md:text-[45px] font-semibold text-center ">
                        Welcome back
                    </h1>
                    <p className="text-[16px] md:text-[20px] font-medium text-center">
                        Kindly enter your sign-up credentials.
                    </p>
                </header>

                <div className="bg-white px-4 md:px-6 py-5 md:py-7 rounded-[15px] w-full sm:[600px] md:w-[700px]">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-8"
                        >
                            {/* <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <div className="form-item">
                                        <FormLabel className="text-[14px] md:text-[17px] font-semibold tracking-[5%] text-[#1C1C1C]">
                                            Username
                                        </FormLabel>
                                        <div className="relative w-full flex flex-col">
                                            <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
                                                <LuUser2 className="text-[#707070] w-4 md:w-5 h-4 md:h-5" />
                                            </span>

                                            <FormControl>
                                                <Input
                                                    type="text"
                                                    placeholder="Enter Username"
                                                    className="pl-10 input-class text-stone-800"
                                                    {...field}
                                                />
                                            </FormControl>

                                            <FormMessage className="form-message mt-2" />
                                        </div>
                                    </div>
                                )}
                            /> */}

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <div className="form-item">
                                        <FormLabel className="text-[14px] md:text-[17px] font-semibold tracking-[5%] text-[#1C1C1C]">
                                            Email
                                        </FormLabel>
                                        <div className="relative w-full flex flex-col">
                                            <FormControl>
                                                <Input
                                                    type="email"
                                                    placeholder="Enter Email"
                                                    className="input-class text-stone-800"
                                                    {...field}
                                                />
                                            </FormControl>

                                            <FormMessage className="form-message mt-2" />
                                        </div>
                                    </div>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <div className="form-item">
                                        <FormLabel className="text-[14px] md:text-[17px] font-semibold tracking-[5%] text-[#1C1C1C]">
                                            Password
                                        </FormLabel>
                                        <div className="relative w-full flex flex-col">
                                            <span className="absolute left-2 top-1/3 transform -translate-y-1/2">
                                                <CiLock className="text-[#707070] w-4 md:w-5 h-4 md:h-5" />
                                            </span>

                                            <span
                                                className="absolute right-3 top-1/3 transform -translate-y-1/2 cursor-pointer"
                                                onClick={handleTogglePassword}
                                            >
                                                {showPassword ? (
                                                    <FaRegEyeSlash className="text-[#707070] w-4 md:w-5 h-4 md:h-5" />
                                                ) : (
                                                    <FaRegEye className="text-[#707070] w-4 md:w-5 h-4 md:h-5" />
                                                )}
                                            </span>

                                            <FormControl>
                                                <Input
                                                    type={
                                                        showPassword
                                                            ? "text"
                                                            : "password"
                                                    }
                                                    placeholder="Enter Password"
                                                    className="pl-10 pr-10 input-class text-stone-800"
                                                    {...field}
                                                />
                                            </FormControl>

                                            <p className="text-[#1C7DB4] font-semibold text-[12px] md:text-[15px] self-end mt-1">
                                                Forgot Password
                                            </p>
                                        </div>
                                        <FormMessage className="text-xs md:text-sm text-red-500 mt-2" />
                                    </div>
                                )}
                            />
                            {error && (
                                <p className="text-red-500 text-sm">{error}</p>
                            )}

                            <Button
                                type="submit"
                                className="block text-center w-full bg-[#F98E30] text-white font-bold text-[14px] md:text-[16px] py-3 rounded-lg"
                                disabled={loading} // Disable button when loading
                            >
                                {loading ? "Loading..." : "Submit"}{" "}
                                {/* Show loading text */}
                            </Button>
                            <p className="text-stone-800">
                                Already a user?
                                <Link
                                    href="/sign-in"
                                    className="text-blue-500 font-semibold"
                                >
                                    {" "}
                                    Sign In
                                </Link>
                            </p>

                            <p className="text-stone-900 text-[12px] md:text-[15px] font-medium text-center">
                                Copyright &copy; 2022 Gynescope Specialist
                                Hospital
                            </p>
                        </form>
                    </Form>
                </div>
            </section>
        </div>
    );
}
