// 'use client';
// import React, { PropsWithChildren, useEffect } from 'react';

// export default function AuthLayout({ children }: PropsWithChildren) {
//   useEffect(() => {
//     let darkmode = localStorage.getItem('darkmode');
//     if (
//       !darkmode &&
//       window.matchMedia &&
//       window.matchMedia('(prefers-color-scheme: dark)').matches
//     ) {
//       darkmode = 'true';
//     }
//     if (darkmode && darkmode == 'true') darkmodeToggle(true);
//   }, []);
//   const darkmodeToggle = (checked: boolean) => {
//     if (checked) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//     localStorage.setItem('darkmode', String(checked));
//   };
//   return (
//     <div className="flex min-h-screen items-center justify-center">
//       <div className="w-full rounded p-5 dark:bg-gray-900 lg:max-w-xl">
//         {children}
//       </div>
//       {/* {children} */}
//     </div>
//   );
// }

import { PropsWithChildren } from 'react';

export default async function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen items-center justify-center ">
      <div className="w-full rounded p-5 shadow-lg   dark:bg-gray-900 lg:max-w-xl">
        {children}
      </div>
      {/* {children} */}
    </div>
  );
}
