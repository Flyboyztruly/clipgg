import { Link } from "react-router-dom";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-gray-400 mb-8">Effective Date: January 6, 2026</p>

        <p className="text-gray-300 mb-6">
          By accessing or using Sniply, you agree to these Terms of Service.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Service Description
        </h2>
        <p className="text-gray-300">
          Sniply provides tools for managing and analyzing short-form video
          clips, including integrations with platforms such as TikTok.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          User Responsibilities
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>You must comply with TikTok’s Terms of Service</li>
          <li>You may not misuse or abuse the platform</li>
          <li>You are responsible for content you submit</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Account Access
        </h2>
        <p className="text-gray-300">
          Access to platform features requires user authorization. Sniply does
          not access accounts without permission.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Termination
        </h2>
        <p className="text-gray-300">
          We reserve the right to suspend or terminate access for violations of
          these terms.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Disclaimer
        </h2>
        <p className="text-gray-300">
          Sniply is provided “as is” without warranties of any kind.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Limitation of Liability
        </h2>
        <p className="text-gray-300 mb-10">
          Sniply is not liable for damages arising from the use or inability to
          use the service.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Changes
        </h2>
        <p className="text-gray-300 mb-10">
          We may update these terms. Continued use constitutes acceptance.
        </p>

        <Link
          to="/"
          className="text-purple-400 hover:text-purple-300 transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
