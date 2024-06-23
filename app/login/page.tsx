"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const LoginPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleToggle = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen">
      <div
        className="relative hidden sm:block bg-cover bg-center"
        style={{ backgroundImage: `url('/loginImage/test.jpg')` }}
      >
        {/* Additional content can go here */}
        <div className="absolute inset-0  bg-sky-950 bg-opacity-95 grid content-start pl-20">
          <div className="flex items-center pt-28">
            <img
              src="/loginImage/CBI-logo.png"
              alt="Logo"
              className="h-10 mr-2"
            />{" "}
            {/* Adjust height as needed */}
            <h4 className="scroll-m-20 text-white text-2xl font-semibold tracking-tight">
              Monitoring-Traksi
            </h4>
          </div>
          <div className="pt-16 text-2xl font-bold text-white">
            {" "}
            Web Hasil Pelaporan Kerusakan Unit P2H
          </div>

          <p className="italic text-sm text-muted-foreground text-white pt-2">
            Portal Informasi terkait rekap history pelaporan kerusakan Unit P2H
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center sm:bg-white lg:bg-white bg-sky-950">
        {/* content */}
        <Card className="w-[400px]">
          <CardHeader>
            <div className="lg:hidden md:hidden sm:block">
              <div className="flex items-center">
                <img
                  src="/loginImage/CBI-logo.png"
                  alt="Logo"
                  className="h-8 mr-2"
                />
                <h4 className="scroll-m-20 text-sky-800 text-md font-semibold tracking-tight">
                  Monitoring-Traksi
                </h4>
              </div>
            </div>

            <CardTitle>Autentikasi Sistem</CardTitle>
            <CardDescription>
              Silakan masuk portal web dengan username dan password dengan
              benar!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Username</Label>
                  <Input
                    id="name"
                    placeholder="Masukkan Username"
                    className="focus-visible:ring-0 focus:border-sky-800 focus:border-2"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Password</Label>
                  <div className="relative w-full">
                    <div className="relative w-full">
                      <div className="absolute inset-y-0 right-0 flex items-center px-2">
                        <button
                          type="button"
                          className="bg-gray-200 hover:bg-gray-300 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer"
                          onClick={handleToggle}
                        >
                          {isPasswordVisible ? "hide" : "show"}
                        </button>
                      </div>
                      <Input
                        type={isPasswordVisible ? "text" : "password"}
                        className="focus-visible:ring-0 focus:border-sky-800 focus:border-2"
                        placeholder="Masukkan Password"
                        id="password"
                      />
                    </div>
                  </div>
                </div>
                <small className="text-sm font-medium flex justify-end leading-none text-red-700">
                  <p className="">Lupa Password?</p>
                </small>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button className="bg-green-900 hover:bg-green-700">Login</Button>
          </CardFooter>
          <p className="flex justify-center mb-5 mt-2 text-sm text-muted-foreground text-black">
            @2024. Digital Architect SRS
          </p>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
