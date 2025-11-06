"use client"

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Hero Section */}
      <main className="flex-1 relative w-full overflow-hidden">
        <div className="relative w-full h-screen flex flex-col items-center justify-center">
          {/* Bull Background Image */}
          <div
            className="absolute inset-0 w-full h-full z-0 bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage: "url('/bull.png')",
            }}
          />

          {/* Title Foreground - overlaid on bull */}
          <div className="relative z-10 text-center px-4">
            <h1
              className="text-7xl md:text-8xl font-mono text-white drop-shadow-lg"
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
          <nav className="flex flex-wrap gap-6 justify-center mb-8">
            <a href="mailto:hello@atreidesgames.com" className="text-white hover:underline transition-all">
              hello@atreidesgames.com
            </a>
            <span className="text-white">·</span>
            <a href="/privacy" className="text-white hover:underline transition-all">
              Privacy Policy
            </a>
            <span className="text-white">·</span>
            <a href="/terms" className="text-white hover:underline transition-all">
              Terms of Service
            </a>
          </nav>
          <div className="text-center text-white text-sm">
            <p>&copy; 2025 Atreides Games. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
