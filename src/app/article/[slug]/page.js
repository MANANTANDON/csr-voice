'use client'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Tag, ArrowLeft, Share2 } from 'lucide-react'
import ArticleCard from '../../components/ArticleCard'

export default function ArticlePage() {
  const params = useParams()
  const [article, setArticle] = useState(null)
  const [relatedArticles, setRelatedArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`https://dev.csrvoice.com/wp-json/custom/v1/posts/${params.slug}`)
        const data = await response.json()
        
        if (data.success) {
          setArticle(data.data)
          
          // Fetch related articles from the same category
          if (data.data.categories && data.data.categories.length > 0) {
            const categorySlug = data.data.categories[0].slug
            const relatedResponse = await fetch(
              `https://dev.csrvoice.com/wp-json/custom/v1/posts/category/${categorySlug}?page=1&per_page=3`
            )
            const relatedData = await relatedResponse.json()
            
            if (relatedData.success) {
              // Filter out the current article
              const filtered = relatedData.data.filter(item => item.id !== data.data.id)
              setRelatedArticles(filtered.slice(0, 3))
            }
          }
        }
      } catch (error) {
        console.error('Error fetching article:', error)
      } finally {
        setLoading(false)
      }
    }

    if (params.slug) {
      fetchArticle()
    }
  }, [params.slug])

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const stripHtmlTags = (html) => {
    return html.replace(/<[^>]*>/g, '')
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert('Article URL copied to clipboard!')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link href="/" className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors">
            Go Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8">
          <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
            {article.categories && article.categories.length > 0 && (
              <Link 
                href={`/category/${article.categories[0].slug}`}
                className="flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium"
              >
                <Tag className="w-4 h-4" />
                {article.categories[0].name}
              </Link>
            )}
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formatDate(article.date)}
            </div>
            <button
              onClick={handleShare}
              className="flex items-center gap-1 text-gray-600 hover:text-primary-600 ml-auto"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {article.excerpt}
          </p>
        </header>

        {/* Featured Image */}
        {article.featured_image && (
          <div className="relative h-96 md:h-[500px] mb-8 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={article.featured_image}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div 
            className="article-content"
            dangerouslySetInnerHTML={{ 
              __html: article.content.replace(/<img[^>]*>/g, '').replace(/<!--more-->/g, '') 
            }} 
          />
        </div>

        {/* Author Info */}
        <div className="mt-12 p-6 bg-white rounded-xl border border-gray-200">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
              {article.author.name.charAt(0).toUpperCase()}
            </div>
            <div className="ml-4">
              <div className="font-semibold text-gray-900">{article.author.name}</div>
              <div className="text-gray-600">Author</div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <ArticleCard key={relatedArticle.id} article={relatedArticle} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}