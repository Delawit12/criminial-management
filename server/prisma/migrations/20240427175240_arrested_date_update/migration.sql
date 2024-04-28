-- AlterTable
ALTER TABLE `suspect` ADD COLUMN `arrested_date_time` DATETIME(3) NULL,
    ADD COLUMN `releasedJustification` VARCHAR(191) NULL;
