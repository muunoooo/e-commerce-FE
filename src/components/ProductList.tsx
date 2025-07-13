"use client";

import { Product } from "@/types/product";
import { formatIDR } from "@/utils/format-currency";

interface ProductListProps {
  products: Product[];
  loading: boolean;
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
}

export default function ProductList({
  products,
  loading,
  onEdit,
  onDelete,
}: ProductListProps) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        🗂️ Daftar Produk
      </h2>

      {loading ? (
        <p className="text-gray-500">Sedang memuat data produk...</p>
      ) : products.length === 0 ? (
        <p className="text-gray-500 italic">Belum ada produk tersedia.</p>
      ) : (
        <ul className="grid md:grid-cols-2 gap-6">
          {products.map((prod) => (
            <li
              key={prod.id}
              className="border rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition duration-200"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {prod.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Harga:{" "}
                    <span className="text-teal-600 font-medium">
                      {formatIDR(prod.price)}
                    </span>
                  </p>
                  <p className="text-sm text-gray-600">Stok: {prod.stock}</p>
                </div>

                <div className="space-x-2">
                  <button
                    onClick={() => onEdit(prod)}
                    className="text-sm text-teal-600 hover:underline"
                  >
                    ✏️ Edit
                  </button>
                  <button
                    onClick={() => onDelete(prod.id)}
                    className="text-sm text-red-600 hover:underline"
                  >
                    🗑️ Hapus
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
