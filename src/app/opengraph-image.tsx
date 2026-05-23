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
          flexDirection: "column",
          padding: 64,
          position: "relative",
        }}
      >
        {/* Top meta */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: accent,
            fontFamily: "monospace",
          }}
        >
          <span>● TAKING ON 3 PROJECTS IN Q3</span>
          <span style={{ color: inkMuted }}>{business.name} / LA</span>
        </div>

        {/* Display words */}
        <div
          style={{
            marginTop: 64,
            display: "flex",
            flexDirection: "column",
            gap: 6,
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 0.88,
          }}
        >
          <div style={{ fontSize: 160, color: ink, display: "flex" }}>BRANDS</div>
          <div style={{ fontSize: 160, paddingLeft: 60, color: ink, display: "flex" }}>
            THAT MOVE
          </div>
          <div style={{ fontSize: 160, color: accent, display: "flex" }}>MOVE</div>
          <div style={{ fontSize: 160, paddingLeft: 120, color: inkMuted, display: "flex" }}>
            OTHERS.
          </div>
        </div>

        {/* Bottom meta */}
        <div
          style={{
            marginTop: "auto",
            paddingTop: 24,
            borderTop: `1px solid ${ink}33`,
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: ink,
            fontFamily: "monospace",
          }}
        >
          <span>Motion · Brand · Type</span>
          <span style={{ background: accent, color: onAccent, padding: "6px 14px" }}>
            HIRE US →
          </span>
          <span>{new URL(business.url).hostname}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
