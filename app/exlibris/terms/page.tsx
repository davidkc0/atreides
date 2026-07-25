import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ex Libris — Terms of Service",
  description: "The rules for using Ex Libris.",
}

export default function ExLibrisTerms() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-mono mb-2">Ex Libris — Terms of Service</h1>
        <p className="font-sans text-gray-500 mb-8">Last updated: 25 July 2026</p>

        <div className="space-y-6 font-sans text-gray-300 leading-relaxed">
          <p>
            These terms are an agreement between you and Atreides LLC (&quot;we&quot;, &quot;us&quot;) covering your
            use of the Ex Libris app. By signing in you agree to them. If you don&apos;t agree, you can still use the
            app without an account, or stop using it.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Your account</h2>
            <p>
              You must be at least 13 years old to create an account. Keep your sign-in credentials secure — activity
              under your account is your responsibility. Choose a handle and display name that aren&apos;t misleading
              or offensive, and don&apos;t impersonate anyone.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Your content</h2>
            <p>
              Your books, notes, highlights, and comments remain yours. By posting them you grant us the limited
              permission needed to store your content and display it to the people you&apos;ve chosen to share it
              with. You are responsible for what you post, and for having the right to post it — including any
              passages you scan or quote from books.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Objectionable content — zero tolerance</h2>
            <div className="border-l-4 border-red-700 pl-4 my-4">
              <p className="text-white font-bold">
                There is no tolerance for objectionable content or abusive behaviour in Ex Libris. Accounts that post
                it are removed.
              </p>
            </div>
            <p className="mb-4">You agree not to post, share, or send content that is:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>harassing, bullying, threatening, or intended to intimidate;</li>
              <li>
                hateful toward people on the basis of race, ethnicity, national origin, religion, sex, gender identity,
                sexual orientation, disability, age, or any similar characteristic;
              </li>
              <li>sexually explicit, or any depiction or solicitation involving minors;</li>
              <li>violent, gratuitously graphic, or promoting self-harm;</li>
              <li>illegal, fraudulent, deceptive, spam, or a scam;</li>
              <li>infringing on someone else&apos;s copyright, trademark, or privacy;</li>
              <li>someone else&apos;s private information posted without their consent.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Reporting, blocking, and enforcement</h2>
            <p>
              Every comment can be reported (press and hold it), and every reader can be reported or blocked from their
              profile. Blocking hides that reader&apos;s content from you and yours from them; you can undo it in{" "}
              <strong className="text-white">Settings → Blocked readers</strong>.
            </p>
            <p className="mt-4">
              We review reports and act on objectionable content{" "}
              <strong className="text-white">within 24 hours</strong> of a report — removing the content, and
              suspending or removing the account responsible. We may remove content or terminate accounts that violate
              these terms, with or without notice. You can also report content by emailing us.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Book information</h2>
            <p>
              Book details and cover images come from third-party sources such as Google Books and Open Library. We
              don&apos;t guarantee they&apos;re accurate or complete.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Backup is a convenience, not a guarantee</h2>
            <p>
              Signing in backs your library up to our servers so it restores on a new phone. We take reasonable care,
              but we can&apos;t promise the service will never be unavailable or lose data. Keep anything irreplaceable
              somewhere else too.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Ending things</h2>
            <p>
              You can delete your account at any time in{" "}
              <strong className="text-white">Settings → Delete account</strong>, which erases your data from our
              servers. We may suspend or end your access if you break these terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Disclaimer and liability</h2>
            <p>
              Ex Libris is provided &quot;as is&quot;, without warranties of any kind to the extent permitted by law.
              To the extent permitted by law, we are not liable for indirect or consequential damages arising from your
              use of the app.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Changes</h2>
            <p>
              We may update these terms; material changes will be posted here with a new date. Continuing to use the
              app after that means you accept the update.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
            <p>
              <a href="mailto:exlibris@atreidesgames.com" className="text-white underline">
                exlibris@atreidesgames.com
              </a>
            </p>
          </div>

          <p className="pt-8 border-t border-gray-800 text-gray-500">
            Ex Libris — Atreides LLC ·{" "}
            <a href="/exlibris/privacy" className="text-gray-300 underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
