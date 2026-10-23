import { z } from "zod";

export const partSchema = z.object({
  part_number: z.string().min(3, "Part Number is required"),
  part_name: z.string().min(3, "Part Name is required"),
  manufacturer: z.string().min(2, "Manufacturer is required"),
  material: z.string().min(2, "Material is required"),
  weight: z.coerce.number().positive("Weight must be greater than 0"),
  carbon: z.coerce.number().nonnegative("Carbon cannot be negative"),
  status: z.enum(["Active", "Inactive"]),
});

export type PartFormData = z.input<typeof partSchema>;