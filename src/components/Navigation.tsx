'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600';
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              Will McArthur
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link 
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/')}`}
            >
              Home
            </Link>
            <Link 
              href="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/about')}`}
            >
              About
            </Link>
            <Link 
              href="/products"
              className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/products')}`}
            >
              Products
            </Link>
            <Link 
              href="/projects"
              className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/projects')}`}
            >
              Projects
            </Link>
            <Link 
              href="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/contact')}`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
