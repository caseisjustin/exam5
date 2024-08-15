/*
  Warnings:

  - Changed the type of `salary` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "salary",
ADD COLUMN     "salary" BIGINT NOT NULL;
