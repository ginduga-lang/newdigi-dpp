import { supabase } from "@/lib/supabase";


type DocumentMetadata = {
  part_id: string;
  file_name: string;
  file_url: string;
  file_type: string;
};


export async function saveDocumentMetadata(
  data: DocumentMetadata
) {

  console.log("Saving Metadata:", data);


  const { data: result, error } = await supabase
    .from("part_documents")
    .insert([data])
    .select();


  console.log("Insert Result:", result);
  console.log("Insert Error:", error);


  if (error) {
    throw error;
  }

}