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
          background: "linear-gradient(135deg, #0f2338, #63b0f4)",
          color: "#ffffff",
          position: "relative",
          padding: "70px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-140px",
            right: "-140px",
            width: "360px",
            height: "360px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.12)",
            filter: "blur(10px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-120px",
            left: "-120px",
            width: "300px",
            height: "300px",
            borderRadius: "999px",
            background: "rgba(0,0,0,0.18)",
            filter: "blur(10px)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            width: "900px",
            maxWidth: "900px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 16,
              letterSpacing: "0.45em",
              textTransform: "uppercase",
              padding: "10px 22px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.18)",
              border: "1px solid rgba(255,255,255,0.2)",
              fontWeight: 700,
            }}
          >
            MBTI WORLD
          </div>
          <div
            style={{
              fontSize: 78,
              fontWeight: 800,
              letterSpacing: "0.16em",
              textShadow: "0 12px 35px rgba(0,0,0,0.35)",
            }}
          >
            MBTI WORLD
          </div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              opacity: 0.9,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
            }}
          >
            Animation Edition
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 26,
              fontWeight: 600,
              opacity: 0.9,
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
