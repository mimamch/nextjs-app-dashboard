'use client';
import React, { useEffect, useState } from 'react';
import * as Switch from '@radix-ui/react-switch';
import { MoonIcon } from '@heroicons/react/solid';

export default function DarkmodeButton() {
  const [darkmode, setDarkmode] = useState(false);
  useEffect(() => {
    let darkmode = localStorage.getItem('darkmode');
    if (
      !darkmode &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      darkmode = 'true';
    }
    if (darkmode && darkmode == 'true') darkmodeToggle(true);
  }, []);

  const darkmodeToggle = (checked: boolean) => {
    setDarkmode(checked);
    if (checked) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkmode', String(checked));
  };
  return (
    <div className="mr-5 flex items-center ">
      <Switch.Root
        checked={darkmode}
        onCheckedChange={darkmodeToggle}
        className="group relative h-[25px] w-[42px] cursor-default rounded-full  border  outline-none data-[state=checked]:bg-black"
      >
        <Switch.Thumb className="flex h-[21px] w-[21px] translate-x-0.5 items-center justify-center rounded-full bg-white  transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px] data-[state=unchecked]:bg-black">
          <MoonIcon className="w-5 text-black group-data-[state=unchecked]:text-white" />
        </Switch.Thumb>
      </Switch.Root>
    </div>
  );
}
