/*
  Warnings:

  - The primary key for the `criminal` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Address` on the `criminal` table. All the data in the column will be lost.
  - You are about to drop the column `Age` on the `criminal` table. All the data in the column will be lost.
  - You are about to drop the column `Arrest_date` on the `criminal` table. All the data in the column will be lost.
  - You are about to drop the column `Criminal_ID` on the `criminal` table. All the data in the column will be lost.
  - You are about to drop the column `Gender` on the `criminal` table. All the data in the column will be lost.
  - You are about to drop the column `Height` on the `criminal` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `criminal` table. All the data in the column will be lost.
  - You are about to drop the column `Nationality` on the `criminal` table. All the data in the column will be lost.
  - You are about to drop the column `PhoneNo` on the `criminal` table. All the data in the column will be lost.
  - You are about to drop the column `Religion` on the `criminal` table. All the data in the column will be lost.
  - You are about to drop the column `Status` on the `criminal` table. All the data in the column will be lost.
  - You are about to drop the column `case_officer_id` on the `criminal` table. All the data in the column will be lost.
  - The primary key for the `suspect` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Address` on the `suspect` table. All the data in the column will be lost.
  - You are about to drop the column `Age` on the `suspect` table. All the data in the column will be lost.
  - You are about to drop the column `FIR_ID` on the `suspect` table. All the data in the column will be lost.
  - You are about to drop the column `Gender` on the `suspect` table. All the data in the column will be lost.
  - You are about to drop the column `Height` on the `suspect` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `suspect` table. All the data in the column will be lost.
  - You are about to drop the column `Nationality` on the `suspect` table. All the data in the column will be lost.
  - You are about to drop the column `PhoneNo` on the `suspect` table. All the data in the column will be lost.
  - You are about to drop the column `Release_date` on the `suspect` table. All the data in the column will be lost.
  - You are about to drop the column `Release_justification` on the `suspect` table. All the data in the column will be lost.
  - You are about to drop the column `Religion` on the `suspect` table. All the data in the column will be lost.
  - You are about to drop the column `Status` on the `suspect` table. All the data in the column will be lost.
  - You are about to drop the column `Suspect_ID` on the `suspect` table. All the data in the column will be lost.
  - You are about to drop the column `criminal_id` on the `suspect` table. All the data in the column will be lost.
  - You are about to drop the `_persontosuspect` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `caseofficer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `complainant` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `exhibit` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `fir` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `incident` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `notification` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `added_by` to the `Criminal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `case_status` to the `Criminal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `compliant_id` to the `Criminal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `crime_type` to the `Criminal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `criminal_address` to the `Criminal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `criminal_age` to the `Criminal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `criminal_description` to the `Criminal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `criminal_gender` to the `Criminal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `criminal_height` to the `Criminal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `criminal_id` to the `Criminal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `criminal_name` to the `Criminal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `criminal_nationality` to the `Criminal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `criminal_phone_number` to the `Criminal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `criminal_religion` to the `Criminal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `decided_prison_term` to the `Criminal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `derived_from_suspect_id` to the `Criminal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `added_by` to the `Suspect` table without a default value. This is not possible if the table is not empty.
  - Added the required column `suspect_address` to the `Suspect` table without a default value. This is not possible if the table is not empty.
  - Added the required column `suspect_age` to the `Suspect` table without a default value. This is not possible if the table is not empty.
  - Added the required column `suspect_description` to the `Suspect` table without a default value. This is not possible if the table is not empty.
  - Added the required column `suspect_gender` to the `Suspect` table without a default value. This is not possible if the table is not empty.
  - Added the required column `suspect_height` to the `Suspect` table without a default value. This is not possible if the table is not empty.
  - Added the required column `suspect_id` to the `Suspect` table without a default value. This is not possible if the table is not empty.
  - Added the required column `suspect_name` to the `Suspect` table without a default value. This is not possible if the table is not empty.
  - Added the required column `suspect_nationality` to the `Suspect` table without a default value. This is not possible if the table is not empty.
  - Added the required column `suspect_phone_number` to the `Suspect` table without a default value. This is not possible if the table is not empty.
  - Added the required column `suspect_religion` to the `Suspect` table without a default value. This is not possible if the table is not empty.
  - Added the required column `suspect_status` to the `Suspect` table without a default value. This is not possible if the table is not empty.
  - Added the required column `suspected_reason` to the `Suspect` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_persontosuspect` DROP FOREIGN KEY `_PersonToSuspect_A_fkey`;

-- DropForeignKey
ALTER TABLE `_persontosuspect` DROP FOREIGN KEY `_PersonToSuspect_B_fkey`;

-- DropForeignKey
ALTER TABLE `caseofficer` DROP FOREIGN KEY `CaseOfficer_FIR_ID_fkey`;

-- DropForeignKey
ALTER TABLE `caseofficer` DROP FOREIGN KEY `CaseOfficer_userUser_id_fkey`;

-- DropForeignKey
ALTER TABLE `complainant` DROP FOREIGN KEY `Complainant_FIR_ID_fkey`;

-- DropForeignKey
ALTER TABLE `criminal` DROP FOREIGN KEY `Criminal_case_officer_id_fkey`;

-- DropForeignKey
ALTER TABLE `exhibit` DROP FOREIGN KEY `Exhibit_FIR_ID_fkey`;

-- DropForeignKey
ALTER TABLE `exhibit` DROP FOREIGN KEY `Exhibit_suspectSuspect_ID_fkey`;

-- DropForeignKey
ALTER TABLE `incident` DROP FOREIGN KEY `Incident_FIR_ID_fkey`;

-- DropForeignKey
ALTER TABLE `notification` DROP FOREIGN KEY `Notification_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `suspect` DROP FOREIGN KEY `Suspect_FIR_ID_fkey`;

-- DropForeignKey
ALTER TABLE `suspect` DROP FOREIGN KEY `Suspect_criminal_id_fkey`;

-- AlterTable
ALTER TABLE `criminal` DROP PRIMARY KEY,
    DROP COLUMN `Address`,
    DROP COLUMN `Age`,
    DROP COLUMN `Arrest_date`,
    DROP COLUMN `Criminal_ID`,
    DROP COLUMN `Gender`,
    DROP COLUMN `Height`,
    DROP COLUMN `Name`,
    DROP COLUMN `Nationality`,
    DROP COLUMN `PhoneNo`,
    DROP COLUMN `Religion`,
    DROP COLUMN `Status`,
    DROP COLUMN `case_officer_id`,
    ADD COLUMN `added_by` INTEGER NOT NULL,
    ADD COLUMN `case_status` VARCHAR(191) NOT NULL,
    ADD COLUMN `compliant_id` INTEGER NOT NULL,
    ADD COLUMN `crime_type` VARCHAR(191) NOT NULL,
    ADD COLUMN `criminal_address` VARCHAR(191) NOT NULL,
    ADD COLUMN `criminal_age` INTEGER NOT NULL,
    ADD COLUMN `criminal_description` VARCHAR(191) NOT NULL,
    ADD COLUMN `criminal_gender` VARCHAR(191) NOT NULL,
    ADD COLUMN `criminal_height` VARCHAR(191) NOT NULL,
    ADD COLUMN `criminal_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `criminal_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `criminal_nationality` VARCHAR(191) NOT NULL,
    ADD COLUMN `criminal_phone_number` VARCHAR(191) NOT NULL,
    ADD COLUMN `criminal_religion` VARCHAR(191) NOT NULL,
    ADD COLUMN `decided_prison_term` VARCHAR(191) NOT NULL,
    ADD COLUMN `derived_from_suspect_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`criminal_id`);

-- AlterTable
ALTER TABLE `suspect` DROP PRIMARY KEY,
    DROP COLUMN `Address`,
    DROP COLUMN `Age`,
    DROP COLUMN `FIR_ID`,
    DROP COLUMN `Gender`,
    DROP COLUMN `Height`,
    DROP COLUMN `Name`,
    DROP COLUMN `Nationality`,
    DROP COLUMN `PhoneNo`,
    DROP COLUMN `Release_date`,
    DROP COLUMN `Release_justification`,
    DROP COLUMN `Religion`,
    DROP COLUMN `Status`,
    DROP COLUMN `Suspect_ID`,
    DROP COLUMN `criminal_id`,
    ADD COLUMN `added_by` INTEGER NOT NULL,
    ADD COLUMN `compliant_id` INTEGER NULL,
    ADD COLUMN `personPerson_id` INTEGER NULL,
    ADD COLUMN `suspect_address` VARCHAR(191) NOT NULL,
    ADD COLUMN `suspect_age` INTEGER NOT NULL,
    ADD COLUMN `suspect_description` VARCHAR(191) NOT NULL,
    ADD COLUMN `suspect_gender` VARCHAR(191) NOT NULL,
    ADD COLUMN `suspect_height` VARCHAR(191) NOT NULL,
    ADD COLUMN `suspect_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `suspect_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `suspect_nationality` VARCHAR(191) NOT NULL,
    ADD COLUMN `suspect_phone_number` VARCHAR(191) NOT NULL,
    ADD COLUMN `suspect_religion` VARCHAR(191) NOT NULL,
    ADD COLUMN `suspect_status` VARCHAR(191) NOT NULL,
    ADD COLUMN `suspected_reason` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`suspect_id`);

-- DropTable
DROP TABLE `_persontosuspect`;

-- DropTable
DROP TABLE `caseofficer`;

-- DropTable
DROP TABLE `complainant`;

-- DropTable
DROP TABLE `exhibit`;

-- DropTable
DROP TABLE `fir`;

-- DropTable
DROP TABLE `incident`;

-- DropTable
DROP TABLE `notification`;

-- CreateTable
CREATE TABLE `Compliant` (
    `compliant_id` INTEGER NOT NULL AUTO_INCREMENT,
    `compliant_description` VARCHAR(191) NOT NULL,
    `date_received` DATETIME(3) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `compliant_first_name` VARCHAR(191) NOT NULL,
    `compliant_father_name` VARCHAR(191) NOT NULL,
    `compliant_mother_name` VARCHAR(191) NOT NULL,
    `compliant_date_of_birth` DATETIME(3) NOT NULL,
    `compliant_nationality` VARCHAR(191) NOT NULL,
    `compliant_religion` VARCHAR(191) NOT NULL,
    `compliant_occupation` VARCHAR(191) NOT NULL,
    `compliant_national_id` VARCHAR(191) NOT NULL,
    `compliant_address` VARCHAR(191) NOT NULL,
    `compliant_phone_number` VARCHAR(191) NOT NULL,
    `relationship_with_suspect` VARCHAR(191) NOT NULL,
    `added_by` INTEGER NOT NULL,

    PRIMARY KEY (`compliant_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Compliant` ADD CONSTRAINT `Compliant_added_by_fkey` FOREIGN KEY (`added_by`) REFERENCES `User`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Suspect` ADD CONSTRAINT `Suspect_added_by_fkey` FOREIGN KEY (`added_by`) REFERENCES `User`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Suspect` ADD CONSTRAINT `Suspect_compliant_id_fkey` FOREIGN KEY (`compliant_id`) REFERENCES `Compliant`(`compliant_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Suspect` ADD CONSTRAINT `Suspect_personPerson_id_fkey` FOREIGN KEY (`personPerson_id`) REFERENCES `Person`(`person_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Criminal` ADD CONSTRAINT `Criminal_added_by_fkey` FOREIGN KEY (`added_by`) REFERENCES `User`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Criminal` ADD CONSTRAINT `Criminal_compliant_id_fkey` FOREIGN KEY (`compliant_id`) REFERENCES `Compliant`(`compliant_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Criminal` ADD CONSTRAINT `Criminal_derived_from_suspect_id_fkey` FOREIGN KEY (`derived_from_suspect_id`) REFERENCES `Suspect`(`suspect_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
