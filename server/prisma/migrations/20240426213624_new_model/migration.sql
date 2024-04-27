/*
  Warnings:

  - The primary key for the `caseofficer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `case_id` on the `caseofficer` table. All the data in the column will be lost.
  - You are about to drop the column `case_officer_id` on the `caseofficer` table. All the data in the column will be lost.
  - The primary key for the `incident` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `date_of_incident` on the `incident` table. All the data in the column will be lost.
  - You are about to drop the column `incident_id` on the `incident` table. All the data in the column will be lost.
  - You are about to drop the column `incident_type` on the `incident` table. All the data in the column will be lost.
  - You are about to drop the column `location_of_incident` on the `incident` table. All the data in the column will be lost.
  - The primary key for the `suspect` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `person_id` on the `suspect` table. All the data in the column will be lost.
  - You are about to drop the column `release_date` on the `suspect` table. All the data in the column will be lost.
  - You are about to drop the column `release_justification` on the `suspect` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `suspect` table. All the data in the column will be lost.
  - You are about to drop the column `suspect_id` on the `suspect` table. All the data in the column will be lost.
  - You are about to drop the `audittrail` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `case` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `firform` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `physicalattribute` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `property` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `witness` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `Assigned_Date` to the `CaseOfficer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CaseOfficer_ID` to the `CaseOfficer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `FIR_ID` to the `CaseOfficer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Officer_Name` to the `CaseOfficer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Rank` to the `CaseOfficer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Status` to the `CaseOfficer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Date_of_incident` to the `Incident` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Description` to the `Incident` table without a default value. This is not possible if the table is not empty.
  - Added the required column `FIR_ID` to the `Incident` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Incident_ID` to the `Incident` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Incident_type` to the `Incident` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Investigation_status` to the `Incident` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Location_of_incident` to the `Incident` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Time_of_incident` to the `Incident` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Address` to the `Suspect` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Age` to the `Suspect` table without a default value. This is not possible if the table is not empty.
  - Added the required column `FIR_ID` to the `Suspect` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Gender` to the `Suspect` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Height` to the `Suspect` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Name` to the `Suspect` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Nationality` to the `Suspect` table without a default value. This is not possible if the table is not empty.
  - Added the required column `PhoneNo` to the `Suspect` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Release_date` to the `Suspect` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Release_justification` to the `Suspect` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Religion` to the `Suspect` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Status` to the `Suspect` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Suspect_ID` to the `Suspect` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `audittrail` DROP FOREIGN KEY `AuditTrail_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `caseofficer` DROP FOREIGN KEY `CaseOfficer_case_id_fkey`;

-- DropForeignKey
ALTER TABLE `firform` DROP FOREIGN KEY `FIRForm_case_id_fkey`;

-- DropForeignKey
ALTER TABLE `firform` DROP FOREIGN KEY `FIRForm_officer_in_charge_id_fkey`;

-- DropForeignKey
ALTER TABLE `physicalattribute` DROP FOREIGN KEY `PhysicalAttribute_suspect_id_fkey`;

-- DropForeignKey
ALTER TABLE `property` DROP FOREIGN KEY `Property_incidentIncident_id_fkey`;

-- DropForeignKey
ALTER TABLE `suspect` DROP FOREIGN KEY `Suspect_person_id_fkey`;

-- DropForeignKey
ALTER TABLE `witness` DROP FOREIGN KEY `Witness_incident_id_fkey`;

-- DropForeignKey
ALTER TABLE `witness` DROP FOREIGN KEY `Witness_person_id_fkey`;

-- AlterTable
ALTER TABLE `caseofficer` DROP PRIMARY KEY,
    DROP COLUMN `case_id`,
    DROP COLUMN `case_officer_id`,
    ADD COLUMN `Assigned_Date` DATETIME(3) NOT NULL,
    ADD COLUMN `CaseOfficer_ID` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `FIR_ID` INTEGER NOT NULL,
    ADD COLUMN `Officer_Name` VARCHAR(191) NOT NULL,
    ADD COLUMN `Rank` VARCHAR(191) NOT NULL,
    ADD COLUMN `Status` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`CaseOfficer_ID`);

-- AlterTable
ALTER TABLE `incident` DROP PRIMARY KEY,
    DROP COLUMN `date_of_incident`,
    DROP COLUMN `incident_id`,
    DROP COLUMN `incident_type`,
    DROP COLUMN `location_of_incident`,
    ADD COLUMN `Date_of_incident` DATETIME(3) NOT NULL,
    ADD COLUMN `Description` VARCHAR(191) NOT NULL,
    ADD COLUMN `FIR_ID` INTEGER NOT NULL,
    ADD COLUMN `Incident_ID` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `Incident_type` VARCHAR(191) NOT NULL,
    ADD COLUMN `Investigation_status` VARCHAR(191) NOT NULL,
    ADD COLUMN `Location_of_incident` VARCHAR(191) NOT NULL,
    ADD COLUMN `Time_of_incident` DATETIME(3) NOT NULL,
    ADD PRIMARY KEY (`Incident_ID`);

-- AlterTable
ALTER TABLE `suspect` DROP PRIMARY KEY,
    DROP COLUMN `person_id`,
    DROP COLUMN `release_date`,
    DROP COLUMN `release_justification`,
    DROP COLUMN `status`,
    DROP COLUMN `suspect_id`,
    ADD COLUMN `Address` VARCHAR(191) NOT NULL,
    ADD COLUMN `Age` INTEGER NOT NULL,
    ADD COLUMN `FIR_ID` INTEGER NOT NULL,
    ADD COLUMN `Gender` VARCHAR(191) NOT NULL,
    ADD COLUMN `Height` DOUBLE NOT NULL,
    ADD COLUMN `Name` VARCHAR(191) NOT NULL,
    ADD COLUMN `Nationality` VARCHAR(191) NOT NULL,
    ADD COLUMN `PhoneNo` VARCHAR(191) NOT NULL,
    ADD COLUMN `Release_date` DATETIME(3) NOT NULL,
    ADD COLUMN `Release_justification` VARCHAR(191) NOT NULL,
    ADD COLUMN `Religion` VARCHAR(191) NOT NULL,
    ADD COLUMN `Status` VARCHAR(191) NOT NULL,
    ADD COLUMN `Suspect_ID` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`Suspect_ID`);

-- DropTable
DROP TABLE `audittrail`;

-- DropTable
DROP TABLE `case`;

-- DropTable
DROP TABLE `firform`;

-- DropTable
DROP TABLE `physicalattribute`;

-- DropTable
DROP TABLE `property`;

-- DropTable
DROP TABLE `witness`;

-- CreateTable
CREATE TABLE `FIR` (
    `FIR_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `FIR_Number` VARCHAR(191) NOT NULL,
    `fir_form_fill_Date` DATETIME(3) NOT NULL,
    `District` VARCHAR(191) NOT NULL,
    `PoliceStation` VARCHAR(191) NOT NULL,
    `InformationReceivedDate` DATETIME(3) NOT NULL,
    `InformationReceivedTime` DATETIME(3) NOT NULL,
    `Written` BOOLEAN NOT NULL,
    `Oral` BOOLEAN NOT NULL,
    `Status` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`FIR_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Complainant` (
    `Complainant_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `FIR_ID` INTEGER NOT NULL,
    `First_Name` VARCHAR(191) NOT NULL,
    `FatherName` VARCHAR(191) NOT NULL,
    `MotherName` VARCHAR(191) NOT NULL,
    `DateOfBirth` DATETIME(3) NOT NULL,
    `Nationality` VARCHAR(191) NOT NULL,
    `Religion` VARCHAR(191) NOT NULL,
    `Occupation` VARCHAR(191) NOT NULL,
    `NationalId` VARCHAR(191) NOT NULL,
    `Address` VARCHAR(191) NOT NULL,
    `PhoneNo` VARCHAR(191) NOT NULL,
    `Relation_with_the_suspect` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`Complainant_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Exhibit` (
    `Exhibit_ID` INTEGER NOT NULL AUTO_INCREMENT,
    `FIR_ID` INTEGER NOT NULL,
    `Description` VARCHAR(191) NOT NULL,
    `Attribute_type` VARCHAR(191) NOT NULL,
    `Value` VARCHAR(191) NOT NULL,
    `suspectSuspect_ID` INTEGER NULL,

    PRIMARY KEY (`Exhibit_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_PersonToSuspect` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_PersonToSuspect_AB_unique`(`A`, `B`),
    INDEX `_PersonToSuspect_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Incident` ADD CONSTRAINT `Incident_FIR_ID_fkey` FOREIGN KEY (`FIR_ID`) REFERENCES `FIR`(`FIR_ID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Complainant` ADD CONSTRAINT `Complainant_FIR_ID_fkey` FOREIGN KEY (`FIR_ID`) REFERENCES `FIR`(`FIR_ID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Suspect` ADD CONSTRAINT `Suspect_FIR_ID_fkey` FOREIGN KEY (`FIR_ID`) REFERENCES `FIR`(`FIR_ID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Exhibit` ADD CONSTRAINT `Exhibit_FIR_ID_fkey` FOREIGN KEY (`FIR_ID`) REFERENCES `FIR`(`FIR_ID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Exhibit` ADD CONSTRAINT `Exhibit_suspectSuspect_ID_fkey` FOREIGN KEY (`suspectSuspect_ID`) REFERENCES `Suspect`(`Suspect_ID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CaseOfficer` ADD CONSTRAINT `CaseOfficer_FIR_ID_fkey` FOREIGN KEY (`FIR_ID`) REFERENCES `FIR`(`FIR_ID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PersonToSuspect` ADD CONSTRAINT `_PersonToSuspect_A_fkey` FOREIGN KEY (`A`) REFERENCES `Person`(`person_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PersonToSuspect` ADD CONSTRAINT `_PersonToSuspect_B_fkey` FOREIGN KEY (`B`) REFERENCES `Suspect`(`Suspect_ID`) ON DELETE CASCADE ON UPDATE CASCADE;
