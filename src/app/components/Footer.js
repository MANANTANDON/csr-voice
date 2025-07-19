import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-primary-600 text-white px-3 py-1 rounded-lg font-bold text-xl">
                CSR
              </div>
              <span className="text-2xl font-bold">Voice</span>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Your trusted source for Corporate Social Responsibility news, insights, and best practices in India and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <div className="space-y-2">
              <Link href="/category/environment" className="block text-gray-300 hover:text-white transition-colors">
                Environment
              </Link>
              <Link href="/category/news" className="block text-gray-300 hover:text-white transition-colors">
                News
              </Link>
              <Link href="/category/technology" className="block text-gray-300 hover:text-white transition-colors">
                Technology
              </Link>
              <Link href="/category/sustainability" className="block text-gray-300 hover:text-white transition-colors">
                Sustainability
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 CSR Voice. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}