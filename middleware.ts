import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const { pathname } = url

  // Redirect old URL structure to new structure
  if (
    pathname.startsWith("/cookies/") ||
    pathname.startsWith("/drinks/") ||
    pathname.startsWith("/peanut-butter/") ||
    pathname.startsWith("/coffee/")
  ) {
    // Extract the category from the pathname
    const category = pathname.split("/")[1]

    // Create the new path with the /products/ prefix
    const newPath = `/products${pathname}`

    console.log(`Redirecting from ${pathname} to ${newPath}`)

    return NextResponse.redirect(new URL(newPath, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/cookies/:path*", "/drinks/:path*", "/peanut-butter/:path*", "/coffee/:path*"],
}
