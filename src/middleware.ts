import { NextRequest, NextResponse } from 'next/server';

import { getToken } from 'next-auth/jwt';

const authPages = [
    "/auth/sign-in",
    "/auth/sign-up",
]

export default async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    const isAuthPage = authPages.some((page) => pathname.startsWith(page));

    const session = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
    });

    if (session?.email) {
        if (isAuthPage) {
            return NextResponse.redirect(new URL('/', req.url))
        }
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next|public|.*\\..*).*)'],
};