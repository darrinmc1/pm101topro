import { supabaseAdmin } from "@/lib/supabase"

export interface Entitlement {
  id: string
  user_id: string
  product_id: string
  granted_at: string
  expires_at: string | null
}

/**
 * Expected Supabase table (service role):
 * entitlements (user_id text, product_id text, granted_at timestamptz,
 * expires_at timestamptz null, unique (user_id, product_id))
 */

export async function getUserEntitlements(userId: string): Promise<Entitlement[]> {
  if (!supabaseAdmin) return []
  const { data, error } = await supabaseAdmin
    .from("entitlements")
    .select("*")
    .eq("user_id", userId)
  if (error) {
    console.error("[entitlements] fetch failed", error)
    return []
  }
  const now = Date.now()
  return (data ?? []).filter((row) => {
    if (!row.expires_at) return true
    return new Date(row.expires_at).getTime() > now
  })
}

export async function userHasEntitlement(userId: string, productId: string): Promise<boolean> {
  const rows = await getUserEntitlements(userId)
  return rows.some((row) => row.product_id === productId)
}

export async function revokeEntitlement(userId: string, productId: string): Promise<boolean> {
  if (!supabaseAdmin) return false
  const { error } = await supabaseAdmin
    .from("entitlements")
    .delete()
    .eq("user_id", userId)
    .eq("product_id", productId)
  if (error) {
    console.error("[entitlements] revoke failed", error)
    return false
  }
  return true
}

export async function grantEntitlement(userId: string, productId: string): Promise<boolean> {
  if (!supabaseAdmin) return false
  const { error } = await supabaseAdmin.from("entitlements").upsert(
    {
      user_id: userId,
      product_id: productId,
      granted_at: new Date().toISOString(),
    },
    { onConflict: "user_id,product_id" },
  )
  if (error) {
    console.error("[entitlements] grant failed", error)
    return false
  }
  return true
}
