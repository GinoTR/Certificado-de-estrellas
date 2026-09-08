import { CelestialType } from "@prisma/client";

export const TYPE_LABELS: Record<CelestialType, string> = {
  STAR: "Estrella",
  PLANET: "Planeta",
  DWARF_PLANET: "Planeta enano",
  MOON: "Luna",
  ASTEROID: "Asteroide",
  COMET: "Cometa",
  NEBULA: "Nebulosa",
  GALAXY: "Galaxia",
  CONSTELLATION: "Constelación",
  OTHER: "Otro",
};

export const TYPE_GRADIENTS: Record<CelestialType, string> = {
  STAR: "from-blue-400 to-white",
  PLANET: "from-cyan-400 to-blue-500",
  DWARF_PLANET: "from-slate-300 to-slate-500",
  MOON: "from-gray-300 to-gray-500",
  ASTEROID: "from-amber-600 to-stone-700",
  COMET: "from-cyan-300 to-blue-400",
  NEBULA: "from-purple-500 to-pink-400",
  GALAXY: "from-indigo-500 to-purple-500",
  CONSTELLATION: "from-gold to-amber-300",
  OTHER: "from-violet-500 to-fuchsia-400",
};

export function formatMagnitude(magnitude: number | null): string {
  if (magnitude === null) return "—";
  return magnitude.toFixed(2);
}

export function formatDistance(lightYears: number | null): string {
  if (lightYears === null) return "—";
  return `${lightYears.toFixed(1)} años luz`;
}