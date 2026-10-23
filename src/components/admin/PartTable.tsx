"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Pencil,
  Eye,
  Trash2,
  Package,
  Paperclip,
} from "lucide-react";

import DocumentModal from "@/components/admin/DocumentModal";

import { Part } from "@/types/part";
import { deletePart } from "@/services/partService";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

type Props = {
  parts: Part[];
  onEdit: (part: Part) => void;
  onDelete: () => void;
};

export default function PartTable({
  parts,
  onEdit,
  onDelete,
}: Props) {

  const [documentPart, setDocumentPart] =
    useState<Part | null>(null);


  async function handleDelete(id: string) {

    const confirmed = confirm(
      "Are you sure you want to delete this part?"
    );

    if (!confirmed) return;


    try {

      await deletePart(id);

      alert("✅ Part deleted successfully!");

      onDelete();

    } catch (error) {

      console.error(
        "Delete Error:",
        error
      );

      alert("❌ Delete failed");

    }

  }
const exportPDF = () => {
  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text("NEWDIGI Digital Part Passport Report", 14, 20);

  autoTable(doc, {
    startY: 30,

    head: [
      [
        "Part Number",
        "Part Name",
        "Manufacturer",
        "Material",
        "Carbon",
        "Status",
      ],
    ],

    body: parts.map((part) => [
      part.part_number,
      part.part_name,
      part.manufacturer,
      part.material,
      `${part.carbon} kg CO₂e`,
      part.status,
    ]),
  });

  doc.save("NEWDIGI-Part-Passports.pdf");
};

  if (parts.length === 0) {

    return (
      <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-16 text-center shadow-sm">

        <Package
          size={60}
          className="mx-auto text-slate-400"
        />

        <h2 className="mt-6 text-2xl font-bold">
          No Parts Found
        </h2>

        <p className="mt-3 text-slate-500">
          Create your first Digital Part Passport.
        </p>

      </div>
    );

  }


  return (

    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">


      <div className="flex items-center justify-between border-b border-slate-200 px-8 py-6">

        <h2 className="text-2xl font-bold">
          Parts Management
        </h2>


<button
  onClick={exportPDF}
  className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
>
  Export PDF
</button>

      </div>



      <div className="overflow-x-auto">

        <table className="min-w-full">


          <thead className="bg-slate-50">

            <tr>

              <th className="px-6 py-4 text-left">
                Part No
              </th>

              <th className="px-6 py-4 text-left">
                Name
              </th>

              <th className="px-6 py-4 text-left">
                Manufacturer
              </th>

              <th className="px-6 py-4 text-left">
                Material
              </th>

              <th className="px-6 py-4 text-left">
                Status
              </th>

              <th className="px-6 py-4 text-center">
                Actions
              </th>

            </tr>

          </thead>



          <tbody>

            {parts.map((part) => (

              <tr
                key={part.id}
                className="border-t hover:bg-slate-50"
              >


                <td className="px-6 py-5 font-semibold text-blue-600">
                  {part.part_number}
                </td>


                <td className="px-6 py-5">
                  {part.part_name}
                </td>


                <td className="px-6 py-5">
                  {part.manufacturer}
                </td>


                <td className="px-6 py-5">
                  {part.material}
                </td>


                <td className="px-6 py-5">

                  <span
                    className={`rounded-full px-3 py-1 text-sm font-semibold ${
                      part.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {part.status}
                  </span>

                </td>



                <td className="px-6 py-5">

                  <div className="flex justify-center gap-3">


                    <button
                      onClick={() => onEdit(part)}
                      className="rounded-lg bg-blue-100 p-2 text-blue-600 hover:bg-blue-200"
                      title="Edit"
                    >
                      <Pencil size={18} />
                    </button>



                    <Link
                      href={`/passport/${part.part_number}`}
                      className="rounded-lg bg-green-100 p-2 text-green-600 hover:bg-green-200"
                      title="View Passport"
                    >
                      <Eye size={18} />
                    </Link>



                    <button
                      onClick={() => setDocumentPart(part)}
                      className="rounded-lg bg-purple-100 p-2 text-purple-600 hover:bg-purple-200"
                      title="Documents"
                    >
                      <Paperclip size={18} />
                    </button>



                    <button
                      onClick={() => handleDelete(part.id)}
                      className="rounded-lg bg-red-100 p-2 text-red-600 hover:bg-red-200"
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>


                  </div>

                </td>


              </tr>

            ))}

          </tbody>


        </table>

      </div>



      {documentPart && (

        <DocumentModal
          part={documentPart}
          onClose={() => setDocumentPart(null)}
        />

      )}


    </div>

  );

}