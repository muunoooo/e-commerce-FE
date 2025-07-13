"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Product, CreateProductInput } from "@/types/product";
import ProductFormModal from "@/components/ProductForm";
import ProductDeleteModal from "@/components/ProductDelete";
import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  LIST_PRODUCTS,
  UPDATE_PRODUCT,
} from "@/graph/product";
import toast from "react-hot-toast";
import { showToast } from "@/utils/toast-handler";
import Image from "next/image";

export default function ProductList() {
  const { data, loading, refetch } = useQuery<{ listAllProducts: Product[] }>(
    LIST_PRODUCTS
  );
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);
  const [deleteProduct] = useMutation(DELETE_PRODUCT);

  const [form, setForm] = useState<CreateProductInput>({
    name: "",
    price: 0,
    stock: 0,
  });
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Product | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "price") {
      const numericValue = parseInt(value.replace(/[^\d]/g, "")) || 0;
      setForm((prev) => ({ ...prev, price: numericValue }));
    } else if (name === "stock") {
      setForm((prev) => ({ ...prev, stock: parseInt(value) || 0 }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (selectedId) {
        await updateProduct({
          variables: {
            id: selectedId,
            input: form,
          },
        });
        showToast("Produk berhasil diperbarui!", "success");
      } else {
        await createProduct({
          variables: {
            input: form,
          },
        });
        showToast("Produk berhasil ditambahkan!", "success");
      }

      setForm({ name: "", price: 0, stock: 0 });
      setSelectedId(null);
      setIsFormOpen(false);
      refetch();
    } catch (error) {
      console.error(error)
      showToast("Gagal menyimpan produk. Coba lagi.", "error");
    }
  };

  const handleEdit = (product: Product) => {
    setSelectedId(product.id);
    setForm({
      name: product.name,
      price: product.price,
      stock: product.stock,
    });
    setIsFormOpen(true);
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      await deleteProduct({
        variables: { id: deleteTarget.id },
      });
      toast.success("Produk berhasil dihapus!");
      setDeleteTarget(null);
      refetch();
    } catch (error) {
      console.error(error)
      toast.error("Gagal menghapus produk.");
    }
  };

  return (
    <section className="min-h-screen bg-white px-4 md:px-20 pt-[80px]">
      <div className="w-full h-56 relative mb-8 overflow-hidden rounded-xl shadow-md">
        <Image
          src="/supermarket.jpeg"
          alt="Supermarket"
          fill
          sizes="100vw"
          className="object-cover object-[center_20%]"
          priority
        />
      </div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">🗂️ Daftar Produk</h2>
        <button
          onClick={() => {
            setSelectedId(null);
            setForm({ name: "", price: 0, stock: 0 });
            setIsFormOpen(true);
          }}
          className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-4 py-2 rounded"
        >
          + Tambah Produk
        </button>
      </div>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : data?.listAllProducts.length === 0 ? (
        <p className="text-gray-500 italic">Belum ada produk.</p>
      ) : (
        <ul className="grid md:grid-cols-2 gap-6">
          {data?.listAllProducts.map((prod) => (
            <li
              key={prod.id}
              className="border rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {prod.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Harga:{" "}
                    <span className="text-teal-600 font-medium">
                      Rp {prod.price.toLocaleString()}
                    </span>
                  </p>
                  <p className="text-sm text-gray-600">Stok: {prod.stock}</p>
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => handleEdit(prod)}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => setDeleteTarget(prod)}
                    className="text-sm text-red-600 hover:underline"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      <ProductFormModal
        open={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleSubmit}
        form={form}
        onChange={handleChange}
        isEdit={!!selectedId}
      />

      <ProductDeleteModal
        open={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        productName={deleteTarget?.name}
      />
    </section>
  );
}
