exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('wine', function(table){
    table.increments('id').primary();
    table.string('serial_number').notNullable();
    table.string('vineyard').notNullable();
    table.integer('owner_id').unsigned();
    table.foreign('owner_id').references('person.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('wine');
};
