-- AlterTable
ALTER TABLE "User" ADD COLUMN     "refreshToken" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "token" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "verificationToken" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "verifyByEmail" BOOLEAN NOT NULL DEFAULT false;
