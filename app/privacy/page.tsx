export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-mono mb-8">Privacy Policy</h1>

        <div className="space-y-6 font-sans text-gray-300 leading-relaxed">
          <p>
            This privacy policy is applicable to the mobile applications developed by Atreides LLC (hereinafter
            referred to as "Service Provider"), including Singularity, Arrow Maze Line Escape, and The Lobby — Live
            Voice Chat (each hereinafter referred to as "Application"). Singularity and Arrow Maze Line Escape are
            provided as Ad Supported services. These services are provided "AS IS".
          </p>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              What information does the Application obtain and how is it used?
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">User Provided Information</h3>
                <p>
                  The Application acquires the information you supply when you download and register the Application.
                  Registration with the Service Provider is not mandatory for Singularity or Arrow Maze Line Escape.
                  The Lobby requires an account, created via Sign in with Apple or Google Sign-In; when you sign in,
                  the Service Provider receives an account identifier and, depending on your provider settings, your
                  email address. In The Lobby you also choose a public username ("callsign") and may create a profile
                  emblem, add friends, and send voice notes — this content is stored to provide the service.
                </p>
                <p className="mt-2">
                  The Service Provider may also use the information you provided them to contact you from time to time
                  to provide you with important information, required notices and marketing promotions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">Voice Chat (The Lobby)</h3>
                <p>
                  The Lobby transmits your live voice to other users in your lobby in real time via our voice
                  infrastructure provider (Agora). Live voice is not recorded or stored by the Service Provider, with
                  one exception: the app keeps a short rolling buffer (roughly the last 45 seconds) on your device,
                  and if a user files an abuse report, that clip is uploaded and attached to the report as evidence.
                  Report audio is retained for up to 30 days and then deleted. Voice notes you deliberately send to
                  friends are stored until delivered and played.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">Automatically Collected Information</h3>
                <p>
                  In addition, the Application may collect certain information automatically, including, but not limited
                  to, the type of mobile device you use, your mobile devices unique device ID, the IP address of your
                  mobile device, your mobile operating system, the type of mobile Internet browsers you use, and
                  information about the way you use the Application. For The Lobby this includes gameplay-style
                  progression data such as time spent in lobbies, XP, rank, and achievements.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">Push Notifications (The Lobby)</h3>
                <p>
                  Push notifications are optional and delivered via OneSignal. If you enable them, a push token for
                  your device is associated with your account. You can disable notifications at any time in iOS
                  Settings or in the in-app notification preferences.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Does the Application collect precise real time location information of the device?
            </h2>
            <p>
              No Application gathers precise information about the location of your mobile device. The Lobby uses a
              coarse region (e.g., country) solely to match you into nearby voice lobbies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Safety, Moderation, and Blocking (The Lobby)</h2>
            <p>
              To keep voice lobbies safe, The Lobby provides in-app muting, blocking, and reporting. When you report a
              user, the report (including the reason, any details you add, and the evidence audio clip described
              above) is reviewed by the Service Provider. Information about enforcement actions (such as suspensions
              or bans) is retained as necessary to operate the service. Blocked-user relationships are stored so that
              blocked users are never matched into your lobbies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">What are my opt-out rights?</h2>
            <p>
              You can stop all collection of information by the Application easily by uninstalling the Application. You
              may use the standard uninstall processes as may be available as part of your mobile device or via the
              mobile application marketplace or network. The Lobby additionally provides in-app account deletion
              (Settings → Delete Account), which permanently deletes your account, callsign, progression, friends, and
              emblems.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Data Retention Policy</h2>
            <p>
              The Service Provider retains user-provided data and automatically collected data for the period necessary
              to serve you, unless a longer retention period is required or permitted by law. Report evidence audio is
              retained for up to 30 days. Deleting your account in The Lobby removes your personal data from the live
              service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Children</h2>
            <p>
              The Applications are not directed at children under 13, and the Service Provider does not knowingly
              collect personal information from children under 13. The Lobby involves live, unmoderated voice chat
              with other users and is intended for users aged 17 and over.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Third Party Services</h2>
            <p>
              The Applications rely on third-party services that have their own privacy policies. Depending on the
              Application, these include{" "}
              <a
                href="https://support.google.com/admob/answer/6128543"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                AdMob
              </a>{" "}
              (Singularity, Arrow Maze Line Escape),{" "}
              <a
                href="https://www.agora.io/en/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                Agora
              </a>
              ,{" "}
              <a
                href="https://supabase.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                Supabase
              </a>
              ,{" "}
              <a
                href="https://onesignal.com/privacy_policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                OneSignal
              </a>
              ,{" "}
              <a
                href="https://www.apple.com/legal/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                Apple
              </a>{" "}
              (Sign in with Apple, Game Center), and{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                Google
              </a>{" "}
              (Google Sign-In) (The Lobby). Please note that the Application may contain links to third-party sites,
              products, and services. This Privacy Policy does not apply to third-party sites, and the Service Provider
              is not responsible for their practices.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Changes to Privacy Policy</h2>
            <p>
              The Service Provider may update this privacy policy from time to time. Thus, you are advised to review
              this page periodically for any changes. The Service Provider will notify you of any changes by posting the
              new Privacy Policy on this page.
            </p>
            <p className="mt-2">This privacy policy is effective as of 2026-07-15</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p>
              If you have any questions or suggestions about this Privacy Policy, please contact the Service Provider at{" "}
              <a href="mailto:support@atreidesgames.com" className="text-white hover:underline">
                support@atreidesgames.com
              </a>
              .
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <a href="/" className="text-white hover:underline transition-all">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}
