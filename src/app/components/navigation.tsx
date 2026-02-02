import { Scissors } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-lg border-b border-purple-500/20 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
              <Scissors className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-2xl">Sniply</span>
          </div>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-gray-400 hover:text-purple-400 transition-colors">
              Features
            </a>

            <a href="#pricing" className="text-gray-400 hover:text-purple-400 transition-colors">
              Pricing
            </a>

            <a href="/privacy-policy" className="text-gray-400 hover:text-purple-400 transition-colors">
              Privacy Policy
            </a>

            <a href="/terms-of-service" className="text-gray-400 hover:text-purple-400 transition-colors">
              Terms of Service
            </a>

            <a
              href="https://discord.gg/kZqMTg79"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              Sniply Discord
            </a>

            <a
              href="https://discord.gg/kZqMTg79"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-lg hover:from-purple-500 hover:to-purple-600 transition-all"
            >
              Join Discord
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
