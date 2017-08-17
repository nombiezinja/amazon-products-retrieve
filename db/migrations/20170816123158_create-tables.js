
exports.up = function(knex, Promise) {
  return Promise.all([knex.schema.createTable('lists', function(table){
    table.increments('id').primary;
    table.string('uri');
    table.timestamps(true,true);
  }),
  knex.schema.createTable('list_items', function(table) {
    table.increments('id').primary;
    table.integer('list_id');
    table.string('ASIN');
    table.timestamps(true,true);
  }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('lists'),
    knex.schema.dropTable('list_items')
  ]);
};
