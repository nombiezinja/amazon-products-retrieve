exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('list_items', (table) => {
      table.foreign('list_id').references('lists.id').onDelete('CASCADE');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('list_items', (table) => {
      table.dropForeign('list_id');
    })
  ]);
};
