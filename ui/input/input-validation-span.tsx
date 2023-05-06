import React, { PropsWithChildren } from 'react';

export default function InputValidationSpan({
  children,
  ...props
}: PropsWithChildren) {
  return (
    <span className="text-vercel-pink text-xs" {...props}>
      {children}
    </span>
  );
}
