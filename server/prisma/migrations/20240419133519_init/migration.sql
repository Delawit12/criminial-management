-- CreateTable
CREATE TABLE `User` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `role_id` INTEGER NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Role` (
    `role_id` INTEGER NOT NULL AUTO_INCREMENT,
    `role_name` VARCHAR(191) NOT NULL,
    `permissions` VARCHAR(191) NULL,

    PRIMARY KEY (`role_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Person` (
    `person_id` INTEGER NOT NULL AUTO_INCREMENT,
    `full_name` VARCHAR(191) NOT NULL,
    `date_of_birth` DATETIME(3) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NOT NULL,
    `department` VARCHAR(191) NULL,
    `badge_number` VARCHAR(191) NULL,
    `rank` VARCHAR(191) NULL,
    `hire_date` DATETIME(3) NULL,

    PRIMARY KEY (`person_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Suspect` (
    `suspect_id` INTEGER NOT NULL AUTO_INCREMENT,
    `person_id` INTEGER NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `release_date` DATETIME(3) NOT NULL,
    `release_justification` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`suspect_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PhysicalAttribute` (
    `attribute_id` INTEGER NOT NULL AUTO_INCREMENT,
    `suspect_id` INTEGER NOT NULL,
    `attribute_type` VARCHAR(191) NOT NULL,
    `attribute_details` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`attribute_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Case` (
    `case_id` INTEGER NOT NULL AUTO_INCREMENT,
    `case_number` VARCHAR(191) NOT NULL,
    `case_status` VARCHAR(191) NOT NULL,
    `case_description` VARCHAR(191) NOT NULL,
    `creation_date` DATETIME(3) NOT NULL,
    `last_update` DATETIME(3) NOT NULL,

    PRIMARY KEY (`case_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CaseOfficer` (
    `case_officer_id` INTEGER NOT NULL AUTO_INCREMENT,
    `case_id` INTEGER NOT NULL,
    `userUser_id` INTEGER NULL,

    PRIMARY KEY (`case_officer_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Incident` (
    `incident_id` INTEGER NOT NULL AUTO_INCREMENT,
    `date_of_incident` DATETIME(3) NOT NULL,
    `location_of_incident` VARCHAR(191) NOT NULL,
    `incident_type` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`incident_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Witness` (
    `witness_id` INTEGER NOT NULL AUTO_INCREMENT,
    `incident_id` INTEGER NOT NULL,
    `person_id` INTEGER NOT NULL,

    PRIMARY KEY (`witness_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Property` (
    `property_id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NOT NULL,
    `incidentIncident_id` INTEGER NULL,

    PRIMARY KEY (`property_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Notification` (
    `notification_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `notification_type` VARCHAR(191) NOT NULL,
    `notification_message` VARCHAR(191) NOT NULL,
    `creation_date` DATETIME(3) NOT NULL,
    `is_read` BOOLEAN NOT NULL,

    PRIMARY KEY (`notification_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AuditTrail` (
    `log_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `action_performed` VARCHAR(191) NOT NULL,
    `record_affected` VARCHAR(191) NOT NULL,
    `timestamp` DATETIME(3) NOT NULL,

    PRIMARY KEY (`log_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FIRForm` (
    `fir_id` INTEGER NOT NULL AUTO_INCREMENT,
    `case_id` INTEGER NULL,
    `crime_details` VARCHAR(191) NOT NULL,
    `date_of_incident` DATETIME(3) NOT NULL,
    `location_of_incident` VARCHAR(191) NOT NULL,
    `reporting_party_name` VARCHAR(191) NOT NULL,
    `reporting_party_contact` VARCHAR(191) NOT NULL,
    `reporting_party_statement` VARCHAR(191) NOT NULL,
    `officer_in_charge_id` INTEGER NULL,
    `creation_date` DATETIME(3) NOT NULL,
    `last_update` DATETIME(3) NOT NULL,

    PRIMARY KEY (`fir_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `Role`(`role_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Suspect` ADD CONSTRAINT `Suspect_person_id_fkey` FOREIGN KEY (`person_id`) REFERENCES `Person`(`person_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PhysicalAttribute` ADD CONSTRAINT `PhysicalAttribute_suspect_id_fkey` FOREIGN KEY (`suspect_id`) REFERENCES `Suspect`(`suspect_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CaseOfficer` ADD CONSTRAINT `CaseOfficer_case_id_fkey` FOREIGN KEY (`case_id`) REFERENCES `Case`(`case_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CaseOfficer` ADD CONSTRAINT `CaseOfficer_userUser_id_fkey` FOREIGN KEY (`userUser_id`) REFERENCES `User`(`user_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Witness` ADD CONSTRAINT `Witness_incident_id_fkey` FOREIGN KEY (`incident_id`) REFERENCES `Incident`(`incident_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Witness` ADD CONSTRAINT `Witness_person_id_fkey` FOREIGN KEY (`person_id`) REFERENCES `Person`(`person_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Property` ADD CONSTRAINT `Property_incidentIncident_id_fkey` FOREIGN KEY (`incidentIncident_id`) REFERENCES `Incident`(`incident_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notification` ADD CONSTRAINT `Notification_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AuditTrail` ADD CONSTRAINT `AuditTrail_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FIRForm` ADD CONSTRAINT `FIRForm_case_id_fkey` FOREIGN KEY (`case_id`) REFERENCES `Case`(`case_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FIRForm` ADD CONSTRAINT `FIRForm_officer_in_charge_id_fkey` FOREIGN KEY (`officer_in_charge_id`) REFERENCES `User`(`user_id`) ON DELETE SET NULL ON UPDATE CASCADE;
