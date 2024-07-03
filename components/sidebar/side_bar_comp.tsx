import React, { useState, useEffect } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { ChevronRightIcon } from "@heroicons/react/16/solid";

const SideBarComponent = () => {
  const [userData, setUserData] = useState(null);
  const [dropdownStates, setDropdownStates] = useState({});
  const [activeLink, setActiveLink] = useState("Dashboard");
  const router = useRouter();

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
  }, [router]);

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
  // const createCustomListDropdown = (name, ...subItems) => {
  //   const hasSubItems = subItems.length > 0;
  //   return (
  //     <li key={name} className=" rounded m-2 bg-gray-200 p-2">
  //       <button
  //         className="w-full text-left flex justify-between items-center"
  //         onClick={() => hasSubItems && toggleDropdown(name)}
  //       >
  //         {name}
  //         {hasSubItems && (
  //           <svg
  //             xmlns="http://www.w3.org/2000/svg"
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             stroke-width="3"
  //             stroke="currentColor"
  //             className={`w-4 h-4 transform transition-transform ${
  //               dropdownStates[name] ? "rotate-90" : ""
  //             }`}
  //           >
  //             <path
  //               stroke-linecap="round"
  //               stroke-linejoin="round"
  //               d="m8.25 4.5 7.5 7.5-7.5 7.5"
  //             />
  //           </svg>
  //         )}
  //       </button>
  //       {hasSubItems && dropdownStates[name] && (
  //         <ul className="ml-4 mt-2">
  //           {subItems.map((subItem) => (
  //             <li key={subItem}>{subItem}</li>
  //           ))}
  //         </ul>
  //       )}
  //     </li>
  //   );
  // };

  const createCustomListDropdown = (name, icon = null, ...subItems) => {
    const hasSubItems = subItems.length > 0;
    return (
      <li
        key={name}
        className={`rounded m-2 bg-gray-200 p-2 ${
          !hasSubItems ? "hover:bg-gray-300" : ""
        } ${activeLink === name ? "bg-gray-400" : ""}`}
      >
        {!hasSubItems ? (
          <button
            className="w-full text-left flex items-center hover:bg-gray-300"
            onClick={() => redirectTo && handleRedirect(redirectTo, name)}
          >
            <span className="flex items-center">
              {icon && <span className="mr-2">{icon}</span>}
              {name}
            </span>
          </button>
        ) : (
          <div>
            <button
              className="w-full text-left flex items-center"
              onClick={() => toggleDropdown(name)}
            >
              <span className="flex items-center">
                {icon && <span className="mr-2">{icon}</span>}
                {name}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className={`w-4 h-4 ml-auto transform transition-transform ${
                  dropdownStates[name] ? "rotate-90" : ""
                }`}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
            {hasSubItems && dropdownStates[name] && (
              <ul className="mt-2">
                {subItems.map((subItem) => (
                  <li
                    key={subItem}
                    className="pl-8 m-1 p-1 hover:bg-gray-300 rounded"
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
      <div className="flex items-center justify-center m-2 rounded p-2 bg-gray-50 ">
        <div className="rounded-full flex flex-col items-center justify-center">
          <Avatar className="w-20 h-20">
            <AvatarFallback>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
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

      <ul className="p-5">
        {createCustomListDropdown("Dashboard")}
        {createCustomListDropdown(
          "History",
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
            />
          </svg>,
          "SubItem 1",
          "SubItem 2"
        )}
        {createCustomListDropdown(
          "Settings",
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
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
            />
          </svg>,
          "Profile",
          "Account",
          "Privacy"
        )}
      </ul>
    </div>
  );
};

export default SideBarComponent;
