import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Tag } from 'lucide-react'

export default function ArticleCard({ article, featured = false }) {
  if (!article) return null
  
  const formatDate = (dateString) => {
    if (!dateString) return ''
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (featured) {
    return (
      <div className="relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-96">
          <Image
            src={article.featured_image || '/placeholder-image.jpg'}
            alt={article.title || 'Article image'}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="flex items-center gap-4 mb-3">
              {article.categories && article.categories.length > 0 && (
                <span className="bg-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                  {article.categories[0].name}
                </span>
              )}
              <div className="flex items-center gap-1 text-sm">
                <Calendar className="w-4 h-4" />
                {formatDate(article.date)}
              </div>
            </div>
            <Link href={`/article/${article.slug}`}>
              <h2 className="text-2xl font-bold mb-2 hover:text-primary-300 transition-colors line-clamp-3">
                {article.title}
              </h2>
            </Link>
            <p className="text-gray-200 line-clamp-2">{article.excerpt || ''}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <Image
          src={article.featured_image || '/placeholder-image.jpg'}
          alt={article.title || 'Article image'}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
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
        </div>
        
        <Link href={`/article/${article.slug}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-primary-600 transition-colors line-clamp-2">
            {article.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 line-clamp-3 mb-4">{article.excerpt || ''}</p>
        
        <Link 
          href={`/article/${article.slug}`}
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
        >
          Read More →
        </Link>
      </div>
    </article>
  )
}