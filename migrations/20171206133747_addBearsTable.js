
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bears', function(tbl) {
    tbl.increments('id');
    tbl.integer('zooId').notNullable().references('id').inTable('zoos'); //define foreign keys or relationships
    tbl.string('species', 80).notNullable().unique('species');
    tbl.string('latinName', 80).notNullable();
    tbl.timestamp('createdAt').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('bears');
};
