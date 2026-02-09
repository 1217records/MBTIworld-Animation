import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#fdfcf9",
          color: "#0b1220",
          position: "relative",
          padding: "96px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-180px",
            right: "-180px",
            width: "420px",
            height: "420px",
            borderRadius: "999px",
            background: "rgba(22,50,79,0.08)",
            filter: "blur(14px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-160px",
            left: "-160px",
            width: "360px",
            height: "360px",
            borderRadius: "999px",
            background: "rgba(22,50,79,0.06)",
            filter: "blur(14px)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "14px",
            width: "760px",
            maxWidth: "760px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 14,
              letterSpacing: "0.38em",
              textTransform: "uppercase",
              padding: "10px 22px",
              borderRadius: 999,
              background: "rgba(22,50,79,0.08)",
              border: "1px solid rgba(22,50,79,0.12)",
              fontWeight: 700,
              color: "#16324f",
            }}
          >
            Story-driven Personality Test
          </div>
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              letterSpacing: "0.14em",
              textShadow: "0 8px 22px rgba(15, 35, 56, 0.18)",
              color: "#0b1220",
            }}
          >
            MBTI WORLD
          </div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              opacity: 0.9,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "#16324f",
            }}
          >
            Animation Edition
          </div>
          <div
            style={{
              marginTop: 18,
              fontSize: 24,
              fontWeight: 600,
              opacity: 0.85,
              color: "#3a4a5f",
            }}
          >
            내 MBTI는 어떤 캐릭터와 같을까?
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
