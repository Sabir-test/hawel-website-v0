import { useState } from "react";

// ─── DESIGN RATIONALE ────────────────────────────────────────────────────────
// Subject: Hawel — Sudan's first developer-grade payments infrastructure
// Audience A (Arabic): Merchants, local partners, CBOS regulators
// Audience B (English): International investors, diaspora developers
// Page job: Establish trust + technical credibility + cultural rootedness
//
// LOGO CONCEPT: "The Flow Loop"
// The Arabic letter ح (Ha) — first letter of حوِّل — is stylized into
// a continuous loop that doubles as a currency transfer arrow circuit.
// The loop is open on one side, suggesting flow outward (money moving),
// never closed (no hoarding — Sharia-compliant). The shape also reads
// as a payment circuit node diagram when abstracted.
//
// COLOR SYSTEM:
// Deep Nile (#0D3B2E) — trust, depth, Sudan's river identity
// Pharaoh Gold (#C9963A) — premium, Islamic heritage, value
// Sand Ivory (#F5F0E8) — warmth, paper, accessible
// Signal Emerald (#1A7A52) — action, growth, fintech green
// Slate Ink (#1C2B2A) — text, precision
//
// TYPOGRAPHY:
// Display: "Plus Jakarta Sans" — modern geometric, excellent Arabic companion
// Arabic: "Cairo" — warm, highly legible, Arabic-first
// Mono: "JetBrains Mono" — developer credibility in code blocks
//
// SIGNATURE ELEMENT: The animated ح-loop SVG that traces itself on load —
// spends boldness here, everything else is disciplined and quiet.
// ─────────────────────────────────────────────────────────────────────────────

const COLORS = {
  nile: "#0D3B2E",
  nileMid: "#1A5C45",
  emerald: "#1A7A52",
  emeraldLight: "#2AAB74",
  gold: "#C9963A",
  goldLight: "#E5B860",
  goldPale: "#F5E6C8",
  sand: "#F5F0E8",
  sandDark: "#EDE5D4",
  ink: "#1C2B2A",
  inkMid: "#3D5450",
  inkLight: "#6B8B85",
  white: "#FFFFFF",
  destructive: "#C0392B",
  success: "#1A7A52",
};

// ── Logo SVG: The ح Flow Loop ─────────────────────────────────────────────
function HawelLogoMark({ size = 48, animated = false, inverted = false }) {
  const fg = inverted ? COLORS.nile : COLORS.white;
  const gold = COLORS.gold;
  const bg = inverted ? COLORS.goldPale : COLORS.nile;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      <rect width="48" height="48" rx="14" fill={bg} />
      {/* The ح-inspired flow loop */}
      {/* Outer arc — the top sweep of ح */}
      <path
        d="M10 28 C10 18 18 12 26 12 C34 12 40 18 40 26"
        stroke={gold}
        strokeWidth="3.2"
        strokeLinecap="round"
        fill="none"
        style={animated ? { strokeDasharray: 60, strokeDashoffset: 0, animation: "drawLoop 1.2s ease-out forwards" } : {}}
      />
      {/* Inner return path — money flowing back / the transfer circuit */}
      <path
        d="M40 26 C40 31 36 34 30 34 L20 34"
        stroke={gold}
        strokeWidth="3.2"
        strokeLinecap="round"
        fill="none"
        style={animated ? { strokeDasharray: 40, strokeDashoffset: 0, animation: "drawLoop 1.2s 0.3s ease-out forwards" } : {}}
      />
      {/* Arrow head pointing left (RTL — money arriving) */}
      <path
        d="M24 29 L20 34 L24 39"
        stroke={gold}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Pulse dot — live transaction indicator */}
      <circle cx="10" cy="28" r="3" fill={COLORS.emeraldLight} />
      <circle cx="10" cy="28" r="3" fill={COLORS.emeraldLight}
        style={{ animation: "pulse 2s ease-in-out infinite" }}
      />
    </svg>
  );
}

function HawelWordmarkAR({ color = COLORS.ink, size = "lg" }) {
  const sizes = { sm: "1.1rem", md: "1.4rem", lg: "1.8rem", xl: "2.4rem" };
  return (
    <span style={{
      fontFamily: "'Cairo', 'Noto Naskh Arabic', sans-serif",
      fontWeight: 800,
      fontSize: sizes[size],
      color,
      letterSpacing: "-0.01em",
      lineHeight: 1,
    }}>
      حوِّل
    </span>
  );
}

function HawelWordmarkEN({ color = COLORS.inkMid, size = "sm" }) {
  const sizes = { sm: "0.65rem", md: "0.85rem", lg: "1rem" };
  return (
    <span style={{
      fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
      fontWeight: 700,
      fontSize: sizes[size],
      color,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      lineHeight: 1,
    }}>
      HAWEL
    </span>
  );
}

// ── Full Logo Lockup ──────────────────────────────────────────────────────────
function Logo({ variant = "default", size = 48 }) {
  const variants = {
    default: { bg: "transparent", textColor: COLORS.ink, subColor: COLORS.inkMid },
    dark: { bg: "transparent", textColor: COLORS.white, subColor: COLORS.goldLight },
    inverted: { bg: "transparent", textColor: COLORS.nile, subColor: COLORS.nileMid },
  };
  const v = variants[variant];

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", direction: "rtl" }}>
      <HawelLogoMark size={size} inverted={variant === "inverted"} />
      <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
        <HawelWordmarkAR color={v.textColor} />
        <HawelWordmarkEN color={v.subColor} />
      </div>
    </div>
  );
}

// ── Color Swatch ──────────────────────────────────────────────────────────────
function Swatch({ color, name, hex, onLight }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <div style={{
        width: "100%",
        height: "72px",
        borderRadius: "12px",
        background: color,
        border: onLight ? "1px solid rgba(0,0,0,0.08)" : "none",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }} />
      <div>
        <div style={{ fontWeight: 700, fontSize: "0.8rem", color: COLORS.ink }}>{name}</div>
        <div style={{ fontFamily: "monospace", fontSize: "0.72rem", color: COLORS.inkMid }}>{hex}</div>
      </div>
    </div>
  );
}

// ── Button Component ──────────────────────────────────────────────────────────
function Btn({ children, variant = "primary", size = "md", dir = "rtl" }) {
  const [hover, setHover] = useState(false);
  const styles = {
    primary: {
      background: hover
        ? `linear-gradient(135deg, ${COLORS.goldLight}, ${COLORS.gold})`
        : `linear-gradient(135deg, ${COLORS.gold}, #B8802A)`,
      color: COLORS.nile,
      border: "none",
    },
    secondary: {
      background: hover ? COLORS.nileMid : COLORS.nile,
      color: COLORS.white,
      border: "none",
    },
    outline: {
      background: hover ? "rgba(201,150,58,0.08)" : "transparent",
      color: COLORS.nile,
      border: `1.5px solid ${hover ? COLORS.gold : "rgba(13,59,46,0.25)"}`,
    },
    ghost: {
      background: hover ? COLORS.sandDark : "transparent",
      color: COLORS.inkMid,
      border: "none",
    },
  };
  const sizes = {
    sm: { padding: "6px 14px", fontSize: "0.78rem", borderRadius: "8px" },
    md: { padding: "10px 20px", fontSize: "0.875rem", borderRadius: "10px" },
    lg: { padding: "13px 28px", fontSize: "1rem", borderRadius: "12px" },
  };

  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      dir={dir}
      style={{
        ...styles[variant],
        ...sizes[size],
        fontFamily: "'Cairo', sans-serif",
        fontWeight: 700,
        cursor: "pointer",
        transition: "all 0.18s ease",
        transform: hover ? "translateY(-1px)" : "translateY(0)",
        boxShadow: hover ? "0 4px 16px rgba(201,150,58,0.3)" : "none",
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
      }}
    >
      {children}
    </button>
  );
}

// ── Badge ─────────────────────────────────────────────────────────────────────
function Badge({ children, variant = "primary" }) {
  const styles = {
    primary: { bg: "rgba(26,122,82,0.1)", color: COLORS.emerald, border: `1px solid rgba(26,122,82,0.2)` },
    gold: { bg: "rgba(201,150,58,0.12)", color: COLORS.gold, border: `1px solid rgba(201,150,58,0.3)` },
    nile: { bg: "rgba(13,59,46,0.08)", color: COLORS.nile, border: `1px solid rgba(13,59,46,0.15)` },
  };
  const s = styles[variant];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: "5px",
      background: s.bg, color: s.color, border: s.border,
      borderRadius: "999px", padding: "4px 10px",
      fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.01em",
      fontFamily: "'Cairo', sans-serif",
    }}>
      {children}
    </span>
  );
}

// ── Section Label ─────────────────────────────────────────────────────────────
function SectionLabel({ children }) {
  return (
    <div style={{
      fontSize: "0.65rem",
      fontWeight: 700,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: COLORS.inkLight,
      fontFamily: "'Plus Jakarta Sans', monospace",
      marginBottom: "12px",
      paddingBottom: "8px",
      borderBottom: `1px solid rgba(0,0,0,0.08)`,
    }}>
      {children}
    </div>
  );
}

// ── Divider ───────────────────────────────────────────────────────────────────
function Divider() {
  return (
    <div style={{
      height: "1px",
      background: `linear-gradient(90deg, transparent, ${COLORS.gold}40, transparent)`,
      margin: "32px 0",
    }} />
  );
}

// ── Lang Switch ───────────────────────────────────────────────────────────────
function LangSwitch({ lang, setLang }) {
  return (
    <div style={{
      display: "inline-flex",
      background: COLORS.sandDark,
      borderRadius: "10px",
      padding: "3px",
      gap: "2px",
    }}>
      {["AR", "EN"].map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          style={{
            padding: "6px 16px",
            borderRadius: "8px",
            border: "none",
            background: lang === l ? COLORS.nile : "transparent",
            color: lang === l ? COLORS.white : COLORS.inkMid,
            fontWeight: 700,
            fontSize: "0.78rem",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            cursor: "pointer",
            transition: "all 0.15s ease",
            letterSpacing: "0.05em",
          }}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

// ── Comparison Table Preview ──────────────────────────────────────────────────
function ComparisonPreview({ lang }) {
  const isAR = lang === "AR";
  const headers = isAR
    ? ["الخدمة", "SkipCash (الخليج)", "SADAD (السعودية)", "Paystack (أفريقيا)", "Hawel (السودان)"]
    : ["Feature", "SkipCash (Gulf)", "SADAD (Saudi)", "Paystack (Africa)", "Hawel (Sudan)"];

  const rows = isAR ? [
    ["بوابة دفع API", "✓", "✓", "✓ (25 دولة)", "✓"],
    ["تكامل شبكة محلية", "Mastercard", "mada", "Flutterwave", "EBS (وطني)"],
    ["احتياطي USSD", "✗", "✗", "✗", "✓"],
    ["توافق شرعي", "✗", "جزئي", "✗", "✓ أجرة"],
    ["عربية أولاً RTL", "جزئي", "✓", "✗", "✓ افتراضي"],
  ] : [
    ["Payment Gateway API", "✓", "✓", "✓ (25 countries)", "✓"],
    ["Local Network Integration", "Mastercard", "mada", "Flutterwave", "EBS (national)"],
    ["USSD Fallback", "✗", "✗", "✗", "✓"],
    ["Sharia-Compliant", "✗", "Partial", "✗", "✓ Ujra"],
    ["Arabic-First RTL", "Partial", "✓", "✗", "✓ Default"],
  ];

  return (
    <div style={{ overflowX: "auto", borderRadius: "12px", border: `1px solid rgba(0,0,0,0.1)` }}>
      <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "560px" }}>
        <thead>
          <tr style={{ background: COLORS.nile }}>
            {headers.map((h, i) => (
              <th key={i} style={{
                padding: "10px 14px",
                textAlign: i === 0 ? (isAR ? "right" : "left") : "center",
                fontSize: "0.72rem",
                fontWeight: 700,
                color: i === headers.length - 1 ? COLORS.gold : "rgba(255,255,255,0.85)",
                fontFamily: isAR ? "'Cairo', sans-serif" : "'Plus Jakarta Sans', sans-serif",
                borderBottom: `2px solid ${i === headers.length - 1 ? COLORS.gold : "transparent"}`,
                whiteSpace: "nowrap",
              }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} style={{ background: ri % 2 === 0 ? COLORS.white : COLORS.sand }}>
              {row.map((cell, ci) => (
                <td key={ci} style={{
                  padding: "9px 14px",
                  textAlign: ci === 0 ? (isAR ? "right" : "left") : "center",
                  fontSize: "0.75rem",
                  fontWeight: ci === 0 ? 600 : 400,
                  color: ci === row.length - 1 ? COLORS.nile : ci === 0 ? COLORS.ink : COLORS.inkMid,
                  fontFamily: isAR ? "'Cairo', sans-serif" : "'Plus Jakarta Sans', sans-serif",
                  background: ci === row.length - 1 ? "rgba(201,150,58,0.06)" : "inherit",
                  borderBottom: `1px solid rgba(0,0,0,0.05)`,
                }}>
                  {cell === "✓" ? (
                    <span style={{ color: COLORS.emerald, fontWeight: 700 }}>✓</span>
                  ) : cell === "✗" ? (
                    <span style={{ color: "#ccc" }}>—</span>
                  ) : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Mini Hero Preview ─────────────────────────────────────────────────────────
function HeroPreview({ lang }) {
  const isAR = lang === "AR";
  return (
    <div style={{
      background: COLORS.nile,
      borderRadius: "16px",
      padding: "32px 28px",
      position: "relative",
      overflow: "hidden",
      direction: isAR ? "rtl" : "ltr",
    }}>
      {/* Grid overlay */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.06,
        backgroundImage: `linear-gradient(${COLORS.gold} 1px, transparent 1px), linear-gradient(90deg, ${COLORS.gold} 1px, transparent 1px)`,
        backgroundSize: "32px 32px",
        pointerEvents: "none",
      }} />
      {/* Gold accent line */}
      <div style={{
        position: "absolute", top: 0, [isAR ? "right" : "left"]: 0,
        width: "3px", height: "100%",
        background: `linear-gradient(to bottom, ${COLORS.gold}, transparent)`,
      }} />

      <Badge variant="gold">
        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: COLORS.gold, display: "inline-block" }} />
        {isAR ? "ما قبل الإطلاق · يونيو 2026" : "Pre-Launch · June 2026"}
      </Badge>

      <h2 style={{
        marginTop: "16px",
        fontFamily: isAR ? "'Cairo', sans-serif" : "'Plus Jakarta Sans', sans-serif",
        fontWeight: 800,
        fontSize: isAR ? "1.5rem" : "1.35rem",
        color: COLORS.white,
        lineHeight: 1.3,
        letterSpacing: isAR ? "-0.01em" : "-0.02em",
        maxWidth: "380px",
      }}>
        {isAR
          ? <>اجعل أي هاتف يقبل الدفع — <span style={{ color: COLORS.gold }}>اليوم</span></>
          : <>Sudan's Payment Infrastructure — <span style={{ color: COLORS.gold }}>Built for Real</span></>
        }
      </h2>

      <p style={{
        marginTop: "10px",
        fontFamily: isAR ? "'Cairo', sans-serif" : "'Plus Jakarta Sans', sans-serif",
        fontSize: "0.85rem",
        color: "rgba(255,255,255,0.7)",
        maxWidth: "340px",
        lineHeight: 1.65,
      }}>
        {isAR
          ? "API واحد يصل إلى ٣٧ بنكاً عبر EBS — بوابة دفع، روابط واتساب، ورموز QR قابلة للطباعة."
          : "One API. 37 banks via EBS. Payment gateway, WhatsApp links, and printable QR codes — Sharia-compliant."
        }
      </p>

      <div style={{ display: "flex", gap: "10px", marginTop: "20px", flexWrap: "wrap" }}>
        <Btn variant="primary" dir={isAR ? "rtl" : "ltr"}>
          {isAR ? "كن من أوائل التجار ←" : "Join Early Access →"}
        </Btn>
        <Btn variant="outline" dir={isAR ? "rtl" : "ltr"}>
          {isAR ? "استكشف المنتجات" : "Explore Products"}
        </Btn>
      </div>

      <div style={{
        display: "flex", gap: "16px", marginTop: "18px", flexWrap: "wrap",
        fontFamily: isAR ? "'Cairo', sans-serif" : "'Plus Jakarta Sans', sans-serif",
        fontSize: "0.75rem", color: "rgba(255,255,255,0.55)",
      }}>
        <span>🛡️ {isAR ? "متوافق مع الشريعة" : "Sharia-compliant"}</span>
        <span>📶 {isAR ? "يعمل دون إنترنت (USSD)" : "Works offline (USSD)"}</span>
        <span>🔒 {isAR ? "آمن من OFAC" : "OFAC-safe infrastructure"}</span>
      </div>
    </div>
  );
}

// ── Typography Specimen ───────────────────────────────────────────────────────
function TypeSpecimen({ lang }) {
  const isAR = lang === "AR";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {/* Display */}
      <div style={{ direction: isAR ? "rtl" : "ltr" }}>
        <div style={{ fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: COLORS.inkLight, marginBottom: "4px" }}>
          Display — {isAR ? "Cairo 800" : "Plus Jakarta Sans 800"}
        </div>
        <div style={{
          fontFamily: isAR ? "'Cairo', sans-serif" : "'Plus Jakarta Sans', sans-serif",
          fontWeight: 800, fontSize: "2rem", color: COLORS.ink,
          lineHeight: 1.15, letterSpacing: "-0.02em",
        }}>
          {isAR ? "حوِّل طريقة الدفع" : "Rewire Sudan's Economy"}
        </div>
      </div>
      {/* Heading */}
      <div style={{ direction: isAR ? "rtl" : "ltr" }}>
        <div style={{ fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: COLORS.inkLight, marginBottom: "4px" }}>
          Heading — {isAR ? "Cairo 700" : "Plus Jakarta Sans 700"}
        </div>
        <div style={{
          fontFamily: isAR ? "'Cairo', sans-serif" : "'Plus Jakarta Sans', sans-serif",
          fontWeight: 700, fontSize: "1.2rem", color: COLORS.nile, lineHeight: 1.3,
        }}>
          {isAR ? "بوابة الدفع API — نقطة تكامل واحدة" : "One API. Every Sudanese Bank."}
        </div>
      </div>
      {/* Body */}
      <div style={{ direction: isAR ? "rtl" : "ltr" }}>
        <div style={{ fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: COLORS.inkLight, marginBottom: "4px" }}>
          Body — {isAR ? "Cairo 400" : "Plus Jakarta Sans 400"}
        </div>
        <div style={{
          fontFamily: isAR ? "'Cairo', sans-serif" : "'Plus Jakarta Sans', sans-serif",
          fontWeight: 400, fontSize: "0.9rem", color: COLORS.inkMid, lineHeight: 1.75,
          maxWidth: "400px",
        }}>
          {isAR
            ? "نبني طبقة المدفوعات التي يحتاجها الـ ٤٧ مليون نسمة في السودان — REST API نظيفة، روابط واتساب، وتسوية T+1."
            : "We're building the payment layer Sudan's 47 million people urgently need — clean REST API, WhatsApp links, T+1 settlement."
          }
        </div>
      </div>
      {/* Mono */}
      <div>
        <div style={{ fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: COLORS.inkLight, marginBottom: "4px" }}>
          Mono — JetBrains Mono 400 (developer content)
        </div>
        <div style={{
          fontFamily: "monospace", fontSize: "0.82rem", color: COLORS.gold,
          background: COLORS.nile, padding: "12px 16px", borderRadius: "8px",
          lineHeight: 1.6, direction: "ltr",
        }}>
          <span style={{ color: "rgba(255,255,255,0.4)" }}>POST</span> /v1/charges<br />
          <span style={{ color: "rgba(255,255,255,0.4)" }}>{"{"}</span><br />
          {"  "}<span style={{ color: "#7DD3A8" }}>amount</span>: <span style={{ color: COLORS.gold }}>5000</span>,<br />
          {"  "}<span style={{ color: "#7DD3A8" }}>currency</span>: <span style={{ color: COLORS.goldLight }}>"SDG"</span>,<br />
          {"  "}<span style={{ color: "#7DD3A8" }}>channel</span>: <span style={{ color: COLORS.goldLight }}>"ebs"</span><br />
          <span style={{ color: "rgba(255,255,255,0.4)" }}>{"}"}</span>
        </div>
      </div>
    </div>
  );
}

// ── Logo Contexts ─────────────────────────────────────────────────────────────
function LogoShowcase() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px" }}>
      {/* On white */}
      <div style={{
        background: COLORS.white, borderRadius: "12px", padding: "24px 20px",
        border: `1px solid rgba(0,0,0,0.08)`,
        display: "flex", flexDirection: "column", gap: "8px",
      }}>
        <div style={{ fontSize: "0.6rem", color: COLORS.inkLight, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>On White</div>
        <Logo variant="default" size={44} />
        <Logo variant="default" size={32} />
        <div style={{ marginTop: "8px" }}>
          <HawelLogoMark size={36} />
        </div>
      </div>
      {/* On Nile */}
      <div style={{
        background: COLORS.nile, borderRadius: "12px", padding: "24px 20px",
        display: "flex", flexDirection: "column", gap: "8px",
      }}>
        <div style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>On Nile Dark</div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", direction: "rtl" }}>
          <HawelLogoMark size={44} />
          <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
            <HawelWordmarkAR color={COLORS.white} />
            <HawelWordmarkEN color={COLORS.gold} />
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", direction: "rtl", marginTop: "4px" }}>
          <HawelLogoMark size={32} />
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <HawelWordmarkAR color={COLORS.white} size="md" />
            <HawelWordmarkEN color={COLORS.goldLight} />
          </div>
        </div>
      </div>
      {/* On Sand */}
      <div style={{
        background: COLORS.sand, borderRadius: "12px", padding: "24px 20px",
        display: "flex", flexDirection: "column", gap: "8px",
      }}>
        <div style={{ fontSize: "0.6rem", color: COLORS.inkLight, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>On Sand Warm</div>
        <Logo variant="default" size={44} />
        <div style={{ marginTop: "8px", display: "flex", gap: "10px", alignItems: "center" }}>
          <HawelLogoMark size={28} />
          <HawelLogoMark size={22} />
          <HawelLogoMark size={18} />
        </div>
        <div style={{ marginTop: "4px" }}>
          <Badge variant="nile">حوِّل | HAWEL</Badge>
        </div>
      </div>
    </div>
  );
}

// ── Lang Strategy Card ────────────────────────────────────────────────────────
function LangStrategyCard() {
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px",
    }}>
      <div style={{
        background: COLORS.nile, borderRadius: "12px", padding: "20px",
        borderTop: `3px solid ${COLORS.gold}`,
        direction: "rtl",
      }}>
        <div style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.45)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "10px" }}>
          النسخة العربية
        </div>
        <div style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700, fontSize: "1rem", color: COLORS.white, marginBottom: "8px" }}>
          التجار أولاً
        </div>
        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "5px" }}>
          {["نبرة دافئة ومجتمعية", "الأرقام بالعربية (٣٧ بنكاً)", "واتساب كقناة رئيسية", "ثقة شرعية في المقدمة", "قصص نجاح محلية"].map(t => (
            <li key={t} style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.7)", fontFamily: "'Cairo', sans-serif", display: "flex", gap: "6px", alignItems: "center" }}>
              <span style={{ color: COLORS.gold }}>◆</span> {t}
            </li>
          ))}
        </ul>
      </div>
      <div style={{
        background: COLORS.sand, borderRadius: "12px", padding: "20px",
        borderTop: `3px solid ${COLORS.emerald}`,
        direction: "ltr",
      }}>
        <div style={{ fontSize: "0.62rem", color: COLORS.inkLight, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "10px" }}>
          English Version
        </div>
        <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1rem", color: COLORS.nile, marginBottom: "8px" }}>
          Investors + Developers
        </div>
        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "5px" }}>
          {["Metrics-first narrative", "Paystack/Stripe comparisons", "API docs linked prominently", "OFAC & regulatory framing", "TAM / revenue model"].map(t => (
            <li key={t} style={{ fontSize: "0.75rem", color: COLORS.inkMid, fontFamily: "'Plus Jakarta Sans', sans-serif", display: "flex", gap: "6px", alignItems: "center" }}>
              <span style={{ color: COLORS.emerald }}>◆</span> {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ── Main App ──────────────────────────────────────────────────────────────────
export default function HawelBrandIdentity() {
  const [lang, setLang] = useState("AR");
  const [activeTab, setActiveTab] = useState("logo");
  const isAR = lang === "AR";

  const tabs = [
    { id: "logo", label: isAR ? "الشعار" : "Logo" },
    { id: "colors", label: isAR ? "الألوان" : "Colors" },
    { id: "type", label: isAR ? "الطباعة" : "Typography" },
    { id: "hero", label: isAR ? "المعاينة" : "Preview" },
    { id: "compare", label: isAR ? "المقارنة" : "Comparison" },
    { id: "lang", label: isAR ? "استراتيجية اللغة" : "Lang Strategy" },
  ];

  const palette = [
    { name: "Deep Nile", hex: "#0D3B2E", color: COLORS.nile },
    { name: "Nile Mid", hex: "#1A5C45", color: COLORS.nileMid },
    { name: "Signal Emerald", hex: "#1A7A52", color: COLORS.emerald },
    { name: "Emerald Light", hex: "#2AAB74", color: COLORS.emeraldLight },
    { name: "Pharaoh Gold", hex: "#C9963A", color: COLORS.gold },
    { name: "Gold Light", hex: "#E5B860", color: COLORS.goldLight },
    { name: "Gold Pale", hex: "#F5E6C8", color: COLORS.goldPale, onLight: true },
    { name: "Sand Ivory", hex: "#F5F0E8", color: COLORS.sand, onLight: true },
    { name: "Slate Ink", hex: "#1C2B2A", color: COLORS.ink },
    { name: "Ink Mid", hex: "#3D5450", color: COLORS.inkMid },
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: COLORS.sand,
      fontFamily: isAR ? "'Cairo', sans-serif" : "'Plus Jakarta Sans', Inter, sans-serif",
      direction: isAR ? "rtl" : "ltr",
    }}>
      {/* Top bar */}
      <div style={{
        background: COLORS.nile,
        padding: "14px 28px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <Logo variant="default" size={38} />
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.45)", letterSpacing: "0.08em" }}>
            BRAND IDENTITY SYSTEM v1.0
          </span>
          <LangSwitch lang={lang} setLang={setLang} />
        </div>
      </div>

      {/* Tabs */}
      <div style={{
        background: COLORS.white,
        borderBottom: `1px solid rgba(0,0,0,0.08)`,
        padding: "0 28px",
        display: "flex",
        gap: "0",
        overflowX: "auto",
      }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: "14px 18px",
              border: "none",
              borderBottom: activeTab === tab.id ? `2px solid ${COLORS.gold}` : "2px solid transparent",
              background: "transparent",
              color: activeTab === tab.id ? COLORS.nile : COLORS.inkMid,
              fontWeight: activeTab === tab.id ? 700 : 500,
              fontSize: "0.82rem",
              cursor: "pointer",
              fontFamily: "inherit",
              whiteSpace: "nowrap",
              transition: "all 0.15s ease",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "32px 24px" }}>

        {/* ─── LOGO TAB ─── */}
        {activeTab === "logo" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            <div>
              <SectionLabel>LOGO CONCEPT — "THE ح FLOW LOOP"</SectionLabel>
              <p style={{ fontSize: "0.85rem", color: COLORS.inkMid, lineHeight: 1.75, maxWidth: "560px" }}>
                {isAR
                  ? 'الشعار مستوحى من حرف "ح" — أول حرف في "حوِّل". الشكل يصمم كدائرة مفتوحة (لا احتجاز للأموال — متوافق مع الشريعة) ويقرأ أيضاً كمسار تحويل مالي. نقطة التشغيل الخضراء تشير إلى المعاملات الحية.'
                  : 'The mark is drawn from "ح" (Ha) — the first letter of حوِّل. Styled as an open loop (no money hoarding — Sharia intent) that reads as a payment circuit. The green pulse node signals live transactions.'
                }
              </p>
            </div>
            <LogoShowcase />

            <Divider />
            <SectionLabel>LOGO SIZES & CLEAR SPACE</SectionLabel>
            <div style={{
              background: COLORS.white, borderRadius: "12px", padding: "24px",
              border: `1px solid rgba(0,0,0,0.08)`,
              display: "flex", gap: "28px", alignItems: "flex-end", flexWrap: "wrap",
            }}>
              {[64, 48, 36, 28, 20].map(s => (
                <div key={s} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                  <HawelLogoMark size={s} />
                  <span style={{ fontSize: "0.6rem", color: COLORS.inkLight }}>{s}px</span>
                </div>
              ))}
            </div>

            <Divider />
            <SectionLabel>BUTTONS & UI COMPONENTS</SectionLabel>
            <div style={{
              background: COLORS.white, borderRadius: "12px", padding: "24px",
              border: `1px solid rgba(0,0,0,0.08)`,
              display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center",
            }}>
              <Btn variant="primary" dir={isAR ? "rtl" : "ltr"}>{isAR ? "ابدأ الآن" : "Get Started"}</Btn>
              <Btn variant="secondary" dir={isAR ? "rtl" : "ltr"}>{isAR ? "استكشف" : "Explore"}</Btn>
              <Btn variant="outline" dir={isAR ? "rtl" : "ltr"}>{isAR ? "تواصل معنا" : "Contact Us"}</Btn>
              <Btn variant="ghost" dir={isAR ? "rtl" : "ltr"}>{isAR ? "تسجيل الدخول" : "Sign In"}</Btn>
              <Btn variant="primary" size="sm" dir={isAR ? "rtl" : "ltr"}>{isAR ? "صغير" : "Small"}</Btn>
              <Btn variant="primary" size="lg" dir={isAR ? "rtl" : "ltr"}>{isAR ? "كبير ←" : "Large →"}</Btn>
            </div>

            <SectionLabel>BADGES & TAGS</SectionLabel>
            <div style={{
              background: COLORS.white, borderRadius: "12px", padding: "20px",
              border: `1px solid rgba(0,0,0,0.08)`,
              display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center",
            }}>
              <Badge variant="primary">
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: COLORS.emerald, display: "inline-block" }} />
                {isAR ? "ما قبل الإطلاق" : "Pre-Launch"}
              </Badge>
              <Badge variant="gold">{isAR ? "متوافق شرعياً" : "Sharia-Compliant"}</Badge>
              <Badge variant="nile">{isAR ? "EBS متكامل" : "EBS Integrated"}</Badge>
              <Badge variant="primary">{isAR ? "OFAC آمن" : "OFAC-Safe"}</Badge>
              <Badge variant="gold">{isAR ? "أجرة — لا ربا" : "Ujra — No Riba"}</Badge>
            </div>
          </div>
        )}

        {/* ─── COLORS TAB ─── */}
        {activeTab === "colors" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            <div>
              <SectionLabel>COLOR SYSTEM — NILE & PHARAOH GOLD</SectionLabel>
              <p style={{ fontSize: "0.85rem", color: COLORS.inkMid, lineHeight: 1.75, maxWidth: "560px" }}>
                {isAR
                  ? '"النيل العميق" يُرسّخ الثقة والعمق — النهر الذي بنت عليه السودان حضارتها. "ذهب الفراعنة" يعكس القيمة والتراث الإسلامي. معاً يشكّلان هوية لا تُشبه أي فنتك آخر.'
                  : '"Deep Nile" anchors trust and depth — the river Sudan was built on. "Pharaoh Gold" reflects value and Islamic heritage. Together they form an identity unlike any other fintech.'
                }
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "12px" }}>
              {palette.map(p => <Swatch key={p.hex} {...p} />)}
            </div>

            <Divider />
            <SectionLabel>GRADIENT SYSTEM</SectionLabel>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }}>
              {[
                { name: "Nile Deep", gradient: `linear-gradient(135deg, ${COLORS.nile}, ${COLORS.nileMid})` },
                { name: "Gold Premium", gradient: `linear-gradient(135deg, #B8802A, ${COLORS.goldLight})` },
                { name: "Emerald Growth", gradient: `linear-gradient(135deg, ${COLORS.nile}, ${COLORS.emerald})` },
              ].map(g => (
                <div key={g.name} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ height: "72px", borderRadius: "12px", background: g.gradient, boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }} />
                  <div style={{ fontSize: "0.75rem", fontWeight: 600, color: COLORS.ink }}>{g.name}</div>
                </div>
              ))}
            </div>

            <Divider />
            <SectionLabel>COLOR IN CONTEXT</SectionLabel>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <div style={{ background: COLORS.nile, borderRadius: "12px", padding: "20px", direction: "rtl" }}>
                <Badge variant="gold">{isAR ? "المميز" : "Featured"}</Badge>
                <div style={{ marginTop: "10px", fontFamily: "'Cairo', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: COLORS.white }}>
                  {isAR ? "باقة الأعمال" : "Business Plan"}
                </div>
                <div style={{ fontFamily: "monospace", fontSize: "1.6rem", fontWeight: 800, color: COLORS.gold, marginTop: "4px" }}>2.5%</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.55)", marginTop: "2px", fontFamily: "'Cairo', sans-serif" }}>
                  {isAR ? "لكل معاملة (السوق العالمي: 2.9%)" : "per transaction (global avg: 2.9%)"}
                </div>
              </div>
              <div style={{ background: COLORS.sand, borderRadius: "12px", padding: "20px", border: `1px solid ${COLORS.sandDark}`, direction: "rtl" }}>
                <div style={{ fontSize: "0.65rem", color: COLORS.inkLight, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "10px" }}>
                  {isAR ? "إحصاءات السوق" : "Market Stats"}
                </div>
                {[
                  [isAR ? "٣٧ بنكاً" : "37 Banks", isAR ? "على شبكة EBS" : "on EBS network"],
                  [isAR ? "٤٧ مليون" : "47M", isAR ? "نسمة" : "population"],
                  [isAR ? "٠" : "0", isAR ? "بوابات دفع API — نحن الأول" : "developer payment gateways — we're first"],
                ].map(([val, label]) => (
                  <div key={val} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: `1px solid ${COLORS.sandDark}` }}>
                    <span style={{ fontWeight: 800, fontSize: "0.95rem", color: COLORS.nile, fontFamily: "monospace" }}>{val}</span>
                    <span style={{ fontSize: "0.72rem", color: COLORS.inkMid, fontFamily: "'Cairo', sans-serif" }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─── TYPOGRAPHY TAB ─── */}
        {activeTab === "type" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            <SectionLabel>TYPE SYSTEM — CAIRO × PLUS JAKARTA SANS × JETBRAINS MONO</SectionLabel>
            <TypeSpecimen lang={lang} />
            <Divider />
            <SectionLabel>TYPE SCALE</SectionLabel>
            <div style={{
              background: COLORS.white, borderRadius: "12px", padding: "24px",
              border: `1px solid rgba(0,0,0,0.08)`,
              display: "flex", flexDirection: "column", gap: "12px",
              direction: isAR ? "rtl" : "ltr",
            }}>
              {[
                { label: "Display / Hero", size: "2.5rem", weight: 800, sample: isAR ? "حوِّل طريقة الدفع" : "Rewire Sudan's Economy" },
                { label: "H1", size: "1.75rem", weight: 800, sample: isAR ? "بنية تحتية للمدفوعات" : "Payment Infrastructure" },
                { label: "H2", size: "1.35rem", weight: 700, sample: isAR ? "منتجات حوِّل" : "Hawel Products" },
                { label: "H3", size: "1.05rem", weight: 700, sample: isAR ? "بوابة الدفع API" : "Payment Gateway API" },
                { label: "Body", size: "0.9rem", weight: 400, sample: isAR ? "نبني طبقة المدفوعات التي يحتاجها السودان" : "Building the payment layer Sudan urgently needs" },
                { label: "Caption / Eyebrow", size: "0.7rem", weight: 700, sample: isAR ? "المنتجات والخدمات" : "PRODUCTS & SERVICES" },
              ].map(({ label, size, weight, sample }) => (
                <div key={label} style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "8px 0", borderBottom: `1px solid ${COLORS.sandDark}` }}>
                  <span style={{ fontSize: "0.62rem", color: COLORS.inkLight, width: "90px", flexShrink: 0 }}>{label}</span>
                  <span style={{
                    fontFamily: isAR ? "'Cairo', sans-serif" : "'Plus Jakarta Sans', sans-serif",
                    fontSize: size, fontWeight: weight, color: COLORS.ink,
                    lineHeight: 1.2,
                  }}>{sample}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─── HERO PREVIEW TAB ─── */}
        {activeTab === "hero" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <SectionLabel>HERO SECTION — LIVE PREVIEW (TOGGLE LANGUAGE ABOVE)</SectionLabel>
            <HeroPreview lang={lang} />
            <Divider />
            <SectionLabel>HEADER / NAV PREVIEW</SectionLabel>
            <div style={{
              background: COLORS.white,
              borderRadius: "12px",
              border: `1px solid rgba(0,0,0,0.1)`,
              padding: "14px 24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
              <Logo variant="default" size={36} />
              <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                {(isAR
                  ? ["المنتجات", "الأسعار", "المقارنة", "خارطة الطريق"]
                  : ["Products", "Pricing", "Compare", "Roadmap"]
                ).map(l => (
                  <span key={l} style={{ fontSize: "0.82rem", color: COLORS.inkMid, fontFamily: "inherit", cursor: "pointer" }}>{l}</span>
                ))}
              </div>
              <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <LangSwitch lang={lang} setLang={setLang} />
                <Btn variant="primary" size="sm" dir={isAR ? "rtl" : "ltr"}>
                  {isAR ? "ابدأ الآن" : "Get Started"}
                </Btn>
              </div>
            </div>
          </div>
        )}

        {/* ─── COMPARISON TAB ─── */}
        {activeTab === "compare" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div>
              <SectionLabel>UPDATED COMPARISON — NOW WITH GLOBAL BENCHMARK (PAYSTACK)</SectionLabel>
              <p style={{ fontSize: "0.85rem", color: COLORS.inkMid, lineHeight: 1.75, maxWidth: "580px" }}>
                {isAR
                  ? 'إضافة Paystack كمعيار عالمي أفريقي تحوّل السردية من "لاعب خليجي" إلى "ما فعله Paystack لنيجيريا، نفعله نحن للسودان" — وهذه رسالة تصل للمستثمرين الدوليين بقوة.'
                  : 'Adding Paystack as a global African benchmark shifts the narrative from "Gulf niche player" to "what Paystack did for Nigeria, we do for Sudan" — a story international investors immediately understand.'
                }
              </p>
            </div>
            <ComparisonPreview lang={lang} />
            <div style={{
              background: COLORS.nile, borderRadius: "12px", padding: "16px 20px",
              display: "flex", gap: "12px", alignItems: "flex-start",
              direction: isAR ? "rtl" : "ltr",
            }}>
              <span style={{ fontSize: "1.2rem" }}>💡</span>
              <p style={{
                fontSize: "0.8rem", color: "rgba(255,255,255,0.75)",
                fontFamily: "inherit", lineHeight: 1.65, margin: 0,
              }}>
                {isAR
                  ? 'Paystack (نيجيريا) استحوذت عليها Stripe بـ 200 مليون دولار في 2020. إدراجها في المقارنة يقول للمستثمر: "نحن نعرف ما نبنيه، ونعرف إلى أين يؤدي".'
                  : 'Paystack (Nigeria) was acquired by Stripe for $200M in 2020. Including them tells investors: "We know what we\'re building, and we know where it leads."'
                }
              </p>
            </div>
          </div>
        )}

        {/* ─── LANG STRATEGY TAB ─── */}
        {activeTab === "lang" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div>
              <SectionLabel>BILINGUAL STRATEGY — NOT TRANSLATION, TUNING</SectionLabel>
              <p style={{ fontSize: "0.85rem", color: COLORS.inkMid, lineHeight: 1.75, maxWidth: "560px" }}>
                {isAR
                  ? "النسختان ليستا ترجمة حرفية — كل نسخة مضبوطة لجمهورها. العربية تقود بالتجار والمجتمع؛ الإنجليزية تقود بالأرقام والبنية التقنية."
                  : "The two versions are not literal translations — each is tuned for its audience. Arabic leads with merchants and community; English leads with metrics and technical architecture."
                }
              </p>
            </div>
            <LangStrategyCard />
            <Divider />
            <SectionLabel>IMPLEMENTATION RECOMMENDATION</SectionLabel>
            <div style={{
              background: COLORS.white, borderRadius: "12px", padding: "20px",
              border: `1px solid rgba(0,0,0,0.08)`,
              direction: "ltr",
            }}>
              {[
                ["Library", "next-intl (Next.js App Router native)", COLORS.emerald],
                ["URL Structure", "/ar/* and /en/* with hreflang tags", COLORS.nile],
                ["Default Route", "/ar — Arabic-first, redirect based on browser lang", COLORS.gold],
                ["Toggle", "Header button: switches lang + flips dir= on <html>", COLORS.nile],
                ["Content Format", "JSON locale files: /messages/ar.json + /messages/en.json", COLORS.emerald],
                ["SEO", "Separate meta titles/descriptions per locale via generateMetadata()", COLORS.gold],
              ].map(([key, val, accent]) => (
                <div key={key} style={{
                  display: "flex", gap: "16px", padding: "10px 0",
                  borderBottom: `1px solid ${COLORS.sandDark}`, alignItems: "flex-start",
                }}>
                  <span style={{
                    fontSize: "0.7rem", fontWeight: 700, color: accent,
                    fontFamily: "monospace", width: "110px", flexShrink: 0, paddingTop: "2px",
                  }}>{key}</span>
                  <span style={{ fontSize: "0.8rem", color: COLORS.inkMid, fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.6 }}>{val}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Footer */}
      <div style={{
        background: COLORS.nile,
        padding: "20px 28px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "40px",
        direction: isAR ? "rtl" : "ltr",
      }}>
        <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", fontFamily: "monospace" }}>
          HAWEL BRAND SYSTEM v1.0 — CONFIDENTIAL
        </span>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {[COLORS.nile, COLORS.emerald, COLORS.gold, COLORS.sand].map(c => (
            <div key={c} style={{ width: "14px", height: "14px", borderRadius: "50%", background: c, border: "1.5px solid rgba(255,255,255,0.2)" }} />
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.5); }
        }
        @keyframes drawLoop {
          from { stroke-dashoffset: 100; }
          to { stroke-dashoffset: 0; }
        }
        * { box-sizing: border-box; }
      `}</style>
    </div>
  );
}
