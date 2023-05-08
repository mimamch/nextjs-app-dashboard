import Button from '@/ui/button';
import React from 'react';

export const metadata = {
  title: 'Login',
};

export default function page() {
  return (
    <div className="py-4">
      <h1 className="text-center text-3xl font-semibold tracking-tighter">
        LOGIN
      </h1>
      <form action="">
        <input
          type="text"
          className="form-input mt-4 w-full rounded border-none dark:bg-gray-800"
          placeholder="Username"
        />
        <input
          type="password"
          className="form-input mt-4 w-full rounded border-none dark:bg-gray-800"
          placeholder="Password"
        />
        <Button className="mt-4 ">LOGIN</Button>
      </form>
    </div>
  );
}
