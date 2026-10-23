import { getAllParts } from "./partService";

export async function getPlatformStats() {
  const parts = await getAllParts();

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

  return {
    totalParts,
    manufacturers,
    averageCarbon,
    activeParts,
  };
}