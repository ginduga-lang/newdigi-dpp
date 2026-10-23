import { supabase } from "@/lib/supabase";


export async function uploadDocument(
  partNumber: string,
  file: File
) {

  if (!file) {
    throw new Error("No file selected");
  }


  const filePath =
    `${partNumber}/${Date.now()}-${file.name}`;


  const { data, error } = await supabase.storage
    .from("part-documents")
    .upload(
      filePath,
      file
    );


  if (error) {

    console.error(
      "Storage Upload Error:",
      error
    );

    throw error;

  }


  const publicUrl =
    supabase.storage
      .from("part-documents")
      .getPublicUrl(data.path)
      .data
      .publicUrl;


  return {
    path: data.path,
    url: publicUrl,
  };

}



export async function getPartDocuments(
  partId: string
) {

  const { data, error } = await supabase
    .from("part_documents")
    .select("*")
    .eq("part_id", partId)
    .order(
      "created_at",
      {
        ascending: false,
      }
    );


  if (error) {

    console.error(
      "Get Documents Error:",
      error
    );

    return [];

  }


  return data;

}