import { NextRequest, NextResponse } from "next/server";
import { getCelestialBodyById } from "@/lib/celestial-bodies";

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(_request: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  const body = await getCelestialBodyById(id);
  if (!body || !body.isAvailable) {
    return NextResponse.json(
      { error: "Cuerpo celeste no encontrado" },
      { status: 404 },
    );
  }
  return NextResponse.json(body);
}