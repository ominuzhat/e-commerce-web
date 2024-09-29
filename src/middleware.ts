import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { getCurrentUser } from "./utils/actions/auth.user";

const AuthRoutes = ["/login", "/registration"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  try {
    const userData = await getCurrentUser();

    const user = userData?.data?.email || "";

    if (!user) {
      if (AuthRoutes.includes(pathname)) {
        return NextResponse.next();
      } else {
        return NextResponse.redirect(new URL(`/login`, request.url));
      }
    }

    if (pathname.startsWith("/profile")) {
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/", request.url));
  } catch (error) {
    console.log("Error in middleware:", error);
    return NextResponse.redirect(new URL(`/login`, request.url));
  }
}

export const config = {
  matcher: [
    "/profile",
    "/profile/:page*",
    // "/profile/my-order",
    // "/profile/address-list",
    // "/profile/track-my-order",
    "/login",
    "/registration",
  ],
};

// export { default } from "next-auth/middleware";

// import { NextResponse } from "next/server";
// import { NextRequest } from "next/server";
// import { getCurrentUser } from "./utils/actions/auth.user";

// // This function can be marked `async` if using `await` inside

// const AuthRoutes = ["/login", "/registration"];

// // const roleBasedRoutes = {
// //   USER: [/^\/profile/],
// //   ADMIN: [/^\/profile/],
// // };

// export async function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   const userData = await getCurrentUser();
//   const user = userData?.data?.email || "";
//   console.log(user, "middleware");

//   // const {user} = { email: "ominuzhat@gmail.com" };
//   if (!user) {
//     if (AuthRoutes.includes(pathname)) {
//       return NextResponse.next();
//     } else {
//       return NextResponse.redirect(
//         new URL(`/login`, request.url)
//         // new URL(`/login?redirect=${pathname}`, request.url)
//       );
//     }
//   }

//   // if (user?.role && roleBasedRoutes[user.role]) {
//   //   const routes = roleBasedRoutes[user.role];

//   //   if (routes.some((route) => pathname.match(route))) {
//   //     return NextRequest.next();
//   //   }
//   // }

//   return NextResponse.redirect(new URL("/", request.url));
// }

// export const config = {
//   matcher: [
//     "/profile",
//     // "/profile/:page*",
//     "/profile/my-wishlist",
//     "/profile/my-order",
//     "/profile/address-list",
//     "/profile/track-my-order",
//     "/login",
//     "/registration",
//   ],
// };
