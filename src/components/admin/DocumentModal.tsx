"use client";

import DocumentUpload from "@/components/admin/DocumentUpload";
import { Part } from "@/types/part";

type Props = {
  part: Part;
  onClose: () => void;
};

export default function DocumentModal({
  part,
  onClose,
}: Props) {

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-xl rounded-3xl bg-white p-8 shadow-xl">

        <div className="flex items-center justify-between">

          <h2 className="text-2xl font-bold">
            Documents - {part.part_number}
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg bg-slate-100 px-3 py-1"
          >
            ✕
          </button>

        </div>


        <div className="mt-8">

          <DocumentUpload
            partId={part.id}
            partNumber={part.part_number}
          />

        </div>

      </div>

    </div>
  );
}