/*
  Warnings:

  - Added the required column `is_verified` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('user', 'provider');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "is_verified" BOOLEAN NOT NULL,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'user';
