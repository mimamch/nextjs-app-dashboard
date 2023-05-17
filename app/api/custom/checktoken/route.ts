import { NextRequest, NextResponse } from 'next/server';
export const POST = async (req: NextRequest) => {
  const { token } = await req.json();
  return NextResponse.json(
    {
      active: true,
      token: token,
    },
    { status: 200 },
  );
};
