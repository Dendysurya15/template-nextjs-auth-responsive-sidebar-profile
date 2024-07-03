"use client";
import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Form_Login from "../../components/login/form_login";

const LoginPageComponent = () => {
  const router = useRouter();
  useEffect(() => {
    document.title = "Login - Monitoring Traksi";
    // Check if user session exists
    const sessionUser = sessionStorage.getItem("user");
    if (sessionUser) {
      router.push("/dashboard"); // Redirect to dashboard if session exists
    }
  });

  return (
    <div className="grid grid-cols-3 h-screen">
      <div
        className="relative col-span-2 bg-cover bg-center hidden md:block lg:block xl:block"
        style={{ backgroundImage: `url('/loginImage/test.jpg')` }}
      >
        <div className="absolute inset-0 bg-sky-950 bg-opacity-90 grid content-center pl-20">
          <div className="flex items-center">
            <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center">
              <img
                src="/loginImage/traksi_logo.png"
                alt="Logo"
                className="h-12"
              />
            </div>
            <p className="scroll-m-20 ml-3 text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-semibold tracking-tight">
              Monitoring-Traksi
            </p>
          </div>
          <div className="pt-12 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold text-white">
            Web Hasil Pelaporan Kerusakan Unit P2H
          </div>
          <p className="italic text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg text-muted-foreground text-white pt-2">
            Portal Informasi terkait rekap history pelaporan kerusakan Unit P2H
          </p>
        </div>
      </div>
      {/* form */}
      <div className="col-span-full md:col-span-1 lg:col-span-1 xl:col-span-1 sm:hidden flex justify-center items-center bg-white">
        <div className="p-14 ">
          <div>
            <div className="flex items-center rs:flex xs:flex hidden">
              <div className="h-11 w-11 bg-gray-100 rounded-full flex items-center justify-center">
                <img
                  src="/loginImage/traksi_logo.png"
                  alt="Logo"
                  className="h-10"
                />
              </div>
              <p className="scroll-m-20 ml-2 text-sky-800 text-md font-semibold tracking-tight">
                Monitoring-Traksi
              </p>
            </div>
          </div>

          <p className="scroll-m-20 text-2xl xl:text-4xl font-semibold tracking-tight first:mt-0">
            Autentikasi Sistem
          </p>
          <small className="text-sm xl:text-md font-medium leading-none">
            {" "}
            Silakan masuk portal web dengan username dan password dengan benar!
          </small>
          <div className="mt-5">
            <Form_Login />
          </div>
          <small className="mt-14 flex justify-center text-sm xl:text-md font-medium leading-none">
            @2024. Digital Architect SRS
          </small>
        </div>
      </div>

      {/* tablet mode only */}
      <div className="col-span-full xs:hidden rs:hidden lg:hidden md:hidden xl:hidden flex items-center justify-center border-2 content-center">
        <Card className="w-1/2">
          <CardHeader>
            <div className="lg:hidden md:hidden sm:block">
              <div className="flex items-center">
                <div className="h-11 w-11 bg-gray-100 rounded-full flex items-center justify-center">
                  <img
                    src="/loginImage/traksi_logo.png"
                    alt="Logo"
                    className="h-10"
                  />
                </div>
                <p className="scroll-m-20 ml-2 text-sky-800 text-md font-semibold tracking-tight">
                  Monitoring-Traksi
                </p>
              </div>
            </div>

            <CardTitle>
              <p className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                Autentikasi Sistem
              </p>
            </CardTitle>
            <CardDescription>
              <small className="text-sm font-medium leading-none">
                {" "}
                Silakan masuk portal web dengan username dan password dengan
                benar!
              </small>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mt-5">
              <Form_Login />
            </div>
          </CardContent>

          <small className="flex justify-center mb-7 text-sm font-medium leading-none">
            @2024. Digital Architect SRS
          </small>
        </Card>
      </div>
    </div>
  );
};

export default LoginPageComponent;
