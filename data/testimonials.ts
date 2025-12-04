/* ==========================================================================
   TESTIMONIALS DATA - Data testimonial yang bisa diedit terpisah
   ==========================================================================
   
   CARA EDIT:
   - Tambah/hapus object di array testimonials
   - Pastikan setiap testimonial punya semua field
   - Testimonial akan otomatis muncul di carousel
   
   ========================================================================== */

export interface Testimonial {
  id: number
  name: string
  business: string
  location: string
  quote: string
  metric: {
    label: string
    before: string
    after: string
  }
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rina Susanti",
    business: "Owner Hijab Cantika",
    location: "Bandung",
    quote:
      "Dulu tiap hari bales chat sampai tengah malam. Sekarang PENJAGA yang handle, saya tinggal cek yang butuh follow-up aja. Omzet naik 40% karena gak ada chat yang kelewat.",
    metric: { label: "Chat Response", before: "4 jam", after: "30 menit" },
    rating: 5,
  },
  {
    id: 2,
    name: "Budi Hartono",
    business: "Toko Elektronik Jaya",
    location: "Surabaya",
    quote:
      "Stok di Tokopedia, Shopee, sama toko fisik dulu sering gak sync. Pernah overselling sampai kena penalti. Sekarang INGATAN sync semuanya real-time. Zero masalah.",
    metric: { label: "Overselling", before: "5-10x/bulan", after: "0" },
    rating: 5,
  },
  {
    id: 3,
    name: "Dewi Kusuma",
    business: "Dapur Dewi Catering",
    location: "Jakarta",
    quote:
      "Order catering itu kompleks - tanggal, menu, jumlah porsi, alamat. Dulu sering salah input. MANTRA sekarang capture semua otomatis dari WhatsApp ke sistem.",
    metric: { label: "Error Rate", before: "15%", after: "< 1%" },
    rating: 5,
  },
  {
    id: 4,
    name: "Ahmad Fauzi",
    business: "Distro Urban Style",
    location: "Yogyakarta",
    quote:
      "Gak nyangka AI bisa jawab pertanyaan customer senatural itu. Mereka gak sadar lagi chat sama bot. Conversion rate naik karena response cepet 24 jam.",
    metric: { label: "Conversion", before: "12%", after: "28%" },
    rating: 5,
  },
  {
    id: 5,
    name: "Siti Nurhaliza",
    business: "Skincare Glow.id",
    location: "Medan",
    quote:
      "Customer skincare banyak tanya detail - ingredients, cara pakai, cocok untuk kulit apa. PENJAGA jawab semua dengan akurat. Saya tinggal handle yang mau konsul khusus.",
    metric: { label: "Time Saved", before: "5 jam/hari", after: "1 jam/hari" },
    rating: 5,
  },
  {
    id: 6,
    name: "Hendra Wijaya",
    business: "Furniture Kayu Jati",
    location: "Jepara",
    quote:
      "Bisnis furniture itu ordernya custom - ukuran, finishing, kirim luar kota. MANTRA bantu organize semua order dengan detail. Gak pernah lagi salah spesifikasi.",
    metric: { label: "Order Accuracy", before: "85%", after: "99%" },
    rating: 5,
  },
  {
    id: 7,
    name: "Lisa Permata",
    business: "Bakery Sweet Dreams",
    location: "Semarang",
    quote:
      "Cake custom itu harus booking H-3. Dulu sering kelewat deadline. Sekarang sistem otomatis reminder customer dan saya. Gak ada lagi order mendadak yang bikin stress.",
    metric: { label: "On-time Delivery", before: "80%", after: "98%" },
    rating: 5,
  },
  {
    id: 8,
    name: "Rudi Prasetyo",
    business: "Bengkel Motor Cepat",
    location: "Bekasi",
    quote:
      "Customer sering tanya 'motor saya udah selesai belum?'. MANTRA auto-update status servis ke WhatsApp mereka. Telepon berkurang drastis, kerjaan lebih fokus.",
    metric: { label: "Customer Calls", before: "30+/hari", after: "5/hari" },
    rating: 5,
  },
  {
    id: 9,
    name: "Maya Indah",
    business: "Florist Bunga Indah",
    location: "Malang",
    quote:
      "Peak season kayak Valentine sama anniversary, dulu kewalahan. Sekarang MANTRA handle booking, confirm payment, sampai schedule delivery. Saya fokus arrange bunga aja.",
    metric: { label: "Orders Handled", before: "20/hari max", after: "50+/hari" },
    rating: 5,
  },
  {
    id: 10,
    name: "Irfan Hakim",
    business: "Seafood Pak Irfan",
    location: "Makassar",
    quote:
      "Restoran rame, HP bunyi terus buat order delivery. Sekarang semua order masuk otomatis ke sistem, langsung print di dapur. Gak perlu pegawai khusus terima order.",
    metric: { label: "Staff Needed", before: "1 dedicated", after: "0" },
    rating: 5,
  },
  {
    id: 11,
    name: "Anita Sari",
    business: "Pet Shop Meong",
    location: "Tangerang",
    quote:
      "Stok makanan hewan itu banyak varian. Dulu sering kehabisan yang best seller. INGATAN sekarang auto-alert kalau stok mau habis. Gak pernah lagi lost sales.",
    metric: { label: "Stock-outs", before: "10x/bulan", after: "0" },
    rating: 5,
  },
  {
    id: 12,
    name: "Denny Kurniawan",
    business: "Gadget Store DK",
    location: "Denpasar",
    quote:
      "Jualan gadget banyak pertanyaan teknis. PENJAGA di-training dengan semua spec produk. Customer puas karena jawaban akurat dan cepet. Rating toko naik ke 4.9.",
    metric: { label: "Store Rating", before: "4.5", after: "4.9" },
    rating: 5,
  },
]
