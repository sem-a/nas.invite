/*
  Warnings:

  - You are about to drop the column `presence` on the `Invitation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Invitation" DROP COLUMN "presence";

-- CreateTable
CREATE TABLE "Presence" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "presence" BOOLEAN NOT NULL,
    "invitation_id" TEXT NOT NULL,

    CONSTRAINT "Presence_pkey" PRIMARY KEY ("id")
);
