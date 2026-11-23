import assert from "node:assert/strict"
import test from "node:test"
import { clerkEnabledForHost, clerkModeFromKeys, normalizeHost } from "./clerk-config.ts"

function publishableKey(instance: "test" | "live", frontendApi: string): string {
  return `pk_${instance}_${Buffer.from(`${frontendApi}$`).toString("base64")}`
}

const DEV_HOST = "happy-otter-12.clerk.accounts.dev"
const SITE_HOST = "clerk.pm101topro.com"
const OTHER_HOST = "clerk.example.com"
const DEV_SECRET = "sk_test_example_secret_value"
const LIVE_SECRET = "sk_live_example_secret_value"

test("missing or blank keys stay off", () => {
  assert.equal(clerkModeFromKeys(undefined, undefined), "off")
  assert.equal(clerkModeFromKeys("", ""), "off")
  assert.equal(clerkModeFromKeys("   ", "   "), "off")
  assert.equal(clerkEnabledForHost("www.pm101topro.com", "off"), false)
})

test("a development key for Clerk's accounts.dev host is on everywhere", () => {
  const mode = clerkModeFromKeys(publishableKey("test", DEV_HOST), DEV_SECRET)
  assert.equal(mode, "development")
  assert.equal(clerkEnabledForHost("localhost", mode), true)
  assert.equal(clerkEnabledForHost("pm101topro-git-preview.vercel.app", mode), true)
  assert.equal(clerkEnabledForHost("www.pm101topro.com", mode), true)
})

test("a production key for this site is on only for the production hosts", () => {
  const mode = clerkModeFromKeys(publishableKey("live", SITE_HOST), LIVE_SECRET)
  assert.equal(mode, "production")
  assert.equal(clerkEnabledForHost("pm101topro.com", mode), true)
  assert.equal(clerkEnabledForHost("www.pm101topro.com", mode), true)
  assert.equal(clerkEnabledForHost("www.pm101topro.com:443", mode), true)
  assert.equal(clerkEnabledForHost("localhost", mode), false)
  assert.equal(clerkEnabledForHost("pm101topro-git-preview.vercel.app", mode), false)
})

test("another site's production frontend API stays off", () => {
  assert.equal(clerkModeFromKeys(publishableKey("live", OTHER_HOST), LIVE_SECRET), "off")
  assert.equal(clerkModeFromKeys(publishableKey("live", "clerk.notpm101topro.com"), LIVE_SECRET), "off")
})

test("a development key pointed at a custom host stays off", () => {
  assert.equal(clerkModeFromKeys(publishableKey("test", OTHER_HOST), DEV_SECRET), "off")
})

test("the secret has to match the publishable key's instance", () => {
  assert.equal(clerkModeFromKeys(publishableKey("test", DEV_HOST), undefined), "off")
  assert.equal(clerkModeFromKeys(publishableKey("test", DEV_HOST), LIVE_SECRET), "off")
  assert.equal(clerkModeFromKeys(publishableKey("live", SITE_HOST), DEV_SECRET), "off")
  assert.equal(clerkModeFromKeys(publishableKey("live", SITE_HOST), "sk_live_short"), "off")
})

test("host parsing ignores ports and proxy lists", () => {
  assert.equal(normalizeHost("WWW.PM101TOPRO.COM:443"), "www.pm101topro.com")
  assert.equal(normalizeHost("www.pm101topro.com, www.pm101topro.com"), "www.pm101topro.com")
  assert.equal(normalizeHost(null), "")
})
