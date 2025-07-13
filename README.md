# 🏩 Frontend Catalog App

Ini adalah proyek frontend katalog produk berbasis **Next.js**, **Apollo GraphQL**, dan **Tailwind CSS**. Aplikasi ini terhubung ke layanan GraphQL backend (NestJS) untuk menampilkan, menambahkan, mengedit, dan menghapus data produk secara real-time.

---

## 🚀 Teknologi yang Digunakan

- [Next.js](https://nextjs.org/) – Framework React modern
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first styling
- [Apollo Client](https://www.apollographql.com/docs/react/) – GraphQL Client
- [GraphQL](https://graphql.org/) – API Query Language
- [react-hot-toast](https://react-hot-toast.com/) – Notifikasi ringan

---

## 📦 Fitur Utama

- ✅ Menampilkan daftar produk dari GraphQL API
- ➕ Menambahkan produk baru
- ✏️ Mengedit produk
- 🗑️ Menghapus produk
- 🎨 Desain modern dan responsif dengan Tailwind
- 🖼️ Gambar header visual menarik
- 🔔 Notifikasi sukses/gagal dengan toast
- 🔍 Form input harga otomatis format Rupiah (IDR)

---

## ⚙️ Instalasi

1. **Clone repositori ini:**

```bash
git clone https://github.com/username/frontend-catalog.git
cd frontend-catalog
```

2. **Install dependencies:**

```bash
npm install
# atau
yarn install
```

3. **Jalankan aplikasi:**

```bash
npm run dev
# atau
yarn dev
```

Akses di: [http://localhost:3000](http://localhost:3000)

---

## 🔗 Konfigurasi

Pastikan backend GraphQL berjalan di `http://localhost:8000/graphql`.

Jika ingin mengubah endpoint:

Edit file `lib/apolloClient.ts`:

```ts
const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
});
```

---

## 📁 Struktur Folder

```bash
src/
├── app/                 # Struktur halaman utama (Next.js App Router)
├── components/          # Komponen UI: ProductForm, ProductList, Modal, dll
├── graph/               # File query & mutation GraphQL
├── lib/                 # Apollo Client setup
├── types/               # TypeScript types (Product, Input, dll)
├── utils/               # Format currency, toast handler, dsb
└── public/              # Aset publik (gambar header, favicon)
```

---

## 👨‍💻 Pengembang

- **Nama:** Muhammad Naufal
- **Repo Backend:** [Link repo backend kamu jika ada]
