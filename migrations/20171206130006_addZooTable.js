
exports.up = function(knex, Promise) {
  return knex.schema.createTable('zoos', function(tb1) {
    tb1.increments('id');
    tb1.string('name', 255).notNullable().unique('name', 'uq_zoo_name');
    tb1.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('zoos');
};
