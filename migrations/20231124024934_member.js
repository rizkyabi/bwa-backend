/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("member", (table) => {
    table.increments("id").primary().unsigned();
    table.string("firstName");
    table.string("lastName");
    table.string("email");
    table.string("phoneNumber");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("member");
};
