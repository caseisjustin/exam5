/*
  Warnings:

  - You are about to drop the column `trailerNumber` on the `trailers` table. All the data in the column will be lost.
  - Added the required column `trailerNum` to the `trailers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "trailers" DROP COLUMN "trailerNumber",
ADD COLUMN     "trailerNum" TEXT NOT NULL;
