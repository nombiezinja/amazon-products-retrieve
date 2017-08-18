exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('list_items', (table) => {
      table.foreign('list_id').references('lists.id').onDelete('CASCADE');
    }),
    // knex.schema.table('searches', (table) => {
    //   table.foreign('list_uri').references('lists.uri').onDelete('CASCADE');
    // })

  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('list_items', (table) => {
      table.dropForeign('list_id');
    }),
    // knex.schema.table('searches', (table) => {
    //   table.dropForeign('list_uri');
    // })

  ]);
};
