/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("activity", (table) => {
    table.increments("id").primary().unsigned();
    table.string("name");
    table.string("type");
    table.string("imageUrl");
    table.boolean("isPopular");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("activity");
};
