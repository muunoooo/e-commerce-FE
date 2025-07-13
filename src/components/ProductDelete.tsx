"use client";

interface Props {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  productName?: string;
}

export default function ProductDeleteModal({ open, onClose, onConfirm, productName }: Props) {
  if (!open) return null;

  return (
    <div className="px-4 fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-sm p-6 relative">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Yakin ingin menghapus <span className="text-red-600">{productName}</span>?
        </h3>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100"
          >
            Batal
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
}
