import NextAuth, { AuthOptions, DefaultUser } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

type User = DefaultUser & {
  email: string;
  password?: string;
};

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error('Invalid Credentials');
        }
        if (!credentials.email.includes('mimamch'))
          throw new Error('Invalid Email or Password');
        const user: User = {
          id: new Date().getTime().toString(),
          email: credentials.email,
        };

        return user;
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: 'jwt' },
  debug: true,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
