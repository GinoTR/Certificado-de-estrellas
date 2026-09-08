import "dotenv/config";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const SIMBAD_TAP =
  "https://simbad.cds.unistra.fr/simbad/sim-tap/sync?REQUEST=doQuery&LANG=ADQL&FORMAT=json&QUERY=";

const CHUNK_SIZE = 40;

const STAR_NAMES = [
  "Sirius", "Canopus", "Arcturus", "Vega", "Capella", "Rigel", "Procyon",
  "Betelgeuse", "Achernar", "Altair", "Aldebaran", "Antares", "Spica",
  "Pollux", "Fomalhaut", "Deneb", "Regulus", "Adhara", "Castor", "Gacrux",
  "Shaula", "Bellatrix", "Elnath", "Miaplacidus", "Alnilam", "Alnair",
  "Alnitak", "Alioth", "Mirzam", "Dubhe", "Wezen", "Kaus Australis",
  "Alkaid", "Sargas", "Menkent", "Diphda", "Alphecca", "Hamal", "Kochab",
  "Menkalinan", "Alphard", "Algieba", "Algol", "Naos", "Mizar",
  "Denebola", "Caph", "Aludra", "Ankaa", "Alhena", "Mimosa", "Enif",
  "Aspidiske", "Markab", "Sadr", "Eta Carinae", "Cor Caroli",
  "Zubenelgenubi", "Zubeneschamali", "Rastaban", "Acubens", "Alderamin",
  "Atria", "Rasalhague", "Alpheratz", "Almach", "Sabik", "Sheliak",
  "Albireo", "Alya", "Kaus Media", "Kaus Borealis",
  "Polaris", "Acrux", "Hadar", "Toliman", "Rigil Kentaurus", "Alcor",
  "Merak", "Phecda", "Megrez", "Muscida", "Pherkad", "Yildun", "Errai",
  "Tarazed", "Alshain", "Scheat", "Algenib", "Mirach", "Skat",
  "Sadachbia", "Sadalmelik", "Sadalsuud", "Mira", "Menkar", "Rukbat",
  "Lesath", "Acrab", "Dschubba", "Alniyat", "Schedar", "Ruchbah",
  "Segin", "Mirfak", "Algedi", "Dabih", "Deneb Algedi", "Nashira",
  "Arneb", "Nihal", "Saiph", "Meissa", "Mintaka", "Alcyone", "Atlas",
  "Maia", "Merope", "Electra", "Pleione", "Prima Hyadum", "Ain",
  "Zaurak", "Beid", "Keid", "Cursa", "Rana", "Acamar", "Gomeisa",
  "Propus", "Tejat", "Mebsuta", "Wasat", "Mekbuda", "Zosma", "Chertan",
  "Adhafera", "Furud", "Zavijava", "Porrima", "Vindemiatrix", "Chara",
  "Unukalhai", "Rasalgethi", "Kornephoros", "Sulafat", "Alfirk",
  "Erakis", "Suhail", "Regor", "Avior", "Imai", "Barnard's Star",
];

const MESSIER_IDS = Array.from({ length: 110 }, (_, i) => `M ${i + 1}`);

const STAR_CODES = new Set([
  "*", "**", "*iA", "*iB", "*iN", "*iP", "*iC", "*iG", "*iH", "*iF", "SB*",
  "*m", "X*", "IR*", "rad", "V*", "Ce*", "C*", "sg*", "s*r", "s*y", "s*b",
  "s*g", "s*c", "s*p", "s*a", "s*", "PM*", "dS*", "se*", "RR*", "dC*",
  "C*", "Pe*", "HB*", "AB*", "Al*", "Pr*", "TT*", "Nova", "LPV", "BY*",
  "SR*", "Ir*", "RG*", "Sym*", "Vr*", "Em*", "LBV", "RSG",
]);

const GALAXY_CODES = new Set([
  "G", "GGroup", "GClstr", "GiC", "rG", "bCG", "AGN", "Seyf", "Seyf_1",
  "Seyf_2", "LIN", "QSO", "BLL", "Blazar", "BIQ", "HzG", "H2G", "SBG",
]);

const NEBULA_CODES = new Set([
  "Neb", "HII", "PN", "SNR", "RfN", "EmO", "ISM", "cor", "SFR", "HH", "molH",
]);

const CLUSTER_CODES = new Set(["Cl*", "OpC", "GlC", "*OC", "*SC", "GrG"]);

const OTHER_CODES = new Set(["N*.H", "Mas", "DNe", "HVC", "SCG"]);

const CONSTELLATION_GENITIVE: Record<string, string> = {
  AND: "Andromeda", ANT: "Antlia", APS: "Apus", AQL: "Aquila", AQR: "Aquarius",
  ARA: "Ara", ARI: "Aries", AUR: "Auriga", BOO: "Boötes", CAE: "Caelum",
  CAM: "Camelopardalis", CNC: "Cancer", CVN: "Canes Venatici", CMA: "Canis Major",
  CMI: "Canis Minor", CAP: "Capricornus", CAR: "Carina", CAS: "Cassiopeia",
  CEN: "Centaurus", CEP: "Cepheus", CET: "Cetus", CHA: "Chamaeleon", CIR: "Circinus",
  COL: "Columba", COM: "Coma Berenices", CRA: "Corona Australis",
  CRB: "Corona Borealis", CRV: "Corvus", CRT: "Crater", CRU: "Crux",
  CYG: "Cygnus", DEL: "Delphinus", DOR: "Dorado", DRA: "Draco", EQU: "Equuleus",
  ERI: "Eridanus", FOR: "Fornax", GEM: "Gemini", GRU: "Grus", HER: "Hercules",
  HOR: "Horologium", HYA: "Hydra", HYI: "Hydrus", IND: "Indus", LAC: "Lacerta",
  LEO: "Leo", LMI: "Leo Minor", LEP: "Lepus", LIB: "Libra", LUP: "Lupus",
  LYN: "Lynx", LYR: "Lyra", MEN: "Mensa", MIC: "Microscopium", MON: "Monoceros",
  MUS: "Musca", NOR: "Norma", OCT: "Octans", OPH: "Ophiuchus", ORI: "Orion",
  PAV: "Pavo", PEG: "Pegasus", PER: "Perseus", PHE: "Phoenix", PIC: "Pictor",
  PSC: "Pisces", PSA: "Piscis Austrinus", PUP: "Puppis", PYX: "Pyxis",
  RET: "Reticulum", SCL: "Sculptor", SCO: "Scorpius", SCT: "Scutum",
  SER: "Serpens", SEX: "Sextans", SGE: "Sagitta", SGR: "Sagittarius",
  TAU: "Taurus", TEL: "Telescopium", TRA: "Triangulum Australe",
  TRI: "Triangulum", TUC: "Tucana", UMA: "Ursa Major", UMI: "Ursa Minor",
  VEL: "Vela", VIR: "Virgo", VOL: "Volans", VUL: "Vulpecula",
};

const MESSIER_CONSTELLATION: Record<string, string> = {
  "M 1": "Taurus", "M 2": "Aquarius", "M 3": "Canes Venatici", "M 4": "Scorpius",
  "M 5": "Serpens", "M 8": "Sagittarius", "M 13": "Hercules", "M 16": "Serpens",
  "M 17": "Sagittarius", "M 20": "Sagittarius", "M 27": "Vulpecula",
  "M 31": "Andromeda", "M 33": "Triangulum", "M 42": "Orion", "M 45": "Taurus",
  "M 51": "Canes Venatici", "M 57": "Lyra", "M 63": "Canes Venatici",
  "M 64": "Coma Berenices", "M 65": "Leo", "M 66": "Leo", "M 74": "Pisces",
  "M 77": "Cetus", "M 81": "Ursa Major", "M 82": "Ursa Major", "M 83": "Hydra",
  "M 84": "Virgo", "M 85": "Coma Berenices", "M 86": "Virgo", "M 87": "Virgo",
  "M 88": "Coma Berenices", "M 89": "Virgo", "M 90": "Virgo",
  "M 91": "Coma Berenices", "M 94": "Canes Venatici", "M 95": "Leo",
  "M 96": "Leo", "M 97": "Ursa Major", "M 98": "Coma Berenices",
  "M 99": "Coma Berenices", "M 100": "Coma Berenices", "M 101": "Ursa Major",
  "M 102": "Draco", "M 104": "Virgo", "M 105": "Leo", "M 106": "Canes Venatici",
  "M 108": "Ursa Major", "M 109": "Ursa Major", "M 110": "Andromeda",
};

const DESCRIPTIONS: Record<string, string> = {
  Sirius: "La estrella más brillante del cielo nocturno, una binaria en el Can Mayor.",
  Canopus: "La segunda estrella más brillante del cielo, una supergigante en Carina.",
  Arcturus: "Gigante naranja y la estrella más brillante del hemisferio celeste norte.",
  Vega: "Una de las estrellas más brillantes y estudiadas, cúspide del Triángulo de Verano.",
  Capella: "La estrella más brillante de Auriga, un sistema múltiple de gigantes.",
  Rigel: "Supergigante azul y la estrella más brillante de Orión.",
  Procyon: "Binaria brillante en el Can Menor, uno de los vértices del Triángulo de Invierno.",
  Betelgeuse: "Supergigante roja en Orión, visible a simple vista con notorio color rojizo.",
  Achernar: "La estrella más brillante del Eridano, notable por su rápida rotación.",
  Altair: "Estrella brillante del Águila, vértice del Triángulo de Verano.",
  Aldebaran: "Gigante naranja que marca el ojo del Toro (Tauro).",
  Antares: "Supergigante roja que marca el corazón de Escorpio.",
  Spica: "La estrella más brillante de Virgo, un sistema binario cercano.",
  Pollux: "Gigante naranja, la estrella más brillante de Géminis.",
  Fomalhaut: "La estrella más brillante del Pez Austral, con un disco de escombros.",
  Deneb: "Supergigante blanca cúspide del Triángulo de Verano, en el Cisne.",
  Regulus: "La estrella más brillante de Leo.",
  Castor: "Sistema estelar sextuple en Géminis.",
  Mizar: "Binaria famosa de la Osa Mayor, acompañada de Alcor.",
  Algol: "Estrella binaria eclipsante de Perseo, el «ojo demoníaco».",
  Sadr: "Estrella brillante que marca el centro de la Cruz del Cisne.",
  "M 1": "Nebulosa del Cangrejo: remanente de la supernova observada en el año 1054.",
  "M 31": "Galaxia de Andrómeda: la gran galaxia espiral más cercana a la Vía Láctea.",
  "M 33": "Galaxia del Triángulo, una espiral del Grupo Local.",
  "M 42": "Nebulosa de Orión: la nebulosa de formación estelar más brillante del cielo.",
  "M 45": "Las Pléyades, el cúmulo estelar abierto más famoso del cielo.",
  "M 51": "Galaxia del Remolino, famosa por sus brazos espirales bien definidos.",
  "M 57": "Nebulosa del Anillo, una nebulosa planetaria en Lira.",
  "M 81": "Galaxia de Bode, una brillante espiral en la Osa Mayor.",
  "M 82": "Galaxia del Cigarro, con intensa formación estelar reciente.",
  "M 87": "Galaxia elíptica gigante de Virgo, primera con imagen de su agujero negro.",
  "M 104": "Galaxia del Sombrero, con un núcleo y una banda de polvo muy marcados.",
  "M 8": "Nebulosa de la Laguna, una región de formación estelar en Sagitario.",
  "M 16": "Nebulosa del Águila, sede de los «Pilares de la Creación».",
  "M 17": "Nebulosa Omega o del Cisne, región H II en Sagitario.",
  "M 20": "Nebulosa Trífida, una mezcla de nebulosa de emisión y reflexión.",
  "M 27": "Nebulosa Dumbbell (Pesa), una nebulosa planetaria en Vulpecula.",
  "M 13": "Gran cúmulo globular de Hércules.",
  "M 2": "Cúmulo globular de Acuario.",
  "M 3": "Cúmulo globular en Canes Venatici.",
  "M 97": "Nebulosa del Búho, una nebulosa planetaria en la Osa Mayor.",
};

const LIGHT_YEAR_PER_PARSEC = 3.26156;

type SimbadRow = {
  sid: string;
  oid: string;
  main_id: string;
  otype: string;
  otype_txt: string;
  ra: number | null;
  dec: number | null;
  sp_type: string | null;
  plx_value: number | null;
  v: number | null;
};

async function tap(adql: string): Promise<{ data: unknown[]; cols: string[] }> {
  const url = SIMBAD_TAP + encodeURIComponent(adql);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`SIMBAD TAP error ${res.status}`);
  const json = (await res.json()) as {
    metadata?: { name: string }[];
    data?: unknown[][];
  };
  const cols = (json.metadata ?? []).map((m) => m.name);
  const map = (row: unknown[]): Record<string, unknown> =>
    Object.fromEntries(cols.map((c, i) => [c, row[i]]));
  return { data: (json.data ?? []).map(map), cols };
}

function bayerConstellation(mainId: string): string | null {
  const m = mainId.match(/^\*\s+[a-z]{3}\s+([A-Za-z]{2,3})/);
  if (!m) return null;
  return CONSTELLATION_GENITIVE[m[1].toUpperCase()] ?? null;
}

function raSexagesimal(raDeg: number | null): string | null {
  if (raDeg === null) return null;
  const h = raDeg / 15;
  const hh = Math.floor(h);
  const mmf = (h - hh) * 60;
  const mm = Math.floor(mmf);
  const ss = (mmf - mm) * 60;
  return `${hh.toString().padStart(2, "0")} ${mm.toString().padStart(2, "0")} ${ss < 10 ? "0" : ""}${ss.toFixed(1)}`;
}

function decSexagesimal(decDeg: number | null): string | null {
  if (decDeg === null) return null;
  const sign = decDeg < 0 ? "-" : "+";
  const abs = Math.abs(decDeg);
  const dd = Math.floor(abs);
  const mf = (abs - dd) * 60;
  const mm = Math.floor(mf);
  const ss = (mf - mm) * 60;
  return `${sign}${dd.toString().padStart(2, "0")} ${mm.toString().padStart(2, "0")} ${ss < 10 ? "0" : ""}${ss.toFixed(1)}`;
}

function distanceFromParallax(plx: number | null): number | null {
  if (plx === null || plx <= 0) return null;
  return (1000 / plx) * LIGHT_YEAR_PER_PARSEC;
}

function mapType(row: SimbadRow): Prisma.CelestialBodyCreateManyInput["type"] | null {
  const o = row.otype;
  if (STAR_CODES.has(o) && !CLUSTER_CODES.has(o)) return "STAR";
  if (GALAXY_CODES.has(o)) return "GALAXY";
  if (NEBULA_CODES.has(o)) return "NEBULA";
  if (CLUSTER_CODES.has(o) || OTHER_CODES.has(o)) return "OTHER";
  return null;
}

function normalize(s: string): string {
  return s.toLowerCase().replace(/^name\s+/, "").replace(/\s+/g, "");
}

function identify(
  row: SimbadRow,
  inputId: string,
  counter: Record<string, number>,
): Prisma.CelestialBodyCreateManyInput | null {
  const type = mapType(row);
  if (!type) return null;

  const isMessier = inputId.startsWith("M ");
  const constellation = isMessier
    ? (MESSIER_CONSTELLATION[inputId] ?? null)
    : bayerConstellation(row.main_id);

  const designation = isMessier
    ? inputId
    : row.main_id.replace(/^\*\s*/, "");

  const mag = row.v;

  const curatedDesc = DESCRIPTIONS[inputId];

  const description =
    curatedDesc ??
    (type === "STAR"
      ? constellation
        ? `Estrella en la constelación de ${constellation}.`
        : "Estrella catalogada por SIMBAD."
      : type === "GALAXY"
        ? "Galaxia catalogada por SIMBAD."
        : type === "NEBULA"
          ? "Nebulosa catalogada por SIMBAD."
          : "Objeto astronómico catalogado por SIMBAD.");

  return {
    internalCode: `${type}-${String(++counter[type]).padStart(4, "0")}`,
    simbadId: row.main_id,
    officialName: row.main_id,
    designation,
    commonName: inputId,
    type,
    constellation,
    rightAscension: raSexagesimal(row.ra),
    declination: decSexagesimal(row.dec),
    magnitude: mag,
    spectralType: row.sp_type,
    distanceLightYears: distanceFromParallax(row.plx_value),
    description,
    imageUrl: null,
    isAvailable: true,
    source: "SIMBAD (CDS Strasbourg)",
  };
}

async function fetchBatch(ids: string[]): Promise<SimbadRow[]> {
  const inList = ids.map((id) => `'${id.replace(/'/g, "''")}'`).join(",");
  const adql = `SELECT i.id AS sid, b.oid, b.main_id, b.otype, b.otype_txt, b.ra, b.dec, b.sp_type, b.plx_value, a.V
FROM ident i
JOIN basic b ON b.oid = i.oidref
LEFT JOIN allfluxes a ON a.oidref = b.oid
WHERE i.id IN (${inList})`;
  const { data } = await tap(adql);
  const rows = data as Record<string, unknown>[];
  return rows.map((r) => ({
    sid: String(r.sid ?? ""),
    oid: String(r.oid ?? ""),
    main_id: String(r.main_id ?? ""),
    otype: String(r.otype ?? ""),
    otype_txt: String(r.otype_txt ?? ""),
    ra: r.ra === null || r.ra === undefined ? null : Number(r.ra),
    dec: r.dec === null || r.dec === undefined ? null : Number(r.dec),
    sp_type: r.sp_type === null || r.sp_type === undefined ? null : String(r.sp_type),
    plx_value:
      r.plx_value === null || r.plx_value === undefined ? null : Number(r.plx_value),
    v: r.V === null || r.V === undefined ? null : Number(r.V),
  }));
}

async function main() {
  const identifiers = [...STAR_NAMES, ...MESSIER_IDS];
  const counter: Record<string, number> = { STAR: 0, GALAXY: 0, NEBULA: 0, OTHER: 0 };

  const toCreate: Prisma.CelestialBodyCreateManyInput[] = [];
  let skipped = 0;

  for (let i = 0; i < identifiers.length; i += CHUNK_SIZE) {
    const chunk = identifiers.slice(i, i + CHUNK_SIZE);
    const rows = await fetchBatch(chunk);
    for (const inputId of chunk) {
      const matches = rows.filter((r) => normalize(r.sid) === normalize(inputId));
      const byOid = new Map<string, SimbadRow>();
      for (const row of matches) {
        if (!byOid.has(row.oid)) byOid.set(row.oid, row);
      }
      const first = byOid.values().next().value as SimbadRow | undefined;
      if (!first) {
        skipped++;
        continue;
      }
      const body = identify(first, inputId, counter);
      if (!body) {
        skipped++;
        continue;
      }
      toCreate.push(body);
    }
    console.log(`Procesados ${Math.min(i + CHUNK_SIZE, identifiers.length)}/${identifiers.length} identificadores`);
  }

  await prisma.celestialBody.deleteMany({});
  await prisma.celestialBody.createMany({ data: toCreate, skipDuplicates: true });

  const total = await prisma.celestialBody.count();
  const byType = await prisma.celestialBody.groupBy({ by: ["type"], _count: { _all: true } });
  console.log(`\nInsertados: ${total} cuerpos celestes`);
  for (const g of byType) {
    console.log(`  ${g.type}: ${g._count._all}`);
  }
  console.log(`Omitidos (no resueltos o tipo no mapeado): ${skipped}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());