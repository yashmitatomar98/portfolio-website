import { ImageResponse } from "next/og";

// Apple touch icon — iOS masks corners itself, so this is full-bleed.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #7a4f9e 0%, #b190c1 100%)",
          color: "#ffffff",
          fontSize: 96,
          fontWeight: 700,
          letterSpacing: "-4px",
          fontFamily: "sans-serif",
        }}
      >
        YT
      </div>
    ),
    { ...size },
  );
}
