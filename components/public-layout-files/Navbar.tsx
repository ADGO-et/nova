'use client';

import React from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import logo from "@/public/logo.svg";
import Image from "next/image";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "../ui/sheet";
import { useTheme } from "next-themes";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  const { theme, resolvedTheme } = useTheme();

  const link = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    { name: "Services", url: "/services" },
    { name: "Pricing", url: "/pricing" },
    { name: "Blog", url: "/blog" },
    { name: "Contact Us", url: "/contact" },
  ];

  const navBgClass =
    resolvedTheme === "dark"
      ? "bg-black text-white shadow-gray-200"
      : "bg-blue-800 text-white shadow-black";

  return (
    <nav className={`sticky top-0 z-10 px-8 py-4 shadow-4xl ${navBgClass}`}>
      <div className="container mx-auto flex items-center justify-between">
        <Link href={"/"}>
          <Image src={logo} alt="logo" width={100} height={71.74} />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-6">
          {link.map((item) => (
            <Link href={item.url} key={item.name} className="font-bold">
              {item.name}
            </Link>
          ))}
        </ul>

        <div className="hidden md:flex gap-4">
          <ThemeSwitch className="my-auto" />
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu className="h-6 w-6 text-gray-700" />
          </SheetTrigger>
          <SheetContent side="left" className="bg-gray-900">
            <SheetClose className="absolute right-4 top-4" />
            <ul className="flex flex-col space-y-4 text-center text-white">
              {link.map((item) => (
                <Link href={item.url} key={item.name} className="font-bold">
                  {item.name}
                </Link>
              ))}
              <ThemeSwitch className="mx-auto" />
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
