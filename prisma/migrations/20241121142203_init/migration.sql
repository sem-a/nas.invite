/*
  Warnings:

  - Changed the type of `event_steps` on the `Invitation` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `questions` on the `Invitation` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `presence` on the `Invitation` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Invitation" DROP COLUMN "event_steps",
ADD COLUMN     "event_steps" JSONB NOT NULL,
DROP COLUMN "questions",
ADD COLUMN     "questions" JSONB NOT NULL,
DROP COLUMN "presence",
ADD COLUMN     "presence" JSONB NOT NULL;
