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

      {/* Apps */}
      <section id="apps" className="bg-black border-t border-border py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-mono text-white mb-10 text-center">Our Apps</h2>

          <div className="space-y-6">
            {/* Ex Libris */}
            <div className="border border-border rounded-lg p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-mono text-white mb-3">Ex Libris</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Ex Libris is a book tracking app for iPhone. Scan a book&apos;s barcode or cover to add it to your
                shelf, follow your reading progress page by page, scan and keep the passages you love, and see what
                your friends are reading. Signing in with Apple or Google backs your library up so it restores on a
                new phone, and lets you add friends, recommend books, and talk about what you&apos;re reading
                together.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <a href="/exlibris/privacy" className="text-white underline hover:no-underline">
                  Privacy Policy
                </a>
                <a href="/exlibris/terms" className="text-white underline hover:no-underline">
                  Terms of Service
                </a>
                <a href="mailto:exlibris@atreidesgames.com" className="text-white underline hover:no-underline">
                  exlibris@atreidesgames.com
                </a>
              </div>
            </div>

            {/* App Store titles */}
            {[
              {
                name: "Singularity: Black Hole Arcade",
                icon: "/app-icons/singularity.jpg",
                url: "https://apps.apple.com/us/app/singularity-black-hole-arcade/id6755376129",
                blurb:
                  "A hypnotic arcade game about becoming a cosmic force of nature. Guide a hungry black hole through vibrant nebulas, match your colour to nearby stars to absorb them and grow, and push your luck with every move — all to a synth-wave soundtrack that evolves as you do.",
              },
              {
                name: "Arrow Maze: Line Escape",
                icon: "/app-icons/arrow-maze.jpg",
                url: "https://apps.apple.com/us/app/arrow-maze-line-escape/id6780129121",
                blurb:
                  "A calm but challenging logic puzzle about finding the right order. Tap a line to send it moving along its arrow; if something blocks the way, clear a different path first. Simple rules, dense mazes, and the quiet satisfaction of reading the board correctly.",
              },
              {
                name: "Barrier — Strategy Board Game",
                icon: "/app-icons/barrier.jpg",
                url: "https://apps.apple.com/us/app/barrier-strategy-board-game/id6762404861",
                blurb:
                  "A fresh abstract strategy game for people who love chess and checkers. Your opponent has built two barriers between you and their side of the board — tear them down piece by piece and get two of your own across before they do. Three piece types, a handful of rules, a world of tactics.",
              },
            ].map((app) => (
              <div key={app.name} className="border border-border rounded-lg p-6 md:p-8">
                <div className="flex items-start gap-4 md:gap-6">
                  <img
                    src={app.icon}
                    alt={`${app.name} app icon`}
                    width={88}
                    height={88}
                    className="w-16 h-16 md:w-22 md:h-22 rounded-2xl flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <h3 className="text-xl md:text-2xl font-mono text-white mb-3">{app.name}</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">{app.blurb}</p>
                    <a
                      href={app.url}
                      className="text-white underline hover:no-underline text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on the App Store
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
