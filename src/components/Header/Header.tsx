"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { href: "/popular", label: "Popular" },
  { href: "/now-playing", label: "Now Playing" },
  { href: "/top-rated", label: "Top Rated" },
  { href: "/my-favourites", label: "My Favourites" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="w-full border-b shadow-sm">
      <div className="countainer mx-auto flex items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="text-xl font-bold text-gray-800 hover:text-blue-500"
        >
          Movies DB
        </Link>
        <nav className="flex gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                "text-sm font-medium transition-colors hover:text-blue-500",
                pathname === href ? "text-ble-500 underline" : "text-gray-500"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
