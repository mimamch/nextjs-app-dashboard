'use client';
import InputText from '@/ui/input/input-text';
import React from 'react';
import * as Yup from 'yup';
import InputValidationSpan from '@/ui/input/input-validation-span';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import Button from '@/ui/button';
import { getSession } from 'next-auth/react';

export default function Page() {
  const validationSchema = Yup.object({
    title: Yup.string().required().max(30).min(5),
    content: Yup.string().required().min(10),
  });

  getSession().then((e) => console.log(e));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ title: string; content: string }>({
    resolver: yupResolver(validationSchema, { strict: true }),
  });
  return (
    <div>
      <form
        onSubmit={handleSubmit((props) => {
          console.log(props);
        })}
      >
        <div className="mb-2">
          <label htmlFor="title" className="text">
            Title
          </label>
          <input
            className={clsx(
              'form-input w-full rounded-lg text-sm dark:bg-black dark:text-gray-200',
            )}
            id="title"
            placeholder="How to make a website..."
            {...register('title')}
          />
          <InputValidationSpan>{errors?.title?.message}</InputValidationSpan>
        </div>
        <div className="mb-2">
          <label htmlFor="content" className="text">
            Content
          </label>
          <textarea
            className={clsx(
              'form-textarea w-full rounded-lg text-sm dark:bg-black dark:text-gray-200',
            )}
            id="content"
            cols={30}
            rows={10}
            {...register('content')}
          ></textarea>
          <InputValidationSpan>{errors?.content?.message}</InputValidationSpan>
        </div>
        <Button>Publish</Button>
      </form>
    </div>
  );
}
