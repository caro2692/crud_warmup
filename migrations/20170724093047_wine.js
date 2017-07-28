exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('wine', function(table){
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('vineyard').notNullable();
    table.integer('vintage').notNullable();
    table.string('blend').notNullable();
    table.integer('rating').notNullable();
    table.string('region').notNullable();
    table.string('img_url').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('wine');
};
