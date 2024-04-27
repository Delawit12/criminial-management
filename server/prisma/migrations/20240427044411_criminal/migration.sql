/*
  Warnings:

  - You are about to drop the column `Status` on the `caseofficer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `caseofficer` DROP COLUMN `Status`;

-- AlterTable
ALTER TABLE `suspect` ADD COLUMN `criminal_id` INTEGER NULL;

-- CreateTable
CREATE TABLE `Criminal` (
    `Criminal_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(191) NOT NULL,
    `Age` INTEGER NOT NULL,
    `Gender` VARCHAR(191) NOT NULL,
    `Address` VARCHAR(191) NOT NULL,
    `Height` DOUBLE NOT NULL,
    `PhoneNo` VARCHAR(191) NOT NULL,
    `Nationality` VARCHAR(191) NOT NULL,
    `Religion` VARCHAR(191) NOT NULL,
    `Status` VARCHAR(191) NOT NULL,
    `Arrest_date` DATETIME(3) NOT NULL,
    `case_officer_id` INTEGER NULL,

    PRIMARY KEY (`Criminal_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Suspect` ADD CONSTRAINT `Suspect_criminal_id_fkey` FOREIGN KEY (`criminal_id`) REFERENCES `Criminal`(`Criminal_ID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Criminal` ADD CONSTRAINT `Criminal_case_officer_id_fkey` FOREIGN KEY (`case_officer_id`) REFERENCES `CaseOfficer`(`CaseOfficer_ID`) ON DELETE SET NULL ON UPDATE CASCADE;
