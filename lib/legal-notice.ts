/**
 * Required on every legal-type document: contracts, agreements, compliance
 * forms, and anything with a signature or approval block. Exact copy.
 */
export const LEGAL_EXAMPLE_NOTICE =
  "Example only, not legal advice. Have a qualified lawyer check it suits your circumstances and meets your local laws (including signing and witnessing rules) before using it."

/** Document and template ids whose product section must show the notice. */
export const LEGAL_DOCUMENT_IDS = [
  "project-charter",
  "business-case",
  "budget-tracker",
  "project-closure",
] as const

export function isLegalDocument(id: string): boolean {
  return (LEGAL_DOCUMENT_IDS as readonly string[]).includes(id)
}
