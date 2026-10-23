"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/layout/Navbar";
import PartForm from "@/components/admin/PartForm";
import PartTable from "@/components/admin/PartTable";

import { Part } from "@/types/part";
import { getAllParts } from "@/services/partService";
import DashboardStats from "@/components/admin/DashboardStats";
import AdminToolbar from "@/components/admin/AdminToolbar";


export default function AdminPage() {

  const [parts, setParts] = useState<Part[]>([]);
  const [editingPart, setEditingPart] = useState<Part | null>(null);

  const totalParts = parts.length;

const manufacturers = new Set(
  parts.map((p) => p.manufacturer)
).size;

const averageCarbon =
  totalParts === 0
    ? 0
    : parts.reduce((sum, p) => sum + p.carbon, 0) / totalParts;

const activeParts = parts.filter(
  (p) => p.status === "Active"
).length;


  async function loadParts() {

    const data = await getAllParts();

    setParts(data);

  }



  useEffect(() => {

    loadParts();

  }, []);




  return (
    <>
      <Navbar />


      <main className="mx-auto max-w-7xl px-6 py-10">


        <div className="mb-10">

          <h1 className="text-4xl font-bold text-slate-900">
            Admin Dashboard
          </h1>


          <p className="mt-2 text-slate-600">
            Manage all Digital Part Passports.
          </p>

        </div>

<DashboardStats
  totalParts={totalParts}
  manufacturers={manufacturers}
  averageCarbon={averageCarbon}
  activeParts={activeParts}
/>

<div className="mt-10">
  <AdminToolbar />
</div>



       <div className="mt-10 grid gap-10 xl:grid-cols-3">

  <div className="xl:col-span-1">

    <PartForm
      editingPart={editingPart}
      onCancelEdit={() => setEditingPart(null)}
      onSuccess={() => {
        loadParts();
        setEditingPart(null);
      }}
    />

  </div>

  <div className="xl:col-span-2">

<PartTable

  parts={parts}

  onEdit={setEditingPart}

  onDelete={loadParts}

/>

  </div>

</div>


      </main>

    </>
  );
}