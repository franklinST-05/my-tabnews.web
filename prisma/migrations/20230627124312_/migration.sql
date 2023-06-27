-- CreateTable
CREATE TABLE "tb_user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "tb_post" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "caffeine" INTEGER NOT NULL DEFAULT 0,
    "user_id" TEXT NOT NULL,
    CONSTRAINT "tb_post_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "tb_user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "tb_response" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "body" TEXT NOT NULL,
    "caffeine" INTEGER NOT NULL DEFAULT 0,
    "user_id" TEXT NOT NULL,
    "post_id" TEXT NOT NULL,
    "response_parent_id" TEXT,
    CONSTRAINT "tb_response_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "tb_user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "tb_response_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "tb_post" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "tb_response_response_parent_id_fkey" FOREIGN KEY ("response_parent_id") REFERENCES "tb_response" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "tb_user_id_key" ON "tb_user"("id");

-- CreateIndex
CREATE UNIQUE INDEX "tb_user_username_key" ON "tb_user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "tb_user_email_key" ON "tb_user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "tb_post_id_key" ON "tb_post"("id");

-- CreateIndex
CREATE UNIQUE INDEX "tb_post_slug_key" ON "tb_post"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "tb_response_id_key" ON "tb_response"("id");
