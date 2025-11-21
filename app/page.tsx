"use client"

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Hero Section */}
      <main className="flex-1 relative w-full overflow-hidden pb-20 md:pb-48">
        <div className="relative w-full h-screen flex flex-col items-center justify-center md:justify-center">
          {/* Bull Background Image - larger on mobile */}
          <div
            className="md:hidden absolute inset-0 w-full h-full z-0 bg-no-repeat"
            style={{
              backgroundImage: "url('/bull.png')",
              backgroundSize: "120% auto",
              backgroundPosition: "center center",
            }}
          />
          <div
            className="hidden md:block absolute inset-0 w-full h-full z-0 bg-no-repeat"
            style={{
              backgroundImage: "url('/bull.png')",
              backgroundSize: "80% auto",
              backgroundPosition: "center 40%",
            }}
          />

          {/* Title Foreground - below bull on mobile, overlaid on desktop */}
          <div className="relative z-10 text-center px-4 mt-[60vh] md:mt-0">
            <h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-mono text-white drop-shadow-lg whitespace-nowrap"
              style={{ textShadow: "0 0 20px rgba(0, 0, 0, 0.5)" }}
            >
              Atreides Games
            </h1>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="flex flex-col md:flex-row md:flex-wrap md:gap-6 justify-center items-center mb-8">
            <a href="mailto:support@atreidesgames.com" className="text-white hover:underline transition-all mb-2 md:mb-0 whitespace-nowrap">
              support@atreidesgames.com
            </a>
            <div className="flex gap-4 md:gap-6 items-center">
              <a href="/privacy" className="text-white hover:underline transition-all">
                Privacy Policy
              </a>
              <span className="text-white hidden md:inline">·</span>
              <a href="/terms" className="text-white hover:underline transition-all">
                Terms of Service
              </a>
            </div>
          </nav>
          <div className="text-center text-white text-sm">
            <p>&copy; 2025 Atreides Games. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
