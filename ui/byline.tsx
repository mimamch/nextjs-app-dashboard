'use client';
import { VercelLogo } from '@/ui/vercel-logo';
import { XIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { useState } from 'react';

export default function Byline({ className }: { className: string }) {
  const [show, setShow] = useState(true);
  return (
    <div
      className={clsx(
        ` dark:bg-vc-border-gradient inset-x-0 bottom-3 mx-3 rounded-lg p-px shadow-black/20 transition dark:shadow-lg`,
        className,
        { '-translate-x-full': !show },
      )}
    >
      <div className="flex flex-col justify-between space-y-2 rounded-lg p-3.5 dark:bg-black lg:px-5 lg:py-3">
        <div className="flex justify-between">
          {' '}
          <div className="flex items-center gap-x-1.5">
            <div className="text-sm text-gray-500">By</div>
            <a href="https://vercel.com" title="Vercel">
              <div className="w-16 text-gray-500 hover:text-gray-50 dark:text-gray-100">
                <VercelLogo />
              </div>
            </a>
          </div>
          <button onClick={() => setShow(!show)}>
            <XIcon className="w-5 text-gray-500" />
          </button>
        </div>

        <div className="text-sm text-gray-500">
          <a
            className="underline decoration-dotted underline-offset-4 transition-colors hover:text-gray-300"
            href="https://github.com/vercel/app-playground"
            target="_blank"
            rel="noreferrer"
          >
            View code
          </a>
          {' or '}
          <a
            className="underline decoration-dotted underline-offset-4 transition-colors hover:text-gray-300"
            href="https://vercel.com/templates/next.js/app-directory"
            target="_blank"
            rel="noreferrer"
          >
            deploy your own
          </a>
        </div>
      </div>
    </div>
  );
}
