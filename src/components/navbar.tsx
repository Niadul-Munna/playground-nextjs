import Link from "next/link";
import React from "react";
import GitButton from "./ui/git-button";

const menu = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Products",
    href: "/products",
  },
  {
    title: "Components",
    href: "/components",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

const Navbar = () => {
  return (
    <div className="flex items-center gap-4 p-5 bg-neutral-300 text-center  justify-center">
      {menu.map((item, idx) => (
        <Link
          className="hover:text-[18px] duration-300 hover: px-4 py-2 rounded "
          key={idx}
          href={item.href}
        >
          {item.title}
        </Link>
      ))}
      <GitButton />
    </div>
  );
};

export default Navbar;
