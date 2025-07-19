'use client'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import ArticleCard from '../../components/ArticleCard'
import Pagination from '../../components/Pagination'
import { Tag } from 'lucide-react'

export default function CategoryPage() {
  const params = useParams()
  const [articles, setArticles] = useState([])
  const [category, setCategory] = useState(null)
  const [loading, setLoading] = useState(true)
  const [pagination, setPagination] = useState({})
  const [currentPage, setCurrentPage] = useState(1)

  const fetchCategoryArticles = async (page = 1) => {
    setLoading(true)
    try {
      const response = await fetch(
        `https://dev.csrvoice.com/wp-json/custom/v1/posts/category/${params.slug}?page=${page}&per_page=12`
      )
      const data = await response.json()
      
      if (data.success) {
        setArticles(data.data || [])
        setCategory(data.category || null)
        setPagination(data.pagination || {})
      }
    } catch (error) {
      console.error('Error fetching category articles:', error)
      setArticles([])
      setCategory(null)
      setPagination({})
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (params.slug) {
      fetchCategoryArticles(currentPage)
    }
  }, [params.slug, currentPage])

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const getCategoryDescription = (categorySlug) => {
    const descriptions = {
      environment: "Discover environmental sustainability initiatives, green practices, and eco-friendly CSR programs making a positive impact on our planet.",
      news: "Stay updated with the latest Corporate Social Responsibility news, announcements, and developments from companies across India.",
      technology: "Explore how technology is driving social change and enabling innovative CSR solutions for better community impact.",
      education: "Learn about educational CSR initiatives that are empowering communities through knowledge and skill development.",
      health: "Read about healthcare CSR programs and initiatives improving public health and wellbeing across communities.",
      sustainability: "Comprehensive coverage of sustainability practices, circular economy initiatives, and long-term environmental strategies."
    }
    return descriptions[categorySlug] || "Explore articles in this category to learn more about CSR initiatives and social impact."
  }

  if (loading && articles.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading articles...</p>
        </div>
      </div>
    )
  }

  if (!category && !loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <p className="text-gray-600 mb-8">The category you're looking for doesn't exist.</p>
          <Link href="/" className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors">
            Go Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Category Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-primary-500 px-4 py-2 rounded-full mb-6">
              <Tag className="w-5 h-5 mr-2" />
              <span className="font-medium">Category</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 capitalize">
              {category?.name || params.slug.replace('-', ' ')}
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              {getCategoryDescription(params.slug)}
            </p>
            <div className="mt-8">
              <span className="text-primary-200">
                {pagination?.total_posts || 0} articles found
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
                  <div className="h-48 bg-gray-300"></div>
                  <div className="p-6">
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-6 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : articles.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Tag className="w-12 h-12 text-gray-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">No Articles Found</h2>
              <p className="text-gray-600 mb-8">
                There are no articles in this category yet. Check back later for updates.
              </p>
              <Link 
                href="/" 
                className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Browse All Articles
              </Link>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>

              {pagination && pagination.total_pages > 1 && (
                <Pagination
                  currentPage={pagination?.current_page || 1}
                  totalPages={pagination?.total_pages || 1}
                  hasNext={pagination?.has_next || false}
                  hasPrev={pagination?.has_prev || false}
                  onPageChange={handlePageChange}
                />
              )}
            </>
          )}
        </div>
      </section>
    </div>
  )
}