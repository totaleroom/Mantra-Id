/* ==========================================================================
   STRUCTURED DATA COMPONENT
   ==========================================================================
   
   Komponen ini inject JSON-LD structured data ke <head>
   Membantu Google memahami konten website untuk rich snippets
   
   ========================================================================== */

import { generateAllStructuredData } from "@/lib/seo"

export default function StructuredData() {
  const structuredData = generateAllStructuredData()

  return (
    <>
      {structuredData.map((data, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
    </>
  )
}
