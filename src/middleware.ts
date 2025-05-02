import { NextRequest, NextResponse } from 'next/server';

import { getToken } from 'next-auth/jwt';

import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';


const authPages = [
    "/auth/sign-in",
    "/auth/sign-up",
    "/auth/signin",
    "/auth/signup",
    "/auth/register",
    "/auth/login",
    "/sign-in",
    "/sign-up",
    "/signin",
    "/signup",
    "/register",
    "/login",
]

const intlMiddleware = createMiddleware(routing)

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
    return intlMiddleware(req);
}


export const config = {
    matcher: ['/((?!api|_next|public|.*\\..*).*)'],
};