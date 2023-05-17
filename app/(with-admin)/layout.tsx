import { AddressBar } from '@/ui/address-bar';
import Byline from '@/ui/byline';
import GlobalHeader from '@/ui/headers';
import GlobalNav from '@/ui/global-nav';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GlobalNav />
      <GlobalHeader />

      <div className="lg:pl-64 lg:pt-14">
        <div className="mx-auto max-w-6xl space-y-8 px-2 pt-20 lg:px-6 lg:py-8">
          <div className="dark:bg-vc-border-gradient rounded-lg p-px shadow-lg shadow-black/20">
            <div className="rounded-lg bg-white dark:bg-black">
              <AddressBar />
            </div>
          </div>
          <div className="dark:bg-vc-border-gradient rounded-lg p-px shadow-black/20 dark:shadow-lg">
            <div className="rounded-lg bg-white p-3.5 dark:bg-black lg:p-6">
              {children}
            </div>
          </div>
          <Byline className="fixed md:hidden " /> {/* Mobile Byline */}
        </div>
      </div>
    </>
  );
}
