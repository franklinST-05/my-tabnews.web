/*
  Warnings:

  - You are about to drop the column `caffeine` on the `tb_post` table. All the data in the column will be lost.
  - You are about to drop the column `caffeine` on the `tb_response` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `tb_response` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "tb_user_on_posts" (
    "user_id" TEXT NOT NULL,
    "post_id" TEXT NOT NULL,

    PRIMARY KEY ("user_id", "post_id"),
    CONSTRAINT "tb_user_on_posts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "tb_user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "tb_user_on_posts_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "tb_post" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "tb_category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "tb_user_on_responses" (
    "user_id" TEXT NOT NULL,
    "response_id" TEXT NOT NULL,

    PRIMARY KEY ("user_id", "response_id"),
    CONSTRAINT "tb_user_on_responses_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "tb_user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "tb_user_on_responses_response_id_fkey" FOREIGN KEY ("response_id") REFERENCES "tb_response" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_CategoryToPost" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CategoryToPost_A_fkey" FOREIGN KEY ("A") REFERENCES "tb_category" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CategoryToPost_B_fkey" FOREIGN KEY ("B") REFERENCES "tb_post" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_tb_post" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    CONSTRAINT "tb_post_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "tb_user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_tb_post" ("body", "description", "id", "slug", "title", "user_id") SELECT "body", "description", "id", "slug", "title", "user_id" FROM "tb_post";
DROP TABLE "tb_post";
ALTER TABLE "new_tb_post" RENAME TO "tb_post";
CREATE UNIQUE INDEX "tb_post_id_key" ON "tb_post"("id");
CREATE UNIQUE INDEX "tb_post_slug_key" ON "tb_post"("slug");
CREATE TABLE "new_tb_response" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "body" TEXT NOT NULL,
    "post_id" TEXT NOT NULL,
    "response_parent_id" TEXT,
    CONSTRAINT "tb_response_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "tb_post" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "tb_response_response_parent_id_fkey" FOREIGN KEY ("response_parent_id") REFERENCES "tb_response" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_tb_response" ("body", "id", "post_id", "response_parent_id") SELECT "body", "id", "post_id", "response_parent_id" FROM "tb_response";
DROP TABLE "tb_response";
ALTER TABLE "new_tb_response" RENAME TO "tb_response";
CREATE UNIQUE INDEX "tb_response_id_key" ON "tb_response"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "tb_category_id_key" ON "tb_category"("id");

-- CreateIndex
CREATE UNIQUE INDEX "tb_category_name_key" ON "tb_category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToPost_AB_unique" ON "_CategoryToPost"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToPost_B_index" ON "_CategoryToPost"("B");
