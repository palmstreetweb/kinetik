import { ImageResponse } from "next/og";
import { business } from "@/lib/business";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  const { accent, onAccent, bg } = business.brand;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: bg,
          color: accent,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          fontWeight: 800,
          fontSize: 22,
          letterSpacing: "-0.05em",
          borderRadius: 6,
          border: `2px solid ${accent}`,
        }}
      >
        K<span style={{ color: onAccent, background: accent, padding: "0 1px" }}>!</span>
      </div>
    ),
    { ...size }
  );
}
