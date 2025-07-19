'use client'
import { useState, useEffect } from 'react'
import ArticleCard from './components/ArticleCard'
import Pagination from './components/Pagination'
import Link from 'next/link'
import { Calendar } from 'lucide-react'

export default function HomePage() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [pagination, setPagination] = useState({})
  const [currentPage, setCurrentPage] = useState(1)

  const fetchArticles = async (page = 1) => {
    setLoading(true)
    try {
      const response = await fetch(`https://dev.csrvoice.com/wp-json/custom/v1/posts?page=${page}&per_page=12`)
      const data = await response.json()
      
      if (data.success && data.data) {
        setArticles(data.data || [])
        setPagination(data.pagination || {})
      }
    } catch (error) {
      console.error('Error fetching articles:', error)
      setArticles([])
      setPagination({})
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchArticles(currentPage)
  }, [currentPage])

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const formatDate = (dateString) => {
    if (!dateString) return ''
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    })
  }

  const getReadTime = (content) => {
    if (!content) return '2 min read'
    const wordCount = content.replace(/<[^>]*>/g, '').split(' ').length
    const readTime = Math.ceil(wordCount / 200)
    return `${readTime} min read`
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

  return (
    <div className="bg-white min-h-screen">
      {/* Main Content Section */}
      <section className="py-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {articles.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Featured Story - Left Side (66%) */}
              <div className="lg:col-span-2">
                <div className="relative">
                  {/* Featured Image */}
                  {articles[0].featured_image && (
                    <div className="relative h-80 mb-4 rounded-lg overflow-hidden">
                      <img
                        src={articles[0].featured_image}
                        alt={articles[0].title || 'Featured article'}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-red-600 text-white px-3 py-1 text-sm font-medium rounded">
                          {articles[0].categories?.[0]?.name || 'News'}
                        </span>
                      </div>
                    </div>
                  )}
                  
                  {/* Article Meta */}
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                    <span>{formatDate(articles[0].date)}</span>
                    <span>{getReadTime(articles[0].content)}</span>
                  </div>
                  
                  {/* Article Title */}
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                    <Link 
                      href={`/article/${articles[0].slug}`}
                      className="hover:text-gray-700 transition-colors"
                    >
                      {articles[0].title}
                    </Link>
                  </h1>
                  
                  {/* Article Excerpt */}
                  <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                    {articles[0].excerpt}
                  </p>
                  
                  {/* Read More Link */}
                  <Link 
                    href={`/article/${articles[0].slug}`}
                    className="text-red-600 hover:text-red-700 font-medium transition-colors"
                  >
                    Read more
                  </Link>
                </div>
              </div>

              {/* Latest Stories - Right Side (33%) */}
              <div className="lg:col-span-1">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Latest Stories</h2>
                  <Link 
                    href="/all-articles" 
                    className="text-red-600 hover:text-red-700 font-medium text-sm transition-colors"
                  >
                    See All
                  </Link>
                </div>
                
                <div className="space-y-6">
                  {articles.slice(1, 7).map((article, index) => (
                    <div key={article.id} className="group">
                      <div className="flex gap-4">
                        {/* Article Image */}
                        <div className="flex-shrink-0 w-20 h-20 relative rounded overflow-hidden">
                          {article.featured_image ? (
                            <img
                              src={article.featured_image}
                              alt={article.title || 'Article image'}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                              <span className="text-gray-400 text-xs">No image</span>
                            </div>
                          )}
                        </div>
                        
                        {/* Article Content */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-gray-900 text-base mb-2 line-clamp-2 leading-tight group-hover:text-gray-700 transition-colors">
                            <Link href={`/article/${article.slug}`}>
                              {article.title}
                            </Link>
                          </h3>
                          
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span>{getReadTime(article.content)}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Separator line for all but last item */}
                      {index < 5 && <div className="border-b border-gray-100 mt-6"></div>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">No Articles Found</h2>
              <p className="text-gray-600">Check back later for new CSR stories and insights.</p>
            </div>
          )}
        </div>
      </section>

      {/* More Articles Section */}
      {articles.length > 7 && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                More Stories
              </h2>
              <p className="text-gray-600">
                Explore additional CSR news and insights
              </p>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
                    <div className="h-48 bg-gray-300"></div>
                    <div className="p-6">
                      <div className="h-4 bg-gray-300 rounded mb-2"></div>
                      <div className="h-6 bg-gray-300 rounded mb-2"></div>
                      <div className="h-4 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {articles.slice(7).map((article) => (
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
      )}
    </div>
  )
}