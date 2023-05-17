'use client';

import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as Avatar from '@radix-ui/react-avatar';
import { signOut } from 'next-auth/react';
import { toast } from 'react-hot-toast';

export default function AvatarIcon() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Avatar.Root className="inline-flex h-10 w-10 select-none items-center justify-center overflow-hidden rounded-full align-middle">
          <Avatar.Image
            className="h-full w-full rounded-[inherit] object-cover"
            src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
            alt="Colm Tuite"
          />
          <Avatar.Fallback
            className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
            delayMs={600}
          >
            MIC
          </Avatar.Fallback>
        </Avatar.Root>
      </DropdownMenu.Trigger>
      {/* <DropdownMenu.Portal> */}
      <DropdownMenu.Content
        className=" min-w-[220px] rounded-md bg-white shadow-md dark:bg-gray-900"
        sideOffset={5}
      >
        <DropdownMenu.Item
          onClick={() =>
            signOut()
              .then(() => toast.success('Logged Out!'))
              .catch((err) => toast.error(err))
          }
          className="group relative flex select-none items-center rounded px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <button className="w-full text-left">Log Out</button>
        </DropdownMenu.Item>

        <DropdownMenu.Arrow className="fill-white dark:fill-gray-500" />
      </DropdownMenu.Content>
      {/* </DropdownMenu.Portal> */}
    </DropdownMenu.Root>
  );
}
