/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("booking", (table) => {
    table.increments("id").primary().unsigned();
    table.date("bookingStartDate");
    table.date("bookingEndDate");
    table.integer("itemId").unsigned();
    table.foreign("itemId").references("item.id").onDelete("CASCADE");
    table.integer("memberId").unsigned();
    table.foreign("memberId").references("member.id").onDelete("SET NULL");
    table.integer("bankId").unsigned();
    table.foreign("bankId").references("bank.id").onDelete("CASCADE");
    table.string("proofPayment");
    table.string("bankFrom");
    table.string("accountHolder");
    table.string("imageUrl");
    table.string("status");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("booking");
};
