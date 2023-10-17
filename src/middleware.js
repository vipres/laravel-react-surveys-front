
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export function middleware(request) {
  const url = request.nextUrl.clone()
  /* if (url.pathname === '/') {
    url.pathname = '/dashboard'
    return NextResponse.redirect(url)
  } */
}
