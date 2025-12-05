// ==========================================================================
// BLOG PAGE - Halaman blog untuk SEO dan content marketing
// File ini membantu meningkatkan SEO dengan content yang kaya keyword
// ==========================================================================

import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Blog - Tips Otomasi Bisnis & AI untuk UMKM Indonesia",
  description:
    "Baca artikel terbaru tentang otomasi bisnis, AI automation, chatbot WhatsApp, dan tips mengembangkan UMKM di era digital.",
  keywords: [
    "blog otomasi bisnis",
    "tips automation UMKM",
    "artikel AI Indonesia",
    "cara pakai chatbot WhatsApp",
    "tutorial automation bisnis",
  ],
}

// Data blog posts - bisa dipindahkan ke CMS atau database nanti
const blogPosts = [
  {
    slug: "apa-itu-automation-bisnis",
    title: "Apa Itu Automation Bisnis? Panduan Lengkap untuk UMKM Indonesia",
    excerpt:
      "Pelajari dasar-dasar otomasi bisnis dan bagaimana UMKM Indonesia bisa memanfaatkannya untuk menghemat waktu dan biaya operasional.",
    date: "2025-01-10",
    readTime: "5 menit",
    category: "Panduan",
  },
  {
    slug: "chatbot-whatsapp-untuk-jualan",
    title: "5 Cara Chatbot WhatsApp Meningkatkan Penjualan Online Shop",
    excerpt:
      "Temukan bagaimana chatbot WhatsApp bisa membantu menjawab pertanyaan pelanggan 24/7, meningkatkan konversi, dan menghemat waktu admin.",
    date: "2025-01-08",
    readTime: "7 menit",
    category: "Tips",
  },
  {
    slug: "hemat-biaya-admin-dengan-ai",
    title: "Cara Hemat Biaya Admin hingga 70% dengan AI Automation",
    excerpt:
      "Studi kasus nyata bagaimana UMKM Indonesia berhasil mengurangi biaya operasional dengan implementasi AI automation yang tepat.",
    date: "2025-01-05",
    readTime: "6 menit",
    category: "Studi Kasus",
  },
  {
    slug: "integrasi-marketplace-otomatis",
    title: "Cara Mengintegrasikan Tokopedia & Shopee dengan WhatsApp Otomatis",
    excerpt:
      "Tutorial langkah demi langkah untuk menghubungkan toko marketplace Anda dengan sistem notifikasi WhatsApp otomatis.",
    date: "2025-01-03",
    readTime: "8 menit",
    category: "Tutorial",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-mono uppercase tracking-wider bg-primary/10 text-primary rounded">
            Blog MANTRA
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Tips & Panduan Otomasi Bisnis</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Artikel, tutorial, dan studi kasus tentang bagaimana AI automation membantu UMKM Indonesia berkembang lebih
            cepat.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4 flex-wrap">
                  <span className="px-2 py-1 text-xs font-mono bg-muted rounded">{post.category}</span>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
                <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-primary font-medium">
                  Baca selengkapnya
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Siap Mulai Otomasi Bisnis Anda?</h2>
          <p className="text-background/70 mb-8 max-w-xl mx-auto">
            Konsultasi gratis dengan tim MANTRA untuk menemukan solusi automation yang tepat untuk bisnis Anda.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/#pricing">Lihat Paket Harga</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 MANTRA. Jasa Otomasi Bisnis Indonesia.</p>
        </div>
      </footer>
    </main>
  )
}
