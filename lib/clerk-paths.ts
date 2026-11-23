/** Routes that render Clerk's browser client. Marketing pages stay outside this list. */
const CLERK_AUTH_PREFIXES = ["/sign-in", "/sign-up", "/dashboard"]

export function isClerkAuthPath(pathname: string): boolean {
  return CLERK_AUTH_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  )
}
