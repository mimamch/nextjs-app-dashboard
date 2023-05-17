import NextAuth, { AuthOptions, DefaultUser } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

type User = DefaultUser & {
  email: string;
  address?: string;
  password?: string;
  token?: string;
};

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error('Invalid Credentials');
        }
        const response = await fetch('http://localhost:3000/api/custom/login', {
          cache: 'no-cache',
          method: 'POST',
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        });
        const resBody = await response.json();
        if (!response.ok) {
          throw new Error(resBody.message);
        }
        return resBody as User;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token = { ...token, ...user, accessToken: (user as User).token };
      }
      return token;
    },
    async session({ session, token }) {
      const response = await fetch(
        'http://localhost:3000/api/custom/checktoken',
        {
          cache: 'no-store',
          method: 'POST',
          body: JSON.stringify({
            token: token.accessToken,
          }),
        },
      );
      if (!response.ok) {
        throw new Error('Token Expired');
      }
      return { ...session };
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: 'jwt' },
  debug: process.env.NODE_ENV != 'production',
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
