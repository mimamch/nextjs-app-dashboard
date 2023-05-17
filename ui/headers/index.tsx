import { UserCircleIcon, MoonIcon } from '@heroicons/react/solid';
import React from 'react';
import AvatarIcon from '../partials/AvatarIcon';
import DarkmodeButton from './darkmode-button';

export default function GlobalHeader() {
  return (
    <div className="fixed z-10 flex h-14 w-full items-center justify-end rounded-b-2xl bg-white  pr-3 shadow dark:bg-black md:pl-64 ">
      <DarkmodeButton />

      <AvatarIcon />
    </div>
  );
}
