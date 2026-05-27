export default function App() {
  return (
    <>
    <ColorPickerButton />
    <Swatch color="#E2574C" selected onSelect={() => {}} />
    </>
  )
}

import { useState, useRef, useEffect } from "react";

const PALETTES = [
  {
    name: "Günbatımı",
    colors: ["#E2574C", "#E8845A", "#F5A623", "#F7CA74", "#FBE9C6"],
  },
  {
    name: "Okyanus",
    colors: ["#1A3C5E", "#1D6FA4", "#4A90D9", "#7EB8E8", "#C2DFF5"],
  },
  {
    name: "Orman",
    colors: ["#1B3A2D", "#2E7D52", "#7ED321", "#B8E07A", "#E4F5C4"],
  },
  {
    name: "Menekşe",
    colors: ["#2C1654", "#6C3483", "#9B59B6", "#C39BD3", "#EAD5F3"],
  },
  {
    name: "Monokrom",
    colors: ["#111111", "#444444", "#888888", "#BBBBBB", "#EEEEEE"],
  },
];

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "2.5rem",
    padding: "3rem 1.5rem",
    background: "#0f0f0f",
    fontFamily: "'DM Mono', monospace",
  },
  btnArea: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "14px 34px",
    border: "none",
    borderRadius: "60px",
    cursor: "pointer",
    fontFamily: "'DM Mono', monospace",
    fontSize: "12px",
    fontWeight: "500",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    background: "#f0ece4",
    color: "#0f0f0f",
    transition: "transform 0.15s cubic-bezier(.34,1.56,.64,1), box-shadow 0.15s ease",
    outline: "none",
  },
  btnSwatches: {
    display: "flex",
    gap: "4px",
    alignItems: "center",
  },
  popup: {
    position: "absolute",
    top: "calc(100% + 16px)",
    left: "50%",
    background: "#1a1a1a",
    border: "0.5px solid rgba(255,255,255,0.12)",
    borderRadius: "20px",
    padding: "22px",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    zIndex: 10,
    minWidth: "290px",
    boxShadow: "0 16px 48px rgba(0,0,0,0.5)",
  },
  popupLabel: {
    fontSize: "10px",
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.35)",
    marginBottom: "2px",
  },
  paletteRow: {
    display: "flex",
    flexDirection: "column",
    gap: "7px",
  },
  paletteName: {
    fontSize: "11px",
    color: "rgba(255,255,255,0.5)",
    letterSpacing: "0.06em",
  },
  swatchesRow: {
    display: "flex",
    gap: "7px",
  },
  divider: {
    height: "0.5px",
    background: "rgba(255,255,255,0.08)",
  },
  textAreaWrap: {
    width: "100%",
    maxWidth: "440px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  textLabel: {
    fontSize: "10px",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.35)",
  },
  textarea: {
    width: "100%",
    minHeight: "120px",
    boxSizing: "border-box",
    background: "#1a1a1a",
    border: "0.5px solid rgba(255,255,255,0.1)",
    borderRadius: "14px",
    padding: "18px 20px",
    fontFamily: "'Georgia', serif",
    fontSize: "18px",
    fontWeight: "300",
    lineHeight: "1.7",
    resize: "vertical",
    outline: "none",
    transition: "color 0.4s ease, border-color 0.2s",
  },
  colorIndicator: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "11px",
    color: "rgba(255,255,255,0.35)",
    letterSpacing: "0.06em",
  },
};

function ColorPickerButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const popupRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&display=swap";
    document.head.appendChild(link);

    function handleClick(e) {
      if (
        popupRef.current &&
        !popupRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleSelectColor = (color) => {
    setSelectedColor(color);
    setTimeout(() => setIsOpen(false), 200);
  };

  const previewColors = ["#E2574C", "#F5A623", "#7ED321", "#4A90D9", "#9B59B6"];

  return (
    <div style={styles.page}>
      {/* Button */}
      <div style={styles.btnArea}>
        <button
          ref={btnRef}
          style={{
            ...styles.button,
            transform: isHovered ? "scale(1.05)" : "scale(1)",
            boxShadow: isHovered
              ? "0 6px 28px rgba(240,236,228,0.18)"
              : "0 0 0 0px rgba(240,236,228,0)",
          }}
          onClick={() => setIsOpen((o) => !o)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          aria-expanded={isOpen}
        >
          <div style={styles.btnSwatches}>
            {previewColors.map((c) => (
              <div
                key={c}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: c,
                  border: "1.5px solid rgba(15,15,15,0.3)",
                  flexShrink: 0,
                }}
              />
            ))}
          </div>
          <span>Renk Seç</span>
        </button>

        {/* Popup */}
        {isOpen && (
          <div
            ref={popupRef}
            style={{
              ...styles.popup,
              transform: "translateX(-50%)",
              animation: "popIn 0.2s cubic-bezier(.34,1.56,.64,1) both",
            }}
          >
            <style>{`
              @keyframes popIn {
                from { opacity: 0; transform: translateX(-50%) scale(0.9); }
                to   { opacity: 1; transform: translateX(-50%) scale(1); }
              }
            `}</style>

            <div style={styles.popupLabel}>Palet seçin</div>

            {PALETTES.map((palette, pi) => (
              <div key={palette.name}>
                {pi > 0 && <div style={{ ...styles.divider, marginBottom: 4 }} />}
                <div style={styles.paletteRow}>
                  <div style={styles.paletteName}>{palette.name}</div>
                  <div style={styles.swatchesRow}>
                    {palette.colors.map((color) => (
                      <Swatch
                        key={color}
                        color={color}
                        selected={selectedColor === color}
                        onSelect={handleSelectColor}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Text Area */}
      <div style={styles.textAreaWrap}>
        <div style={styles.textLabel}>Metin alanı</div>
        <textarea
          style={{
            ...styles.textarea,
            color: selectedColor || "rgba(255,255,255,0.85)",
            borderColor: selectedColor
              ? `${selectedColor}44`
              : "rgba(255,255,255,0.1)",
          }}
          defaultValue="Buraya istediğiniz metni yazın. Yukarıdaki butondan bir renk seçerek bu yazının rengini değiştirebilirsiniz."
        />
        <div style={styles.colorIndicator}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: selectedColor || "rgba(255,255,255,0.2)",
              transition: "background 0.4s ease",
              flexShrink: 0,
            }}
          />
          <span>{selectedColor || "Renk seçilmedi"}</span>
        </div>
      </div>
    </div>
  );
}

function Swatch({ color, selected, onSelect }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={() => onSelect(color)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      title={color}
      aria-label={`Renk seç: ${color}`}
      style={{
        width: 30,
        height: 30,
        borderRadius: "50%",
        background: color,
        border: selected
          ? "2.5px solid #f0ece4"
          : "2px solid transparent",
        cursor: "pointer",
        flexShrink: 0,
        outline: "none",
        transform: hovered || selected ? "scale(1.18)" : "scale(1)",
        transition: "transform 0.15s cubic-bezier(.34,1.56,.64,1), border-color 0.1s",
        boxShadow: selected ? `0 0 0 3px ${color}55` : "none",
      }}
    />
  );
}
