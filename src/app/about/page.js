import { Users, Target, Award, Globe } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To promote and highlight Corporate Social Responsibility initiatives that create meaningful impact in communities across India and beyond."
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "We believe in the power of collective action and showcase how businesses can drive positive social change."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain high standards in reporting and celebrate outstanding CSR practices that set industry benchmarks."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "While rooted in India, we cover CSR initiatives that have global implications and cross-border collaborations."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About CSR Voice
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Your trusted source for Corporate Social Responsibility news, insights, and best practices that are shaping a better tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                CSR Voice was founded with a simple yet powerful vision: to bridge the gap between corporate responsibility and public awareness. In a world where businesses have an increasingly important role in addressing social and environmental challenges, we recognized the need for a dedicated platform that could showcase, analyze, and celebrate meaningful CSR initiatives.
              </p>
              <p className="mb-6">
                Since our inception, we have been committed to providing comprehensive coverage of Corporate Social Responsibility activities across various industries in India. From environmental sustainability projects to educational initiatives, from healthcare programs to community development efforts, we bring you stories that matter.
              </p>
              <p>
                Our team of dedicated journalists and CSR experts work tirelessly to ensure that impactful stories reach the right audience, inspiring more organizations to take meaningful action and helping stakeholders make informed decisions about corporate partnerships and investments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape our approach to CSR journalism and community engagement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <value.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Impact</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Through our dedicated coverage, we've helped amplify the reach and impact of numerous CSR initiatives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Articles Published</div>
              <div className="text-gray-600">Comprehensive coverage of CSR initiatives across India</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">200+</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Companies Featured</div>
              <div className="text-gray-600">From startups to Fortune 500 companies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Industries Covered</div>
              <div className="text-gray-600">Spanning technology, manufacturing, healthcare, and more</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Have a CSR Story to Share?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We're always looking for impactful CSR initiatives to feature. If your organization has a story that could inspire others, we'd love to hear from you.
          </p>
          <a 
            href="/contact" 
            className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-block"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}