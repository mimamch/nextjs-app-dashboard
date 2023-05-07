import { UserCircleIcon, MoonIcon } from '@heroicons/react/solid';
import React from 'react';
import DarkmodeButton from './darkmode-button';
import Button from '../button';

export default function GlobalHeader() {
  return (
    <div className="fixed z-10 flex h-14 w-full items-center justify-end rounded-b-2xl bg-white  pr-3 shadow dark:bg-black md:pl-64 ">
      <DarkmodeButton />
      <button className="flex items-center gap-2">
        <span className="text-sm text-gray-400">mimamch</span>
        <UserCircleIcon className=" block w-10 text-gray-500 dark:text-gray-400" />
      </button>
    </div>
  );
}
