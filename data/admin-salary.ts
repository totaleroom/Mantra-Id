/* ==========================================================================
   ADMIN SALARY DATA - Data gaji admin per kota
   ==========================================================================
   
   Data berdasarkan UMK 2025 dan rata-rata gaji admin olshop
   Update file ini jika ada perubahan data
   
   ========================================================================== */

export interface SalaryData {
  city: string
  province: string
  salary: number
  umk: number
}

export const salaryData: SalaryData[] = [
  { city: "Jakarta", province: "DKI Jakarta", salary: 5400000, umk: 5396760 },
  { city: "Bandung", province: "Jawa Barat", salary: 4500000, umk: 4482914 },
  { city: "Surabaya", province: "Jawa Timur", salary: 4800000, umk: 4725479 },
  { city: "Semarang", province: "Jawa Tengah", salary: 3500000, umk: 3454827 },
  { city: "Yogyakarta", province: "DIY", salary: 2800000, umk: 2730297 },
  { city: "Medan", province: "Sumatera Utara", salary: 3200000, umk: 2992599 },
  { city: "Makassar", province: "Sulawesi Selatan", salary: 3800000, umk: 3657527 },
  { city: "Denpasar", province: "Bali", salary: 3000000, umk: 3006492 },
]

export interface AdminTask {
  task: string
  timePerDay: string
  canReplace: boolean
  replacePercent: number
  description: string
}

export const adminTasks: AdminTask[] = [
  {
    task: "Bales chat customer",
    timePerDay: "3-4 jam",
    canReplace: true,
    replacePercent: 85,
    description: "FAQ, info produk, cek ongkir, ready stock - semua bisa dijawab AI",
  },
  {
    task: "Update stok marketplace",
    timePerDay: "1-2 jam",
    canReplace: true,
    replacePercent: 100,
    description: "Sync otomatis ke Tokopedia, Shopee, TikTok Shop secara real-time",
  },
  {
    task: "Input order ke sistem",
    timePerDay: "1-2 jam",
    canReplace: true,
    replacePercent: 95,
    description: "Order masuk langsung tercatat, notif WA, label siap print",
  },
  {
    task: "Posting konten sosmed",
    timePerDay: "1-2 jam",
    canReplace: true,
    replacePercent: 70,
    description: "AI generate caption, hashtag, schedule posting otomatis",
  },
  {
    task: "Buat laporan harian",
    timePerDay: "30-60 menit",
    canReplace: true,
    replacePercent: 90,
    description: "Dashboard real-time, report otomatis tiap hari/minggu/bulan",
  },
  {
    task: "Handle komplain khusus",
    timePerDay: "30-60 menit",
    canReplace: false,
    replacePercent: 20,
    description: "Komplain kompleks tetap butuh human touch - tapi sudah di-filter AI",
  },
]
