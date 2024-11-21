/*
  Warnings:

  - Added the required column `dresscode` to the `Invitation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `invitation_text` to the `Invitation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `place` to the `Invitation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `presence_text` to the `Invitation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Invitation" ADD COLUMN     "dresscode" JSONB NOT NULL,
ADD COLUMN     "event_steps" JSONB[],
ADD COLUMN     "invitation_text" TEXT NOT NULL,
ADD COLUMN     "place" TEXT NOT NULL,
ADD COLUMN     "presence" JSONB[],
ADD COLUMN     "presence_text" TEXT NOT NULL,
ADD COLUMN     "questions" JSONB[];
