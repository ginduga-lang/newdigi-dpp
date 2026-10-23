"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "@/components/ui/Input";

import {
  partSchema,
  PartFormData,
} from "@/lib/validations/partSchema";

import {
  createPart,
  updatePart,
} from "@/services/partService";

import { Part } from "@/types/part";

type PartFormProps = {
  editingPart: Part | null;
  onCancelEdit: () => void;
  onSuccess: () => void;
};

export default function PartForm({
  editingPart,
  onCancelEdit,
  onSuccess,
}: PartFormProps) {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PartFormData>({
    resolver: zodResolver(partSchema),
  });


  useEffect(() => {

    if (editingPart) {

      reset({
        part_number: editingPart.part_number,
        part_name: editingPart.part_name,
        manufacturer: editingPart.manufacturer,
        material: editingPart.material,
        weight: editingPart.weight,
        carbon: editingPart.carbon,
        status: editingPart.status,
      });

    } else {

      reset();

    }

  }, [editingPart, reset]);


  async function onSubmit(data: PartFormData) {

    try {

      const formattedData = {
        ...data,
        weight: Number(data.weight),
        carbon: Number(data.carbon),
      };


      if (editingPart) {

        await updatePart(
          editingPart.id,
          formattedData
        );

        alert("✅ Part updated successfully!");


      } else {

        await createPart(formattedData);

        alert("✅ Part created successfully!");

      }


      reset();
      onSuccess();


    } catch (error) {

      console.error(
        "Part Save Error:",
        error
      );

      alert("❌ Failed to save part.");

    }

  }


  return (

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
    >

      <h2 className="text-2xl font-bold text-slate-900">
        {editingPart ? "Edit Part" : "Add New Part"}
      </h2>


      <Input
        label="Part Number"
        {...register("part_number")}
        error={errors.part_number?.message}
      />


      <Input
        label="Part Name"
        {...register("part_name")}
        error={errors.part_name?.message}
      />


      <Input
        label="Manufacturer"
        {...register("manufacturer")}
        error={errors.manufacturer?.message}
      />


      <Input
        label="Material"
        {...register("material")}
        error={errors.material?.message}
      />


      <Input
        label="Weight (kg)"
        type="number"
        step="0.01"
        {...register("weight", {
          valueAsNumber: true,
        })}
        error={errors.weight?.message}
      />


      <Input
        label="Carbon Footprint (kg CO₂e)"
        type="number"
        step="0.01"
        {...register("carbon", {
          valueAsNumber: true,
        })}
        error={errors.carbon?.message}
      />


      <div className="space-y-2">

        <label className="block text-sm font-medium text-slate-700">
          Status
        </label>


        <select
          {...register("status")}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-blue-500 focus:outline-none"
        >

          <option value="Active">
            Active
          </option>

          <option value="Inactive">
            Inactive
          </option>

        </select>


        {errors.status && (

          <p className="text-sm text-red-600">
            {errors.status.message}
          </p>

        )}

      </div>


      <div className="flex gap-4">

        <button
          type="submit"
          className="flex-1 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >

          {editingPart ? "Update Part" : "Save Part"}

        </button>


        {editingPart && (

          <button
            type="button"
            onClick={() => {
              reset();
              onCancelEdit();
            }}
            className="rounded-xl bg-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-400"
          >

            Cancel

          </button>

        )}

      </div>


    </form>

  );

}