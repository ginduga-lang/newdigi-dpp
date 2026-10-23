import { create } from "zustand";

type Part = {
  id: string;
  part_number: string;
  part_name: string;
  manufacturer: string;
  material: string;
  weight: number;
  carbon: number;
  status: string;
};

type PartStore = {
  editingPart: Part | null;
  setEditingPart: (part: Part | null) => void;
};

export const usePartStore = create<PartStore>((set) => ({
  editingPart: null,
  setEditingPart: (part) => set({ editingPart: part }),
}));