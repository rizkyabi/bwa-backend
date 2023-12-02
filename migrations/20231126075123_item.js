/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("item", (table) => {
    table.increments("id").primary().unsigned();
    table.string("title");
    table.integer("price");
    table.string("country");
    table.string("city");
    table.boolean("isPopular");
    table.string("description");
    table.integer("imageId").unsigned();
    table.foreign("imageId").references("image.id").onDelete("SET NULL");
    // Menggunakan onDelete untuk mengatur perilaku saat entitas di tabel image dihapus.
    table.integer("featureId").unsigned();
    table.foreign("featureId").references("feature.id").onDelete("SET NULL");
    table.integer("activityId").unsigned();
    table.foreign("activityId").references("feature.id").onDelete("SET NULL");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("item");
};
