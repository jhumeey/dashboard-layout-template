import { navigation, teams } from "@/utils/constants";
import { classNames } from "@/utils/helpers";
import Image from "next/image";
import logo from "public/logo.svg";
import settings from "public/settings.svg";
import React, { Fragment } from "react";

const DesktopSidebar = () => {
  return (
    <>
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-20 lg:flex-col bg-white">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 items-center pb-4">
          <div className="bg-gray-300">
            <div className="flex h-16 shrink-0 items-center px-7">
              <Image src={logo} alt="logo" />
            </div>
            <nav className="flex flex-1 flex-col items-center px-7">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-50 text-indigo-600"
                              : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                          )}
                        >
                          <Image src={item.icon} alt={item.name} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <nav className="flex flex-1 flex-col mt-auto bg-white">
            <ul
              role="list"
              className="flex flex-1 flex-col gap-y-7 justify-end"
            >
              <li>
                <a
                  href="#"
                  className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <Image src={settings} alt="setting" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <Image src={settings} alt="setting" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <Image src={settings} alt="setting" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <Image src={settings} alt="setting" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default DesktopSidebar;
