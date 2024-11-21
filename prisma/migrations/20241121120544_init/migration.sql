-- CreateTable
CREATE TABLE "Invitation" (
    "id" TEXT NOT NULL,
    "wife" TEXT NOT NULL,
    "husband" TEXT NOT NULL,
    "place" TEXT NOT NULL,
    "wedding_date" TIMESTAMP(3) NOT NULL,
    "invitation_text" TEXT NOT NULL,
    "event_steps" JSONB[],
    "dresscode" JSONB NOT NULL,
    "questions" JSONB[],
    "presence_text" TEXT NOT NULL,
    "presence" JSONB[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Invitation_pkey" PRIMARY KEY ("id")
);
