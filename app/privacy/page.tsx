export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-mono mb-8">Privacy Policy</h1>

        <div className="space-y-6 font-sans text-gray-300 leading-relaxed">
          <p>
            This privacy policy is applicable to the Singularity app (hereinafter referred to as "Application") for
            mobile devices, which was developed by Atreides LLC (hereinafter referred to as "Service Provider") as an Ad
            Supported service. This service is provided "AS IS".
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
                  Registration with the Service Provider is not mandatory. However, bear in mind that you might not be
                  able to utilize some of the features offered by the Application unless you register with them.
                </p>
                <p className="mt-2">
                  The Service Provider may also use the information you provided them to contact you from time to time
                  to provide you with important information, required notices and marketing promotions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">Automatically Collected Information</h3>
                <p>
                  In addition, the Application may collect certain information automatically, including, but not limited
                  to, the type of mobile device you use, your mobile devices unique device ID, the IP address of your
                  mobile device, your mobile operating system, the type of mobile Internet browsers you use, and
                  information about the way you use the Application.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Does the Application collect precise real time location information of the device?
            </h2>
            <p>This Application does not gather precise information about the location of your mobile device.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">What are my opt-out rights?</h2>
            <p>
              You can stop all collection of information by the Application easily by uninstalling the Application. You
              may use the standard uninstall processes as may be available as part of your mobile device or via the
              mobile application marketplace or network.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Data Retention Policy</h2>
            <p>
              The Service Provider retains user-provided data and automatically collected data for the period necessary
              to serve you, unless a longer retention period is required or permitted by law.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Third Party Services</h2>
            <p>
              Please note that the Application may contain links to third-party sites, products, and services. This
              Privacy Policy does not apply to third-party sites, and the Service Provider is not responsible for their
              practices.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Changes to Privacy Policy</h2>
            <p>
              The Service Provider may update this privacy policy from time to time. Thus, you are advised to review
              this page periodically for any changes. The Service Provider will notify you of any changes by posting the
              new Privacy Policy on this page.
            </p>
            <p className="mt-2">This privacy policy is effective as of 2025-11-06</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p>
              If you have any questions or suggestions about this Privacy Policy, please contact the Service Provider at{" "}
              <a href="mailto:hello@atreidesgames.com" className="text-white hover:underline">
                hello@atreidesgames.com
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
