
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bears', function(tb1) {
      tb1.increments('id');
      tb1.integer('zooId')
        .notNullable()
        .references('id')
        .inTable('zoos');
      tb1.string('species', 80).notNullable().unique('species', 'uq_bear_species');
      tb1.string('latinName', 80).notNullable();
      tb1.timestamp('createdAt').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('bears');
};
