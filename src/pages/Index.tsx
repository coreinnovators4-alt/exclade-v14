import { useState, useEffect } from "react";

const greetings = [
  { text: "Hello", lang: "English" },
  { text: "Hola", lang: "Spanish" },
  { text: "Bonjour", lang: "French" },
  { text: "こんにちは", lang: "Japanese" },
  { text: "مرحبا", lang: "Arabic" },
  { text: "Ciao", lang: "Italian" },
  { text: "안녕하세요", lang: "Korean" },
  { text: "Hej", lang: "Swedish" },
  { text: "Olá", lang: "Portuguese" },
  { text: "Привет", lang: "Russian" },
  { text: "你好", lang: "Chinese" },
  { text: "Hallo", lang: "German" },
];

const Index = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex((i) => (i + 1) % greetings.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* Floating decorative orbs */}
      <div className="absolute top-[15%] left-[10%] w-64 h-64 rounded-full bg-primary/10 animate-float" />
      <div className="absolute bottom-[20%] right-[12%] w-48 h-48 rounded-full bg-accent/10 animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-[60%] left-[60%] w-32 h-32 rounded-full bg-primary/5 animate-float" style={{ animationDelay: "0.8s" }} />

      <div className="relative z-10 text-center max-w-2xl">
        {/* Waving hand */}
        <div className="text-6xl mb-8 inline-block animate-wave origin-bottom-right">
          👋
        </div>

        {/* Main greeting */}
        <div className="h-32 flex items-center justify-center mb-6">
          <h1
            className="font-display text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none"
            style={{
              background: "var(--hero-gradient)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(12px)",
              filter: visible ? "blur(0px)" : "blur(4px)",
              transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {greetings[currentIndex].text}
          </h1>
        </div>

        {/* Language label */}
        <p
          className="text-muted-foreground font-body text-lg tracking-wide uppercase"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.3s ease",
            transitionDelay: visible ? "0.15s" : "0s",
          }}
        >
          {greetings[currentIndex].lang}
        </p>

        {/* Subtitle */}
        <p className="mt-12 text-foreground/70 font-body text-xl md:text-2xl max-w-md mx-auto leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          The world says hi — in every language, every moment.
        </p>

        {/* Greeting grid */}
        <div className="mt-16 flex flex-wrap justify-center gap-3 opacity-0 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          {greetings.map((g, i) => (
            <button
              key={g.lang}
              onClick={() => {
                setVisible(false);
                setTimeout(() => {
                  setCurrentIndex(i);
                  setVisible(true);
                }, 300);
              }}
              className={`px-4 py-2 rounded-lg font-body text-sm transition-all duration-200 active:scale-95 ${
                i === currentIndex
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-card text-foreground/60 hover:bg-card hover:text-foreground hover:shadow-md"
              }`}
            >
              {g.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
