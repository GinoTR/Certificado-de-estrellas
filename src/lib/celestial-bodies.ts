import { CelestialType, Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";

const VALID_TYPES = Object.values(CelestialType) as string[];

export type CelestialBodyListParams = {
  q?: string;
  type?: string;
  page?: number;
  pageSize?: number;
};

export type CelestialBodyListResult = {
  bodies: Prisma.CelestialBodyGetPayload<object>[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
};

export async function listCelestialBodies(
  params: CelestialBodyListParams,
): Promise<CelestialBodyListResult> {
  const q = params.q?.trim() ?? "";
  const type = VALID_TYPES.includes(params.type ?? "")
    ? (params.type as CelestialType)
    : undefined;
  const page = Math.max(1, Math.floor(params.page ?? 1));
  const pageSize = Math.min(100, Math.max(1, Math.floor(params.pageSize ?? 20)));

  const where: Prisma.CelestialBodyWhereInput = {
    isAvailable: true,
    ...(type ? { type } : {}),
    ...(q
      ? {
          OR: [
            { commonName: { contains: q, mode: "insensitive" } },
            { officialName: { contains: q, mode: "insensitive" } },
            { designation: { contains: q, mode: "insensitive" } },
          ],
        }
      : {}),
  };

  const [bodies, total] = await Promise.all([
    prisma.celestialBody.findMany({
      where,
      orderBy: [{ magnitude: "asc" }, { commonName: "asc" }],
      skip: (page - 1) * pageSize,
      take: pageSize,
    }),
    prisma.celestialBody.count({ where }),
  ]);

  return {
    bodies,
    total,
    page,
    pageSize,
    totalPages: Math.ceil(total / pageSize),
  };
}

export async function getCelestialBodyById(id: string) {
  return prisma.celestialBody.findUnique({ where: { id } });
}