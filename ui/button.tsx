import clsx from 'clsx';

export default function Button({
  kind = 'default',
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  kind?: 'default' | 'error' | 'primary';
}) {
  return (
    <button
      className={clsx(
        'rounded px-5 py-2 text-sm font-medium disabled:cursor-default ',
        {
          'bg-gray-700 text-gray-100 hover:bg-gray-500 hover:text-white disabled:bg-gray-700':
            kind === 'default',
          'bg-vercel-pink disabled:bg-vercel-pink text-red-50 hover:bg-pink-600  hover:text-white':
            kind === 'error',
          'bg-vercel-blue disabled:bg-vercel-blue hover:bg-vercel-blue/90 text-gray-100 hover:text-white':
            kind === 'primary',
        },
        className,
      )}
      {...props}
    />
  );
}
