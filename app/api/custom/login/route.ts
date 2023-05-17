import { NextRequest, NextResponse } from 'next/server';
export const POST = async (req: NextRequest) => {
  const { email, password } = await req.json();
  return NextResponse.json(
    {
      id: new Date().getTime().toString(),
      email,
      name: 'imam',
      address: 'Lampung',
      token: 'sfiuwehfpdsfnojsdn',
    },
    { status: 200 },
  );
  if (
    (email as string).includes('mimamch') &&
    (password as string).includes('mimamch')
  ) {
    return NextResponse.json(
      {
        id: new Date().getTime().toString(),
        email,
        name: 'imam',
        token: 'sfiuwehfpdsfnojsdn',
      },
      { status: 200 },
    );
  }
  return NextResponse.json(
    { message: 'Invalid Email or Password!' },
    { status: 401 },
  );
};
