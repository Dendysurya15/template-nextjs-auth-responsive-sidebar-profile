"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Form_Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleToggle = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      const response = await fetch(
        "https://mobilepro.srs-ssms.com/config/apk-login-traksi.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            email: username,
            password: password,
          }),
        }
      );

      const data = await response.json();

      if (data.success === 1) {
        sessionStorage.setItem("user", JSON.stringify(data));
        setMessage(data.message);

        router.push("/dashboard");
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {error && (
          <Alert className="border-2 border-red-400">
            <AlertTitle className="text-red-500">
              Terjadi Kesalahan !
            </AlertTitle>
            <AlertDescription className="text-red-500">
              {error}
            </AlertDescription>
          </Alert>
        )}
        <div className="grid w-full items-center gap-4 mt-5">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Username</Label>
            <Input
              id="name"
              placeholder="Masukkan Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="focus-visible:ring-0 focus:border-sky-800 focus:border-2"
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="password">Password</Label>
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          <small className="text-sm font-medium flex justify-end leading-none text-red-700">
            <p className="">Lupa Password?</p>
          </small>

          <div className="flex justify-end mt-5">
            <Button type="submit" className="bg-green-900 hover:bg-green-700">
              Login
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form_Login;
