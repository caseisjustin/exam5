-- AlterTable
ALTER TABLE "User" ALTER COLUMN "endDate" DROP NOT NULL,
ALTER COLUMN "joinDate" DROP NOT NULL;

-- AlterTable
ALTER TABLE "trailers" ALTER COLUMN "currentLocation" DROP NOT NULL;
