
exports.up = function(knex, Promise) {
  // what happens when we run migrations
  return knex.schema.createTable('zoos', function(tbl) {
    tbl.increments('id'); //automatically would be id, we put 'id' to make things clear
    tbl.string('name', 255).notNullable().unique('name');
    tbl.timestamp('created_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  // to rollback or undo the changes
  return knex.schema.dropTableIfExists('zoos');
};
