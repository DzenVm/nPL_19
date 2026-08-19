import { ImageResponse } from "next/og";

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
          background: "#f7f1e4",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 112,
            height: 112,
            left: 24,
            top: 40,
            background: "#24446f",
            borderRadius: 28,
            transform: "rotate(-14deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 112,
            height: 112,
            left: 50,
            top: 34,
            background: "#b17f2c",
            borderRadius: 28,
            transform: "rotate(16deg)",
            opacity: 0.92,
          }}
        />
      </div>
    ),
    { ...size },
  );
}
