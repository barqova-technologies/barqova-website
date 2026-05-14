import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

type RenderOgArgs = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function renderOg({ eyebrow, title, subtitle }: RenderOgArgs) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background:
            "linear-gradient(135deg, #050505 0%, #0A0A0A 50%, #141008 100%)",
          color: "#FAFAFA",
          padding: "80px",
          position: "relative",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Decorative amber blob */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 460,
            height: 460,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(213,173,54,0.45) 0%, rgba(213,173,54,0) 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            left: -100,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(231,195,88,0.28) 0%, rgba(231,195,88,0) 70%)",
            display: "flex",
          }}
        />

        {/* Brand mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            color: "#D5AD36",
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#D5AD36",
              boxShadow: "0 0 24px rgba(213,173,54,0.7)",
              display: "flex",
            }}
          />
          Barqova
        </div>

        {/* Body */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
            gap: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              color: "#D5AD36",
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              fontSize: 84,
              fontWeight: 600,
              letterSpacing: -2,
              lineHeight: 1.02,
              color: "#FFFFFF",
              maxWidth: 1000,
              display: "flex",
            }}
          >
            {title}
          </div>
          {subtitle ? (
            <div
              style={{
                fontSize: 28,
                fontWeight: 400,
                lineHeight: 1.3,
                color: "rgba(255,255,255,0.66)",
                maxWidth: 920,
                display: "flex",
              }}
            >
              {subtitle}
            </div>
          ) : null}
        </div>

        {/* Bottom strip */}
        <div
          style={{
            position: "absolute",
            bottom: 36,
            right: 80,
            display: "flex",
            color: "rgba(255,255,255,0.5)",
            fontSize: 18,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          barqova.com
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
