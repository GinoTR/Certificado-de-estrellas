-- CreateEnum
CREATE TYPE "CelestialType" AS ENUM ('STAR', 'PLANET', 'DWARF_PLANET', 'MOON', 'ASTEROID', 'COMET', 'NEBULA', 'GALAXY', 'CONSTELLATION', 'OTHER');

-- CreateEnum
CREATE TYPE "CertStatus" AS ENUM ('PENDING', 'PAID', 'GENERATED', 'DELIVERED', 'CANCELLED');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "lastName" TEXT,
    "passwordHash" TEXT NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CelestialBody" (
    "id" TEXT NOT NULL,
    "internalCode" TEXT NOT NULL,
    "simbadId" TEXT,
    "officialName" TEXT,
    "designation" TEXT,
    "commonName" TEXT,
    "type" "CelestialType" NOT NULL,
    "constellation" TEXT,
    "rightAscension" TEXT,
    "declination" TEXT,
    "magnitude" DOUBLE PRECISION,
    "spectralType" TEXT,
    "distanceLightYears" DOUBLE PRECISION,
    "description" TEXT,
    "imageUrl" TEXT,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,
    "source" TEXT DEFAULT 'SIMBAD (CDS Strasbourg)',

    CONSTRAINT "CelestialBody_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Certificate" (
    "id" TEXT NOT NULL,
    "uniqueCode" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "celestialBodyId" TEXT NOT NULL,
    "symbolicName" TEXT NOT NULL,
    "recipientName" TEXT NOT NULL,
    "recipientEmail" TEXT,
    "message" TEXT,
    "status" "CertStatus" NOT NULL DEFAULT 'PENDING',
    "issuedAt" TIMESTAMP(3),
    "pdfUrl" TEXT,
    "paymentId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Certificate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "CelestialBody_internalCode_key" ON "CelestialBody"("internalCode");

-- CreateIndex
CREATE UNIQUE INDEX "CelestialBody_simbadId_key" ON "CelestialBody"("simbadId");

-- CreateIndex
CREATE UNIQUE INDEX "Certificate_uniqueCode_key" ON "Certificate"("uniqueCode");

-- AddForeignKey
ALTER TABLE "Certificate" ADD CONSTRAINT "Certificate_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Certificate" ADD CONSTRAINT "Certificate_celestialBodyId_fkey" FOREIGN KEY ("celestialBodyId") REFERENCES "CelestialBody"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
