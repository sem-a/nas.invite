-- CreateTable
CREATE TABLE "Invitation" (
    "id" TEXT NOT NULL,
    "wife" TEXT NOT NULL,
    "husband" TEXT NOT NULL,
    "wedding_date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Invitation_pkey" PRIMARY KEY ("id")
);
