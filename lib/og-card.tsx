import { ImageResponse } from "next/og"

export const ogSize = { width: 1200, height: 630 }
export const ogContentType = "image/png"
export const ogAlt =
  "pm101toPro. Written courses from the first charter to the PMO. No credential at the end."

export function OgCard() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0F1E",
          color: "#F8FAFC",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#60A5FA",
          }}
        >
          pm101toPro
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: 980,
            }}
          >
            From the first charter to the PMO.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 30,
              color: "#94A3B8",
              maxWidth: 900,
            }}
          >
            Written courses and document tools. No credential at the end.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#64748B" }}>
          www.pm101topro.com
        </div>
      </div>
    ),
    { ...ogSize },
  )
}
