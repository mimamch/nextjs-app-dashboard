'use client';
import Button from '@/ui/button';
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function page() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<{ email: string; password: string }>();

  const onSubmit = (data: { email: string; password: string }) => {
    setLoading(true);
    signIn('credentials', {
      ...data,
      redirect: false,
    })
      .then((res) => {
        if (res?.error) {
          return toast.error(res.error);
        }
        if (res?.ok) {
          toast.success('Logged In!');
          router.push('/');
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };
  return (
    <div className="py-4">
      <h1 className="text-center text-3xl font-semibold tracking-tighter">
        LOGIN
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          disabled={loading}
          type="email"
          className="form-input mt-4 w-full rounded border-none  dark:bg-gray-800"
          placeholder="Username"
          {...register('email')}
        />
        <input
          disabled={loading}
          type="password"
          className="form-input mt-4 w-full rounded border-none dark:bg-gray-800"
          placeholder="Password"
          {...register('password')}
        />
        <Button kind="primary" disabled={loading} className="mt-4 ">
          LOGIN
        </Button>
      </form>
    </div>
  );
}
