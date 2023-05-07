import React, { PropsWithChildren } from 'react';

export const metadata = {
  title: 'Posts',
};

export default function Layout({ children }: PropsWithChildren) {
  return children;
}
