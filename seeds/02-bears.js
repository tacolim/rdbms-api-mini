
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bears').del()
    .then(function () {
      // Inserts seed entries
      return knex('bears').insert([
        {'zooId': 1, species: 'Panda Bear', latinName: 'Ursus Panda'},
        {'zooId': 1, species: 'Grizzly Bear', latinName: 'Ursus Articus'},
        {'zooId': 1, species: 'Polar Bear', latinName: 'Ursus Maritine'},
      ]);
    });
};
