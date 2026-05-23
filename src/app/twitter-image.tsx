import { ImageResponse } from "next/og";
import { business } from "@/lib/business";

export const alt = `${business.name} — ${business.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const { accent, bg, ink, inkMuted, onAccent } = business.brand;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: bg,
          color: ink,
          fontFamily: "sans-serif",
          display: "flex",
          padding: 56,
          gap: 48,
        }}
      >
        <div
          style={{
            width: 380,
            background: accent,
            color: onAccent,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 340,
            fontWeight: 800,
            letterSpacing: "-0.06em",
          }}
        >
          K!
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: 22,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: accent,
              fontFamily: "monospace",
              display: "flex",
            }}
          >
            {business.name} — DTLA — EST. MMXX
          </div>
          <div
            style={{
              fontSize: 80,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
              color: ink,
              maxWidth: 700,
              display: "flex",
            }}
          >
            {business.tagline.toUpperCase()}
          </div>
          <div
            style={{
              borderTop: `1px solid ${ink}33`,
              paddingTop: 16,
              fontSize: 20,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: inkMuted,
              display: "flex",
              justifyContent: "space-between",
              fontFamily: "monospace",
            }}
          >
            <span>3 SLOTS Q3</span>
            <span style={{ color: accent }}>{new URL(business.url).hostname}</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
