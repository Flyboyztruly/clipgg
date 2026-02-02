import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-gray-400 mb-8">Effective Date: January 6, 2026</p>

        <p className="text-gray-300 mb-6">
          Sniply respects your privacy. This Privacy Policy explains how we
          collect, use, and protect information when you use our services.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Information We Collect
        </h2>
        <p className="text-gray-300 mb-4">
          When you authenticate with TikTok, we may receive limited information
          such as:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>TikTok user ID</li>
          <li>Public profile information (username, avatar)</li>
          <li>Authorized access tokens</li>
        </ul>
        <p className="text-gray-300 mt-4">
          We do not collect private messages, passwords, or non-public content.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          How We Use Information
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Authenticate users</li>
          <li>Provide clip automation and analytics</li>
          <li>Improve service performance</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Data Storage & Security
        </h2>
        <p className="text-gray-300">
          We store data securely and only for as long as necessary to provide the
          service. Access is restricted and monitored.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Data Sharing
        </h2>
        <p className="text-gray-300">
          Sniply does not sell or share user data with third parties, except
          where required by law or to comply with platform requirements.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Data Deletion
        </h2>
        <p className="text-gray-300">
          Users may request deletion of their data by contacting:
        </p>
        <p className="text-purple-400 mt-2">
          Email: support@sniply.com
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Changes
        </h2>
        <p className="text-gray-300 mb-10">
          This policy may be updated. Changes will be posted on this page.
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
