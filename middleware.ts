import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


/*
export default clerkMiddleware();

export const config = {
  matcher: [
    // Match all routes except static files and Next.js internals
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webm)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};*/


const isProtectedRoute = createRouteMatcher(["/client(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};


/*
const isPublicRoute = createRouteMatcher([
  "/api/webhooks",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/",
]);

export default clerkMiddleware(async(auth, req) => {
  if (!isPublicRoute(req)) await auth.protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};*/

