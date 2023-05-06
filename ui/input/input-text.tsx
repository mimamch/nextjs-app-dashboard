import clsx from 'clsx';
import React from 'react';

export default function InputText({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="text"
      className={clsx(
        'form-input w-full rounded-lg text-sm dark:bg-black dark:text-gray-200',
        className,
      )}
      placeholder="How to make a website..."
      {...props}
    />
  );
}
