import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#f7f1e4",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", gap: 14 }}>
          <div
            style={{
              width: 46,
              height: 46,
              background: "#24446f",
              borderRadius: 12,
              transform: "rotate(-14deg)",
            }}
          />
          <div
            style={{
              width: 46,
              height: 46,
              marginLeft: -30,
              background: "#b17f2c",
              borderRadius: 12,
              transform: "rotate(16deg)",
              opacity: 0.92,
            }}
          />
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 700, color: "#201a10", marginTop: 36 }}>
          lemneeva.top
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#5b5140", marginTop: 22, maxWidth: 900 }}>
          Angielski online dla dorosłych, którzy nie mają czasu do stracenia
        </div>
      </div>
    ),
    { ...size },
  );
}
