export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-primary-600 mx-auto mb-6"></div>
          <div className="absolute inset-0 rounded-full border-2 border-primary-200"></div>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Loading</h2>
        <p className="text-gray-600">Please wait while we fetch the content...</p>
      </div>
    </div>
  )
}