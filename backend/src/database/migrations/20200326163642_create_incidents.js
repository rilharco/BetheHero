
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function (table) {
    table.increments();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.string('value').notNullable();
    // Referencia a tabela orgs
    table.string('org_id').notNullable();
    table.foreign('org_id').references('id').inTable('orgs');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
