/* ==========================================================================
   ERROR BOUNDARY COMPONENT
   ==========================================================================
   
   Menangkap error di React tree dan menampilkan fallback UI
   Mencegah seluruh aplikasi crash jika ada error di satu komponen
   
   ========================================================================== */

"use client"

import type React from "react"

import { Component, type ReactNode } from "react"

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error ke analytics atau error reporting service
    console.error("[ErrorBoundary] Caught error:", error, errorInfo)

    // Bisa kirim ke Sentry, LogRocket, dll di sini
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI jika ada error
      return (
        this.props.fallback || (
          <div className="min-h-[200px] flex items-center justify-center bg-muted/50 p-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-2">Terjadi Kesalahan</h3>
              <p className="text-muted-foreground mb-4">Mohon muat ulang halaman atau coba lagi nanti.</p>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Muat Ulang
              </button>
            </div>
          </div>
        )
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
