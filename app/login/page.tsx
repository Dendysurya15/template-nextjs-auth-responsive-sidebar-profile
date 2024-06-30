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
    // <div className="grid grid-cols-3 h-screen">
    //   <div
    //     className="relative hidden sm:block bg-cover bg-center col-span-2 hidden md:block"
    //     style={{ backgroundImage: `url('/loginImage/test.jpg')` }}
    //   >
    //     {/* Additional content can go here */}
    //     <div className="absolute inset-0 bg-sky-950 bg-opacity-90 grid content-start pl-20">
    //       <div className="flex items-center pt-64">
    //         <img
    //           src="/loginImage/CBI-logo.png"
    //           alt="Logo"
    //           className="h-12 mr-2"
    //         />
    //         <h4 className="scroll-m-20 ml-1 text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-semibold tracking-tight">
    //           Monitoring-Traksi
    //         </h4>
    //       </div>
    //       <div className="pt-24 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold text-white">
    //         Web Hasil Pelaporan Kerusakan Unit P2H
    //       </div>
    //       <p className="italic text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg text-muted-foreground text-white pt-2">
    //         Portal Informasi terkait rekap history pelaporan kerusakan Unit P2H
    //       </p>
    //     </div>
    //   </div>
    //   <div className="col-span-3 md:col-span-1  flex items-center justify-center sm:bg-white lg:bg-white bg-sky-950">
    //     {/* content */}
    //     <Card className=" max-w-96">
    //       <CardHeader>
    //         <div className="lg:hidden md:hidden sm:block">
    //           <div className="flex items-center">
    //             <img
    //               src="/loginImage/CBI-logo.png"
    //               alt="Logo"
    //               className="h-8 mr-2"
    //             />
    //             <h4 className="scroll-m-20 text-sky-800 text-md font-semibold tracking-tight">
    //               Monitoring-Traksi
    //             </h4>
    //           </div>
    //         </div>

    //         <CardTitle>
    //           <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
    //             Autentikasi Sistem
    //           </h2>
    //         </CardTitle>
    //         <CardDescription>
    //           <small className="text-sm font-medium leading-none">
    //             {" "}
    //             Silakan masuk portal web dengan username dan password dengan
    //             benar!
    //           </small>
    //         </CardDescription>
    //       </CardHeader>
    //       <CardContent>
    //         <form>
    //           <div className="grid w-full items-center gap-4">
    //             <div className="flex flex-col space-y-1.5">
    //               <Label htmlFor="name">Username</Label>
    //               <Input
    //                 id="name"
    //                 placeholder="Masukkan Username"
    //                 className="focus-visible:ring-0 focus:border-sky-800 focus:border-2"
    //               />
    //             </div>
    //             <div className="flex flex-col space-y-1.5">
    //               <Label htmlFor="name">Password</Label>
    //               <div className="relative w-full">
    //                 <div className="relative w-full">
    //                   <div className="absolute inset-y-0 right-0 flex items-center px-2">
    //                     <button
    //                       type="button"
    //                       className="bg-gray-200 hover:bg-gray-300 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer"
    //                       onClick={handleToggle}
    //                     >
    //                       {isPasswordVisible ? "hide" : "show"}
    //                     </button>
    //                   </div>
    //                   <Input
    //                     type={isPasswordVisible ? "text" : "password"}
    //                     className="focus-visible:ring-0 focus:border-sky-800 focus:border-2"
    //                     placeholder="Masukkan Password"
    //                     id="password"
    //                   />
    //                 </div>
    //               </div>
    //             </div>
    //             <small className="text-sm font-medium flex justify-end leading-none text-red-700">
    //               <p className="">Lupa Password?</p>
    //             </small>
    //           </div>
    //         </form>
    //       </CardContent>
    //       <CardFooter className="flex justify-end">
    //         <Button className="bg-green-900 hover:bg-green-700">Login</Button>
    //       </CardFooter>

    //       <small className="flex justify-center mb-7 text-sm font-medium leading-none">
    //         @2024. Digital Architect SRS
    //       </small>
    //     </Card>
    //   </div>
    //   <div className="col-span-1 hidden md:flex items-center justify-center ">
    //     <h1>asdfjasdkfj</h1>
    //   </div>
    //   <div className="col-span-1 hidden lg:flex items-center justify-center ">
    //     laptop or desktop size
    //   </div>
    // </div>

    <div className="grid grid-cols-3 h-screen">
      <div
        className="relative col-span-2 bg-cover bg-center hidden md:block lg:block "
        style={{ backgroundImage: `url('/loginImage/test.jpg')` }}
      >
        <div className="absolute inset-0 bg-sky-950 bg-opacity-90 grid content-center pl-20">
          <div className="flex items-center ">
            <img
              src="/loginImage/CBI-logo.png"
              alt="Logo"
              className="h-12 mr-2"
            />
            <h4 className="scroll-m-20 ml-1 text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-semibold tracking-tight">
              Monitoring-Traksi
            </h4>
          </div>
          <div className="pt-12 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold text-white">
            Web Hasil Pelaporan Kerusakan Unit P2H
          </div>
          <p className="italic text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg text-muted-foreground text-white pt-2">
            Portal Informasi terkait rekap history pelaporan kerusakan Unit P2H
          </p>
        </div>
      </div>
      <div className="col-span-full md:col-span-1 lg:col-span-1 sm:hidden content-center bg-white">
        <div className="p-14 ">
          <div>
            <div className="flex items-center rs:flex xs:flex hidden">
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

          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0">
            Autentikasi Sistem
          </h2>
          <small className="text-sm font-medium leading-none">
            {" "}
            Silakan masuk portal web dengan username dan password dengan benar!
          </small>
          <form className="mt-8">
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

          <div className="flex justify-end mt-5">
            <Button className="bg-green-900 hover:bg-green-700">Login</Button>
          </div>
          <small className="mt-14 flex justify-center text-sm font-medium leading-none">
            @2024. Digital Architect SRS
          </small>
        </div>
      </div>

      {/* tablet mode only */}
      <div className="col-span-full xs:hidden rs:hidden lg:hidden md:hidden flex items-center justify-center border-2 content-center">
        <Card className="w-1/2">
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

            <CardTitle>
              <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                Autentikasi Sistem
              </h2>
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

          <small className="flex justify-center mb-7 text-sm font-medium leading-none">
            @2024. Digital Architect SRS
          </small>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
