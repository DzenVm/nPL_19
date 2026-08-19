import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f7f1e4",
          borderRadius: 7,
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 20,
            height: 20,
            left: 4,
            top: 7,
            background: "#24446f",
            borderRadius: 5,
            transform: "rotate(-14deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 20,
            height: 20,
            left: 9,
            top: 6,
            background: "#b17f2c",
            borderRadius: 5,
            transform: "rotate(16deg)",
            opacity: 0.92,
          }}
        />
      </div>
    ),
    { ...size },
  );
}
