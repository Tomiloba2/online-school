'use client'
import { useQueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary'

function ErrorFallback({ error, resetErrorBoundary }: any) {
  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
      <pre className="bg-red-100 p-4 rounded text-sm text-red-900">{error.message}</pre>
      <button
        onClick={resetErrorBoundary}
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-xl"
      >
        Try again
      </button>
    </div>
  )
}

export function QueryErrorBoundary({ children }: { children: React.ReactNode }) {
  const { reset } = useQueryErrorResetBoundary()
  return (
    <ReactErrorBoundary
      onReset={reset}
      FallbackComponent={ErrorFallback}
    >
      {children}
    </ReactErrorBoundary>
  )
}