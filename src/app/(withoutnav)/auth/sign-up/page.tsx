"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";


import { FaGithub, FaGoogle } from "react-icons/fa";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useRouter } from "next/navigation";
import { formRegisterSchema, TFormRegisterValues } from "../schema";

export default function SignUpForm() {
const router = useRouter()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<TFormRegisterValues>({
    resolver: zodResolver(formRegisterSchema),
   
  });

  const onSubmit = async (data: TFormRegisterValues) => {
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.error) {
          setError("email", { message: result.error });
        }
      }

      router.push("/auth/sign-in");
    } catch (error) {
      setError("email", { message: String(error) });
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex items-center justify-center">
        <Card className="w-[450px]">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Sign up</CardTitle>
            <CardDescription>
              Choose your preferred sign-up method
              <div className="flex flex-col items-center space-y-4 mt-5">
                <div className="flex w-full space-x-4">
                  <Button className="flex items-center justify-center w-1/2 border bg-transparent text-white font-semibold hover:text-black">
                    <FaGoogle /> Google
                  </Button>
                  <Button className="flex items-center justify-center w-1/2 border bg-transparent text-white font-semibold hover:text-black">
                    <FaGithub /> Github
                  </Button>
                </div>
                <div className="flex items-center w-full">
                  <hr className="flex-1 border-gray-600" />
                  <span className="mx-4 text-xs text-gray-400">
                    OR CONTINUE WITH
                  </span>
                  <hr className="flex-1 border-gray-600" />
                </div>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="fullname">Name</Label>
                  <Input
                    id="fullname"
                    {...register("fullName")}
                    placeholder="John Doe"
                  />
                  {errors.fullName && (
                    <span className="text-red-500 text-sm">
                      {errors.fullName.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    {...register("email")}
                    placeholder="example@gmail.com"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    {...register("password")}
                    placeholder="**********"
                  />
                  {errors.password && (
                    <span className="text-red-500 text-sm">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    {...register("confirmPassword")}
                    placeholder="**********"
                  />
                  {errors.confirmPassword && (
                    <span className="text-red-500 text-sm">
                      {errors.confirmPassword.message}
                    </span>
                  )}
                </div>
              </div>
              <CardFooter className="flex flex-col mt-8">
                <Button type="submit" className="w-full mb-5">
                  Continue
                </Button>
                <div className="w-full flex justify-between text-sm">
                  <div className="flex space-x-2">
                    <span>Already have an account?</span>
                    <Link className="font-semibold" href="/auth/sign-in">
                      Sign in
                    </Link>
                  </div>
                </div>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
      <div className="w-1/2 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://cdn.prod.website-files.com/65966fbf7a68c97f9a4dbeb9/66fbdf026039538352f6f849_1680465114443.jpeg')`,
          }}
        ></div>
        <div
          className="absolute inset-0 "
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0))`,
          }}
        ></div>
      </div>
    </div>
  );
}
