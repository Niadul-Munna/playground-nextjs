import Link from "next/link";
import React from "react";

const menu = [
  {
    title: "Home",
    href: "#",
  },
  {
    title: "Products",
    href: "#",
  },
  {
    title: "Components",
    href: "#",
  },
  {
    title: "Pricing",
    href: "#",
  },
  {
    title: "Blog",
    href: "#",
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
    </div>
  );
};

export default Navbar;
