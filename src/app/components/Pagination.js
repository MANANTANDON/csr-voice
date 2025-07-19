'use client'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Pagination({ currentPage, totalPages, onPageChange, hasNext, hasPrev }) {
  const getPageNumbers = () => {
    const pages = []
    const showPages = 5
    let start = Math.max(1, currentPage - Math.floor(showPages / 2))
    let end = Math.min(totalPages, start + showPages - 1)
    
    if (end - start + 1 < showPages) {
      start = Math.max(1, end - showPages + 1)
    }
    
    for (let i = start; i <= end; i++) {
      pages.push(i)
    }
    
    return pages
  }

  return (
    <div className="flex items-center justify-center space-x-2 mt-12">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={!hasPrev}
        className={`flex items-center px-3 py-2 rounded-lg font-medium ${
          hasPrev
            ? 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
            : 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
        }`}
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        Previous
      </button>

      {/* Page Numbers */}
      <div className="flex space-x-1">
        {currentPage > 3 && (
          <>
            <button
              onClick={() => onPageChange(1)}
              className="px-3 py-2 rounded-lg font-medium bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
            >
              1
            </button>
            {currentPage > 4 && (
              <span className="px-3 py-2 text-gray-500">...</span>
            )}
          </>
        )}

        {getPageNumbers().map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-2 rounded-lg font-medium ${
              page === currentPage
                ? 'bg-primary-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
            }`}
          >
            {page}
          </button>
        ))}

        {currentPage < totalPages - 2 && (
          <>
            {currentPage < totalPages - 3 && (
              <span className="px-3 py-2 text-gray-500">...</span>
            )}
            <button
              onClick={() => onPageChange(totalPages)}
              className="px-3 py-2 rounded-lg font-medium bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
            >
              {totalPages}
            </button>
          </>
        )}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!hasNext}
        className={`flex items-center px-3 py-2 rounded-lg font-medium ${
          hasNext
            ? 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
            : 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
        }`}
      >
        Next
        <ChevronRight className="w-4 h-4 ml-1" />
      </button>
    </div>
  )
}