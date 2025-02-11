import React from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import logo from "@/public/logo.svg";
import Image from "next/image";
import { Button } from "../ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "../ui/sheet";
import ThemeSwitch from "./ThemeSwitch"
import { IoLogInOutline } from "react-icons/io5";
import { BsKeyFill } from "react-icons/bs";

const Navbar = () => {
  const link = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    { name: "Services", url: "/services" },
    { name: "Pricing", url: "/pricing" },
    { name: "Blog", url: "/blog" },
    { name: "Contact Us", url: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-10 bg-background px-8 py-4 shadow-4xl shadow-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link href={"/"}>
          <Image src={logo} alt="logo" width={100} height={71.74} />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-6 text-foreground">
          {link.map((item) => (
            <Link href={item.url} key={item.name} className="font-bold">
              {item.name}
            </Link>
          ))}
        </ul>

        <div className="hidden md:flex gap-4">
          <ThemeSwitch className="my-auto"/>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu className="h-6 w-6 text-gray-700" />
          </SheetTrigger>
          <SheetContent side="left" className="bg-textColor">
            <SheetClose className="absolute right-4 top-4" />
            <ul className="flex flex-col space-y-4 text-center text-white">
              {link.map((item) => (
                <Link href={item.url} key={item.name} className="font-bold">
                  {item.name}
                </Link>
              ))}
              <ThemeSwitch className="mx-auto"/>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
