// app/dashboard/page.tsx
"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Bars3Icon } from "@heroicons/react/16/solid";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import SideBarComponent from "@/components/sidebar/side_bar_comp";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getInitials } from "@/utils/getInitialLoginUser";

const Dashboard = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
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
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1279);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
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

  const initialsName = getInitials(userData.nama_lengkap);
  return (
    <div className="relative ">
      <div className="h-screen grid grid-cols-5 bg-gray-50">
        {/* Sidebar */}
        <aside
          className={`col-span-1 border-r-2 border-gray-200 shadow-2xl  md:hidden xs:hidden sm:hidden rs:hidden ${
            isSidebarOpen ? "" : "hidden"
          }`}
        >
          {/* Sidebar content */}
          <div>
            <SideBarComponent />
          </div>
        </aside>

        {/* Content */}
        <main
          className={`col-span-4  md:col-span-full sm:col-span-full xs:col-span-full rs:col-span-full
        ${isSidebarOpen ? "" : "xl:col-span-full lg:col-span-full"}
        `}
          style={{ backgroundColor: "#eff0f3" }}
        >
          {/* Page content */}
          <div className="bg-white">
            <div className="w-full p-2 flex justify-between border-b-2 border-gray-200 shadow-md shadow-gray-200">
              <div>
                <button
                  className="hover:bg-gray-100 text-white font-bold py-2 px-4 rounded"
                  onClick={toggleSidebar}
                >
                  <Bars3Icon className="size-7 " style={{ color: "black" }} />
                </button>
              </div>

              <div className="flex justify-center text-lg font-semibold text-cyan-950 content-center items-center">
                <div className="h-9 w-9  rounded-full flex items-center justify-center">
                  <img
                    src="/loginImage/traksi_logo.png"
                    alt="Logo"
                    className="h-8"
                  />
                </div>
                Monitoring Traksi (v.129)
              </div>
              <div className="flex justify-center content-center items-center">
                <p className="mr-2 text-gray-400">|</p>

                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <MenuButton className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900 rounded hover:bg-gray-100">
                      <p>{userData.nama_lengkap}</p>
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
                              focus
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
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
                              focus
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
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
          </div>
          <div className="bg-white shadow-sm shadow-gray-300 p-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="/"
                    className="font-semibold text-blue-950"
                  >
                    Dashboard
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {/* <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                </BreadcrumbItem> */}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </main>

        {/* Sidebar for small screens */}
        {isSidebarOpen && isSmallScreen && (
          <>
            <div
              className="fixed inset-0 z-50 md:w-2/5 sm:w-2/5 xs:w-2/5 rs:w-3/5 h-full"
              style={{ backgroundColor: "#041723" }}
            >
              <div className="h-full " style={{ backgroundColor: "#041723" }}>
                <SideBarComponent />
              </div>
            </div>

            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={closeSidebar}
            ></div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
