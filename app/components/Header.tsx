'use client'
import Link from 'next/link';
import { FiPhone } from 'react-icons/fi';

const Header = () => {

  return (
    <header
      className='bg-green-900 shadow-lg fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out'
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          <Link href="/" >Break</Link>
        </div>

        <nav className="hidden md:flex space-x-8 text-white">
          <a href="#" className="hover:underline">
            Buy
          </a>
          <Link href="/morgage-calculator" className="hover:underline">
            Mortgage Calculator
          </Link>
          <a href="#" className="hover:underline">
            HELOC
          </a>
          <a href="#" className="hover:underline">
            Rates
          </a>
          <a href="#" className="hover:underline">
            Better+
          </a>
        </nav>

        <div className="flex items-center space-x-6">
          <a
            href="#"
            className="p-2 border rounded-full border-gray-300 hover:bg-gray-100"
            aria-label="Call"
          >
            <FiPhone className="text-gray-600" />
          </a>
          <a href="#" className="text-white hover:underline">
            Sign in
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;