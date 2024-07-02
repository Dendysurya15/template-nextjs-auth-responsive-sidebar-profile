// app/dashboard/page.tsx
"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Bars3Icon } from "@heroicons/react/16/solid";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Dashboard = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  useEffect(() => {
    document.title = "Dashboard - Monitoring Traksi";
    const SessionUser = sessionStorage.getItem("user");
    if (!SessionUser) {
      // Redirect to login if user data not found
      router.push("/login");
      return;
    }

    const parsedUserData = JSON.parse(SessionUser);
    setUserData(parsedUserData);
  }, []);

  const handleLogout = () => {
    // Clear session data
    sessionStorage.removeItem("user");
    // Redirect to login page
    router.push("/login");
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-screen grid grid-cols-5">
      <div
        className={`col-span-1 ${
          sidebarOpen
            ? "md:hidden sm:hidden xs:hidden rs:hidden"
            : "hidden md:block sm:block xs:block rs:block"
        }`}
        style={{ backgroundColor: "#041723" }}
      >
        {/* Sidebar content */}
        <div className="flex items-center justify-center m-1 rounded p-2 bg-gray-800">
          <div className="h-9 w-9 bg-gray-100 rounded-full flex items-center justify-center">
            <img src="/loginImage/traksi_logo.png" alt="Logo" className="h-8" />
          </div>
          <p className=" ml-2 text-white text-xl xl:text-2xl font-semibold">
            Monitoring Traksi
          </p>
        </div>

        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>

      <div
        className={` ${
          sidebarOpen
            ? "xl:col-span-4 lg:col-span-4 sm:col-span-5 md:col-span-5"
            : "xl:col-span-5 lg:col-span-5 md:col-span-4 sm:col-span-4"
        }`}
      >
        {/* main content */}
        <div className="w-full p-2 flex justify-between shadow-md shadow-gray-200">
          <div>
            <button
              className="hover:bg-gray-100 text-white font-bold py-2 px-4 rounded"
              onClick={toggleSidebar}
            >
              <Bars3Icon className="size-7 " style={{ color: "#041723" }} />
            </button>
          </div>

          <div className="flex justify-center content-center items-center">
            <p className="mr-2 text-gray-400">|</p>

            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900 rounded hover:bg-gray-100">
                  {userData.nama_lengkap}
                  <ChevronDownIcon
                    className="-mr-1 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    {({ focus }) => (
                      <a
                        href="#"
                        className={classNames(
                          focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Setting
                      </a>
                    )}
                  </MenuItem>
                </div>

                <div className="py-1">
                  <MenuItem>
                    {({ focus }) => (
                      <a
                        onClick={handleLogout}
                        className={classNames(
                          focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                          "block px-4 py-2 text-sm text-red-600"
                        )}
                      >
                        Logout
                      </a>
                    )}
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          </div>
        </div>
        {/* Main content */}

        <div className="p-5">
          <h1>Dashboard</h1>

          <p>This is the main content area.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
