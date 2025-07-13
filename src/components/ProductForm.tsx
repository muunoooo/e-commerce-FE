"use client";

import { CreateProductInput } from "@/types/product";
import { formatIDR } from "@/utils/format-currency";
import { ChangeEvent, FormEvent } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (e: FormEvent) => void;
  form: CreateProductInput;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isEdit?: boolean;
}

export default function ProductFormModal({
  open,
  onClose,
  onSubmit,
  form,
  onChange,
  isEdit = false,
}: Props) {
  if (!open) return null;

  return (
    <div className="px-4 text-black fixed inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {isEdit ? "✏️ Edit Produk" : "➕ Tambah Produk"}
        </h2>
        <form onSubmit={onSubmit} className="space-y-6">
          {/* Nama Produk */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nama Produk
            </label>
            <input
              id="name"
              name="name"
              placeholder="Contoh: Baju Anak"
              value={form.name}
              onChange={onChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Harga Produk */}
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Harga Produk
            </label>
            <input
              id="price"
              name="price"
              type="text"
              placeholder="Contoh: 50000"
              value={formatIDR(form.price)}
              onChange={onChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Stok Produk */}
          <div>
            <label
              htmlFor="stock"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Stok Produk
            </label>
            <input
              id="stock"
              name="stock"
              type="number"
              placeholder="Contoh: 100"
              value={form.stock}
              onChange={onChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Tombol Aksi */}
          <div className="flex justify-between gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100 transition"
            >
              Batal
            </button>
            <button
              type="submit"
              className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-md transition"
            >
              {isEdit ? "Simpan Perubahan" : "Simpan Produk"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
