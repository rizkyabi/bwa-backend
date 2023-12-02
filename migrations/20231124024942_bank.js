/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("bank", (table) => {
    table.increments("id").primary().unsigned();
    table.string("nameBank");
    table.string("nomorRekening");
    table.string("name");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("bank");
};
