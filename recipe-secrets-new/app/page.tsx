
export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a",
        color: "white",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <h1
        style={{
          fontSize: "64px",
          marginBottom: "20px",
          color: "#38bdf8",
        }}
      >
        Benefactor Academy 🚀
      </h1>

      <p
        style={{
          fontSize: "22px",
          maxWidth: "700px",
          lineHeight: "1.6",
        }}
      >
        Learn skills, build businesses, and grow with modern AI education.
      </p>
    </main>
  );
}