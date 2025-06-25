/*
  Warnings:

  - You are about to drop the column `full` on the `User` table. All the data in the column will be lost.
  - Added the required column `first_name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_verified` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('user', 'provider');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "full",
ADD COLUMN     "first_name" TEXT NOT NULL,
ADD COLUMN     "is_verified" BOOLEAN NOT NULL,
ADD COLUMN     "last_name" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'user';
