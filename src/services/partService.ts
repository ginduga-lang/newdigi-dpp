import { supabase } from "@/lib/supabase";
import { Part } from "@/types/part";


export type PartInput = {
  part_number: string;
  part_name: string;
  manufacturer: string;
  material: string;
  weight: number;
  carbon: number;
  status: string;
};



export async function getLatestParts(
  limit = 6
): Promise<Part[]> {

  const { data, error } = await supabase
    .from("parts")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(limit);


  if (error) {
    console.error("Get Latest Parts Error:", error);
    return [];
  }


  return data as Part[];
}




export async function getPartByNumber(
  partNumber: string
): Promise<Part | null> {

  const { data, error } = await supabase
    .from("parts")
    .select("*")
    .eq("part_number", partNumber)
    .single();


  if (error) {
    console.error("Get Part Error:", error);
    return null;
  }


  return data as Part;
}




export async function createPart(
  part: PartInput
): Promise<Part> {


  const { data, error } = await supabase
    .from("parts")
    .insert([part])
    .select()
    .single();


  if (error) {
    throw error;
  }


  return data as Part;
}




export async function updatePart(
  id: string,
  part: PartInput
): Promise<void> {

  console.log("Updating Part ID:", id);
  console.log("Update Data:", part);

  const { data, error } = await supabase
    .from("parts")
    .update(part)
    .eq("id", id)
    .select();

  console.log("Updated Row:", data);
  console.log("Update Error:", error);

  if (error) {
    throw error;
  }
}




export async function getAllParts(): Promise<Part[]> {


  const { data, error } = await supabase
    .from("parts")
    .select("*")
    .order("created_at", {
      ascending: false,
    });


  if (error) {
    console.error("Get All Parts Error:", error);
    return [];
  }


  return data as Part[];

}

export async function deletePart(
  id: string
): Promise<void> {

  const { error } = await supabase
    .from("parts")
    .delete()
    .eq("id", id);

  if (error) {
    throw error;
  }

}