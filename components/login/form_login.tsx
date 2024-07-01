"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Form_Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleToggle = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };
  return (
    <div>
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
    </div>
  );
};

export default Form_Login;
