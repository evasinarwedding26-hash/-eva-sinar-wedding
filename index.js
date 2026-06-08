const responses = {
  "1": "📦 Paket Wedding tersedia. Silakan tanyakan paket yang diinginkan.",
  "2": "💄 Makeup & Attire tersedia untuk pengantin dan keluarga.",
  "3": "📅 Silakan kirim format booking:\nNama:\nTanggal:\nLokasi:",
  "4": "📍 Lokasi Eva Sinar Wedding akan dikirim admin.",
  "5": "☎️ Admin akan segera menghubungi Anda."
}

console.log("Eva Sinar Wedding Bot Aktif")

process.stdin.on("data", (data) => {
  const text = data.toString().trim()

  if (responses[text]) {
    console.log(responses[text])
  } else {
    console.log(`
Halo 👰 Selamat datang di Eva Sinar Wedding

1. Paket Wedding
2. Makeup & Attire
3. Booking
4. Lokasi
5. Hubungi Admin

Ketik angka menu.
`)
  }
})
