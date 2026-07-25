import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ex Libris — Privacy Policy",
  description: "How Ex Libris handles your reading data.",
}

export default function ExLibrisPrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-mono mb-2">Ex Libris — Privacy Policy</h1>
        <p className="font-sans text-gray-500 mb-8">Last updated: 25 July 2026</p>

        <div className="space-y-6 font-sans text-gray-300 leading-relaxed">
          <p>
            Ex Libris is a book-tracking app published by Atreides LLC (the &quot;Service Provider&quot;). This policy
            explains what the app collects, why, and how to get rid of it. We do not sell your data, we do not use it
            for advertising, and we do not track you across other apps or websites.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Using Ex Libris without an account</h2>
            <p>
              You can use Ex Libris without signing in. In that case your books, reading progress, highlights, notes,
              and any photos you scan stay on your device and are never sent to us.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">What we collect when you sign in</h2>
            <p className="mb-4">
              Signing in (with Apple or Google) creates an account so your library can be backed up and so you can
              share with friends. We then store:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">Account details</strong> — the email address and name supplied by Apple
                or Google, plus the handle, display name, bio, and bookplate style you choose. If you use Apple&apos;s
                &quot;Hide My Email&quot;, we only ever see the relay address.
              </li>
              <li>
                <strong className="text-white">Your library</strong> — books, reading progress, dates, ratings, notes,
                highlights, and reading sessions, so they restore on a new phone.
              </li>
              <li>
                <strong className="text-white">Cover images you scan</strong>, stored privately and readable only by
                you.
              </li>
              <li>
                <strong className="text-white">Social activity</strong> — friendships, comments, likes, book
                recommendations, and notifications.
              </li>
              <li>
                <strong className="text-white">Safety records</strong> — reports you file and readers you block, so we
                can act on them.
              </li>
              <li>
                <strong className="text-white">A push notification token</strong>, if you enable notifications.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">What other people can see</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your name, handle, bio, and bookplate are visible to other readers.</li>
              <li>
                What you&apos;re currently reading is visible per your sharing setting (everyone, or friends only) in
                Settings.
              </li>
              <li>Your shelf and saved quotes are visible to friends only.</li>
              <li>Comments you post are visible to everyone, or to friends only, as you choose when posting.</li>
              <li>Blocked readers cannot see your profile or reach you.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Who processes your data</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">Supabase</strong> — hosts the database, authentication, and private file
                storage behind the app.
              </li>
              <li>
                <strong className="text-white">OneSignal</strong> — delivers push notifications, if you enable them.
              </li>
              <li>
                <strong className="text-white">Google Books and Open Library</strong> — searched to look up book
                details. These requests contain the title, author, or barcode being looked up, not your identity.
              </li>
            </ul>
            <p className="mt-4">We use no analytics, advertising, or tracking SDKs.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Children</h2>
            <p>
              Ex Libris is not directed at children under 13, and we do not knowingly collect information from them.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Keeping and deleting your data</h2>
            <p>
              We keep your data for as long as your account exists. You can delete your account at any time in{" "}
              <strong className="text-white">Settings → Delete account</strong>. That permanently erases your profile,
              library backup, uploaded covers, comments, likes, friendships, and notifications from our servers. Books
              on your phone stay on your phone. You can also email us and we&apos;ll do it for you.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Your rights</h2>
            <p>
              Depending on where you live, you may have the right to access, correct, export, or delete your personal
              data. Email us and we&apos;ll help.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Changes</h2>
            <p>If this policy changes materially, we&apos;ll update this page and the date above.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
            <p>
              Questions, requests, or concerns:{" "}
              <a href="mailto:exlibris@atreidesgames.com" className="text-white underline">
                exlibris@atreidesgames.com
              </a>
            </p>
          </div>

          <p className="pt-8 border-t border-gray-800 text-gray-500">
            Ex Libris — Atreides LLC ·{" "}
            <a href="/exlibris/terms" className="text-gray-300 underline">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
