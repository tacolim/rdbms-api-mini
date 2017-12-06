
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('zoos').del()
    .then(function () {
      // Inserts seed entries
      return knex('zoos').insert([
        {name: 'San Diego Zoo'}, //1
        {name: 'National Zoo'}, //2
        {name: 'RiverWalk Zoo'} //3
      ]);
    });
};
