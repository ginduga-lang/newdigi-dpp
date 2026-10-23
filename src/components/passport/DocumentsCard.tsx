"use client";


import { PartDocument } from "@/types/document";

type Props = {
  documents: PartDocument[];
};



export default function DocumentsCard({
  documents,
}: Props) {


  if (documents.length === 0) {

    return (
      <div className="rounded-2xl border bg-white p-6">

        <h2 className="text-xl font-bold">
          Documents
        </h2>

        <p className="mt-3 text-slate-500">
          No documents uploaded.
        </p>

      </div>
    );

  }


  return (

    <div className="rounded-2xl border bg-white p-6">

      <h2 className="text-xl font-bold">
        Documents
      </h2>


      <div className="mt-4 space-y-3">

        {documents.map((doc) => (

          <a
            key={doc.id}
            href={doc.file_url}
            target="_blank"
            className="block rounded-xl bg-slate-100 p-4 hover:bg-slate-200"
          >

            📄 {doc.file_name}

          </a>

        ))}

      </div>

    </div>

  );

}