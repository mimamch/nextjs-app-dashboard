import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import React, { PropsWithChildren } from 'react';

export const metadata = {
  title: 'Posts',
};

export default async function Layout({ children }: PropsWithChildren) {
  const session: any = await getServerSession(authOptions);
  console.log(session);
  return <div>{children}</div>;
}
