import React, { useState, useEffect } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { usePathname, useRouter } from "next/navigation";
import { ChevronRightIcon } from "@heroicons/react/16/solid";

const SideBarComponent = ({ setActiveLinkProp }) => {
  const [userData, setUserData] = useState(null);
  const [dropdownStates, setDropdownStates] = useState({});
  const [activeLink, setActiveLink] = useState("Dashboard");
  const pathName = usePathname();
  const router = useRouter();
  const modifiedPathName = pathName.replace(/^\//, "").toLowerCase();

  useEffect(() => {
    document.title = activeLink + " - Monitoring Traksi";
  }, [modifiedPathName]);

  useEffect(() => {
    const SessionUser = sessionStorage.getItem("user");
    if (!SessionUser) {
      // Redirect to login if user data not found
      router.push("/login");
      return;
    }
    const parsedUserData = JSON.parse(SessionUser);
    setUserData(parsedUserData);
  }, [router]);

  useEffect(() => {
    setActiveLinkProp(activeLink); // Pass activeLink state to parent component
  }, [activeLink, setActiveLinkProp]);

  const toggleDropdown = (item) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  const handleRedirect = (url, name) => {
    setActiveLink(name);
    router.push(url);
  };

  const createCustomListDropdown = (name, icon = null, ...subItems) => {
    const hasSubItems = subItems.length > 0;
    let lowName = name.toLowerCase();
    let isActive = false;
    let subHasActive = false;
    let subItemNameActive = "";

    if (lowName == modifiedPathName) {
      isActive = true;
    } else {
      subHasActive = subItems.includes(modifiedPathName);
      if (subHasActive) {
        subItemNameActive = modifiedPathName;
        isActive = true;
      }
    }

    // // const isActive = activeLink === name || subItems.includes(activeLink);

    return (
      <li
        key={name}
        className={`rounded m-2 border-2 ${!hasSubItems ? "" : ""} ${
          isActive && !hasSubItems ? "bg-[#eeeeee] text-blue-950" : ""
        }`}
      >
        {!hasSubItems ? (
          <button
            className={`w-full text-left flex items-center
             ${isActive ? "" : "hover:bg-gray-200"}
              `}
            onClick={() => handleRedirect("/" + name.toLowerCase(), name)}
          >
            <span className="flex items-center font-medium p-3 ">
              {icon && <span className="mr-2">{icon}</span>}
              {name}
            </span>
          </button>
        ) : (
          <div>
            <button
              className={`w-full text-left flex items-center font-medium p-3
              ${subHasActive ? "bg-[#eeeeee] text-blue-950  rounded" : ""}
              `}
              onClick={() => toggleDropdown(name)}
            >
              <span className="flex items-center">
                {icon && <span className="mr-2">{icon}</span>}
                {name}
              </span>
              <ChevronRightIcon
                className={`ml-auto w-4 h-4 transition-transform transform ${
                  dropdownStates[name] ? "rotate-90" : ""
                }`}
              />
            </button>
            {hasSubItems && dropdownStates[name] && (
              <ul className="pb-1">
                {subItems.map((subItem) => (
                  <li
                    key={subItem}
                    className={`pl-8 m-1 p-1 hover:bg-gray-400 rounded ${
                      subItemNameActive === subItem ? "bg-gray-300" : ""
                    }`}
                    onClick={() =>
                      handleRedirect("/" + subItem.toLowerCase(), subItem)
                    }
                  >
                    {subItem}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </li>
    );
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-center m-2 rounded p-2 ">
        <div className="rounded-full flex flex-col items-center justify-center">
          <Avatar className="w-20 h-20">
            <AvatarFallback>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.4"
                stroke="currentColor"
                class="size-12"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </AvatarFallback>
          </Avatar>

          <div className="text-lg">
            <p className="font-semibold mt-3">{userData.nama_lengkap}</p>
          </div>
          <div className="italic text-sm">
            <h1>
              {userData.departemen} {userData.jabatan}
            </h1>
          </div>
        </div>
      </div>

      <ul className="">
        {createCustomListDropdown(
          "Dashboard",
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        )}
        {createCustomListDropdown(
          "History",
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
            />
          </svg>,
          "test",
          "aman"
        )}
      </ul>
    </div>
  );
};

export default SideBarComponent;
