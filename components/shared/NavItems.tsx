"use client";

import { headerLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="md:flex-between flex w-full flex-col gap-5 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = link.route === pathname;
        return (
          <li
            key={link.label}
            className={cn("p-medium whitespace-nowrap", {
              "text-primary-500": isActive,
            })}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
