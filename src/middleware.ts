export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/profile",
    "/profile/my-wishlist",
    "/profile/my-order",
    "/profile/address-list",
    "/profile/track-my-order",
  ],
};
