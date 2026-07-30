'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-red-50 flex items-center justify-center">
          <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h1 className="font-display text-2xl font-medium text-neutral-carbonDark mb-3">Terjadi Kesalahan</h1>
        <p className="text-neutral-pewter mb-8">Maaf, terjadi kesalahan yang tidak terduga. Silakan coba lagi.</p>
        <button
          onClick={reset}
          className="inline-flex items-center justify-center px-6 py-3 bg-primary text-neutral-white rounded-btn font-medium hover:bg-primary-light transition-colors"
        >
          Coba Lagi
        </button>
      </div>
    </div>
  )
}