"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-3 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-teal-600">
          CatalogApp
        </Link>
        <div className="space-x-6">
          <Link href="/" className="text-gray-700 hover:text-teal-600">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-teal-600">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
