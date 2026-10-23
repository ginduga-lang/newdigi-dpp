"use client";

import { useState } from "react";
import { uploadDocument } from "@/services/documentService";
import { saveDocumentMetadata } from "@/services/documentMetadataService";

type Props = {
    partId: string;
  partNumber: string;
};

export default function DocumentUpload({
    partId,
  partNumber,
}: Props) {
  const [uploading, setUploading] = useState(false);

  async function handleUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    try {
      setUploading(true);

const result = await uploadDocument(
  partNumber,
  file
);


await saveDocumentMetadata({
  part_id: partId,
  file_name: file.name,
  file_url: result.url,
  file_type: file.type,
});


console.log(result);

alert(
  "✅ Document uploaded successfully!"
);

    } catch (error) {

  console.error(
    "Upload Error:",
    error
  );

  alert(
    "❌ Upload failed. Check console."
  );

} finally {

      setUploading(false);

    }
  }

  return (
    <div className="rounded-2xl border border-dashed border-slate-300 p-6">

      <h3 className="text-xl font-semibold">
        Upload Documents
      </h3>

      <p className="mt-2 text-slate-500">
        Upload PDF, Images, CAD files or Certificates.
      </p>

      <input
        type="file"
        onChange={handleUpload}
        disabled={uploading}
        className="mt-6 block w-full"
      />

      {uploading && (
        <p className="mt-4 text-blue-600">
          Uploading...
        </p>
      )}

    </div>
  );
}