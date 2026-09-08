import { NextRequest, NextResponse } from "next/server";
import { listCelestialBodies } from "@/lib/celestial-bodies";

export async function GET(request: NextRequest) {
  const sp = request.nextUrl.searchParams;
  const result = await listCelestialBodies({
    q: sp.get("q") ?? undefined,
    type: sp.get("type") ?? undefined,
    page: Number(sp.get("page") ?? 1),
    pageSize: Number(sp.get("pageSize") ?? 20),
  });
  return NextResponse.json(result);
}