'use client';

import { demos, type Item } from '@/lib/demos';
import { NextLogo } from '@/ui/next-logo';
import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';
import { MenuAlt2Icon, XIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { useState } from 'react';
import Byline from './byline';

export function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="fixed top-0 z-20 flex w-full flex-col border-b border-gray-800 dark:bg-black lg:bottom-0  lg:w-72 lg:border-b-0 lg:border-gray-800 dark:lg:border-r">
      <button
        type="button"
        className="group absolute left-0 top-0  flex h-14 items-center gap-x-2 px-4 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <XIcon className="block w-6 text-gray-400" />
        ) : (
          <MenuAlt2Icon className="block w-6 text-gray-400" />
        )}
      </button>
      <div className=" z-50 hidden h-14 items-center justify-end px-4 py-4 md:flex md:justify-start lg:h-auto">
        <Link
          href="/"
          className="group   flex  items-center gap-x-2.5"
          onClick={close}
        >
          <div className="h-7 w-7 rounded-full border border-white/30 group-hover:border-white/50">
            <NextLogo />
          </div>

          <h3 className="text-semidark  font-semibold tracking-wide dark:text-gray-400 dark:group-hover:text-gray-50">
            Admin Dashboard
          </h3>
        </Link>
      </div>

      <div
        className={clsx('overflow-y-auto lg:static lg:block', {
          'fixed inset-x-0 bottom-0 top-14 mt-px bg-white dark:bg-black':
            isOpen,
          hidden: !isOpen,
        })}
      >
        <nav className="space-y-6 px-2 py-5">
          {demos.map((section) => {
            return (
              <div key={section.name}>
                <div className="text-semidark/60 mb-2 px-3 text-xs font-semibold uppercase tracking-wider dark:text-gray-400/80">
                  <div>{section.name}</div>
                </div>

                <div className="space-y-1">
                  {section.items.map((item) => (
                    <GlobalNavItem key={item.slug} item={item} close={close} />
                  ))}
                </div>
              </div>
            );
          })}
        </nav>
        <Byline className="absolute hidden sm:block" />
      </div>
    </div>
  );
}

function GlobalNavItem({
  item,
  close,
}: {
  item: Item;
  close: () => false | void;
}) {
  const segments = useSelectedLayoutSegments();
  const isActive =
    JSON.stringify(segments) == JSON.stringify(item.slug.split('/'));
  return (
    <Link
      onClick={close}
      href={`/${item.slug}`}
      className={clsx(
        'hover:text-semidark block rounded-md px-3 py-2 text-sm font-medium dark:hover:text-gray-300',
        {
          'text-gray-500 dark:text-gray-400 dark:hover:bg-gray-800': !isActive,
          'text-semidark dark:text-white': isActive,
        },
      )}
    >
      {item.name}
    </Link>
  );
}
