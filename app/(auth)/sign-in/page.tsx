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
import { LuUser2 } from "react-icons/lu";
import { useRouter } from "next/navigation";

const formSchema = z.object({
    username: z.string().min(1, "Username is required"),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
            "Password must contain at least one uppercase letter, one lowercase letter, and one number"
        ),
});
export default function Login() {
    // const [user, setUser] = useState(null);
    const router = useRouter();

    const [showPassword, setShowPassword] = useState(false);
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        router.push("/dashboard");

        console.log(values);
    }

    return (
        <div className="min-h-screen relative flex items-center justify-center">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: `url('/images/loginBg.jpg')`, // Replace with your actual image path
                }}
            />

            <Image
                src="/icons/logo.svg"
                alt="genyscope logo"
                width={150}
                height={63}
                className="z-20 absolute top-[44px] left-[41px]"
            />

            {/* Overlay */}
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
                        Kindly enter your login credentials.
                    </p>
                </header>

                <div className="bg-white px-4 md:px-6 py-5 md:py-7 rounded-[15px]">
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
                                        <div className="flex w-full flex-col">
                                            <FormControl>
                                                <Input
                                                    placeholder="Enter Username"
                                                    className="input-class"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="form-message mt-2" />
                                        </div>
                                    </div>
                                )}
                            />  */}
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <div className="form-item">
                                        <FormLabel className="text-[14px] md:text-[17px] font-semibold tracking-[5%] text-[#1C1C1C]">
                                            Username
                                        </FormLabel>
                                        <div className="relative w-full flex flex-col">
                                            {/* Left Icon for Username */}
                                            <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
                                                <LuUser2 className="text-[#707070] w-4 md:w-5 h-4 md:h-5" />
                                            </span>

                                            <FormControl>
                                                <Input
                                                    type="text"
                                                    placeholder="Enter Username"
                                                    className="pl-10 input-class text-stone-800" // Padding for left icon
                                                    {...field}
                                                />
                                            </FormControl>

                                            <FormMessage className="form-message mt-2" />
                                        </div>
                                    </div>
                                )}
                            />

                            {/* <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <div className="form-item">
                                        <FormLabel className="text-[14px] md:text-[17px] font-semibold tracking-[5%] text-[#1C1C1C]">
                                            Password
                                        </FormLabel>
                                        <div className="flex w-full flex-col">
                                            <FormControl>
                                                <Input
                                                    placeholder="Enter Password"
                                                    className="input-class"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <p className="text-[#1C7DB4] font-semibold text-[12px] md:text-15px] self-end mt-1">
                                                Forgot Password
                                            </p>
                                            <FormMessage className="form-message mt-2" />
                                        </div>
                                    </div>
                                )}
                            /> */}
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <div className="form-item">
                                        <FormLabel className="text-[14px] md:text-[17px] font-semibold tracking-[5%] text-[#1C1C1C]">
                                            Password
                                        </FormLabel>
                                        <div className="relative w-full flex flex-col">
                                            {/* Left Icon for Password */}
                                            <span className="absolute left-2 top-1/3 transform -translate-y-1/2">
                                                <CiLock className="text-[#707070] w-4 md:w-5 h-4 md:h-5" />
                                            </span>

                                            {/* Right Icon for Show/Hide Password */}
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
                                                    className="pl-10 pr-10 input-class text-stone-800" // Padding for icons
                                                    {...field}
                                                />
                                            </FormControl>

                                            <p className="text-[#1C7DB4] font-semibold text-[12px] md:text-[15px] self-end mt-1">
                                                Forgot Password
                                            </p>

                                            <FormMessage className="text-xs md:text-sm text-red-500 mt-2" />
                                        </div>
                                    </div>
                                )}
                            />

                            <Button
                                type="submit"
                                className="block text-center w-full bg-[#F98E30] text-white font-bold text-[14px] md:text-[16px] py-3 rounded-lg"
                            >
                                Submit
                            </Button>

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
