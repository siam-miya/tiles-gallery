import React from 'react';
import Link from 'next/link';
import { Button, Input } from '@heroui/react';

const Footer = () => {
  return (
    <footer className="bg-amber-400 text-default-800 border-t border-default-200 mt-auto">
      {/* sm:grid-cols-2 এবং lg:grid-cols-4 করা হয়েছে যাতে মাঝারি স্ক্রিনে ভেঙে না যায় */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div className="space-y-4">
          <h3 className='font-light text-3xl cursor-pointer'>Tiles Gallery</h3>
          <p className="text-sm max-w-xs">
            Building modern web experiences with clean design and top-notch functionality.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-default-900">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-default-500">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/all-tiles" className="hover:text-primary transition-colors">
                All Tiles
              </Link>
            </li>
            <li>
              <Link href="/profile" className="hover:text-primary transition-colors">
                Profile
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-default-900">
            Follow Us
          </h4>
          <div className="flex flex-col space-y-2 text-sm text-default-500">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Instagram
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-default-900">
            Contact Us
          </h4>
          <div className="text-sm text-default-500 space-y-2">
            <p>123 Tech Avenue, Dhaka</p>
            <p>+880 1925909902</p>
            <p>siammiya2024@gmail.com</p>
          </div>
          
          <div className="pt-2">
            {/* এখানে flex-col এবং sm:flex-row করা হয়েছে এবং full width দেওয়া হয়েছে */}
            <form className="flex flex-col sm:flex-row gap-2 w-full max-w-sm">
              <Input
                type="email"
                placeholder="Your email"
                size="sm"
                variant="bordered"
                radius="md"
                className="w-full" // ইনপুট যেন কন্টেইনার অনুযায়ী জায়গা নেয়
              />
              <Button 
                color="primary" 
                size="sm" 
                radius="md" 
                type="submit"
                className="sm:w-auto w-full min-w-[70px]" // মোবাইলে ফুল উইডথ, বড় স্ক্রিনে অটো
              >
                Join
              </Button>
            </form>
          </div>
        </div>

      </div>

      <div className="border-t border-default-200 bg-default-100/50 py-6 text-center text-xs text-default-400">
        <p>&copy; {new Date().getFullYear()} Tiles Gallery. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;