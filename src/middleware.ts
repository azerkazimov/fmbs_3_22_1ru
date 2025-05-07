import { NextRequest, NextResponse } from 'next/server';

import { getToken } from 'next-auth/jwt';

import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { locales } from './i18n/locales';


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

    const pathnameSegment = pathname.split("/").filter(Boolean)
    const locale = pathnameSegment[0]

    if (pathname === "/"){
        return NextResponse.redirect(new URL(`/${locales[0]}`, req.url))
    }

    const isValidLocale = locales.includes(locale as any)

    if (!isValidLocale && pathname !== "/") {
        return NextResponse.redirect(new URL(`/${locales[0]}`, req.url)) // default to first locale => ["en"]
    }


    if (isValidLocale){
        const pathWithoutLocale = "/" + pathnameSegment.slice(1).join("/")
        const isAuthPage = authPages.includes(pathWithoutLocale)
    
        const session = await getToken({
            req,
            secret: process.env.NEXTAUTH_SECRET,
        });
    
        if (session?.email) {
            if (isAuthPage) {
                return NextResponse.redirect(new URL('/', req.url))
            }
        }
    }

    return intlMiddleware(req);
}


export const config = {
    matcher: ['/((?!api|_next|public|.*\\..*).*)'],
};