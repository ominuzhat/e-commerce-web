export { default } from "next-auth/middleware";

import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { getCurrentUser } from "./utils/actions/auth.user";

// This function can be marked `async` if using `await` inside

const AuthRoutes = ["/login", "/registration"];

// const roleBasedRoutes = {
//   USER: [/^\/profile/],
//   ADMIN: [/^\/profile/],
// };

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const user = await getCurrentUser();

  if (!user) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(`/`, request.url)
        // new URL(`/login?redirect=${pathname}`, request.url)
      );
    }
  }

  // if (user?.role && roleBasedRoutes[user.role]) {
  //   const routes = roleBasedRoutes[user.role];

  //   if (routes.some((route) => pathname.match(route))) {
  //     return NextRequest.next();
  //   }
  // }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: [
    "/profile",
    "/profile/:page*",
    // "/profile/my-wishlist",
    // "/profile/my-order",
    // "/profile/address-list",
    // "/profile/track-my-order",
    "/login",
    "/registration",
  ],
};
