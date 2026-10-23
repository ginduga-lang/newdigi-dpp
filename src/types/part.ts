export interface Part {
  id: string;
  part_number: string;
  part_name: string;
  manufacturer: string;
  material: string;
  weight: number;
  carbon: number;
  status: "Active" | "Inactive";
  created_at: string;

  document_url?: string | null;
}