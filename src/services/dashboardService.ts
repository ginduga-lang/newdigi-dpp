import { supabase } from "@/lib/supabase";

export async function getDashboardStats() {
  const { data, error } = await supabase
    .from("parts")
    .select("manufacturer, carbon, status");

  if (error || !data) {
    console.error(error);

    return {
      totalParts: 0,
      manufacturers: 0,
      averageCarbon: 0,
      activeParts: 0,
    };
  }

  const totalParts = data.length;

  const manufacturers = new Set(
    data.map((item) => item.manufacturer)
  ).size;

  const activeParts = data.filter(
    (item) => item.status === "Active"
  ).length;

  const carbonValues = data
    .map((item) => Number(item.carbon) || 0)
    .filter((value) => value > 0);

  const averageCarbon =
    carbonValues.length > 0
      ? carbonValues.reduce((sum, value) => sum + value, 0) /
        carbonValues.length
      : 0;

  return {
    totalParts,
    manufacturers,
    averageCarbon,
    activeParts,
  };
}