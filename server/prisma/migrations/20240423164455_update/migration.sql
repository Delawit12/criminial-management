/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `Person` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `Person` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `person` ADD COLUMN `user_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `role` MODIFY `role_name` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Person_user_id_key` ON `Person`(`user_id`);

-- AddForeignKey
ALTER TABLE `Person` ADD CONSTRAINT `Person_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
