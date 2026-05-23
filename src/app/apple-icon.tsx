import { ImageResponse } from "next/og";
import { business } from "@/lib/business";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  const { accent, onAccent, bg } = business.brand;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: bg,
          display: "flex",
          flexDirection: "column",
          padding: 16,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 14,
            left: 14,
            fontSize: 12,
            color: accent,
            fontFamily: "monospace",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          K-01
        </div>
        <div
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            width: 14,
            height: 14,
            background: accent,
            borderRadius: 999,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: accent,
            fontSize: 130,
            fontWeight: 800,
            letterSpacing: "-0.06em",
            fontFamily: "sans-serif",
          }}
        >
          K
          <span style={{ color: onAccent, background: accent, padding: "0 6px", marginLeft: 2 }}>
            !
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
