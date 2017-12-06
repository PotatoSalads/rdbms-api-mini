
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('zoos').del()
    .then(function () {
      // Inserts seed entries
      return knex('zoos').insert([
        {name: 'Alaska Zoo'}, // 1
        {name: 'Bronx Zoo'}, // 2
        {name: 'San Diego'} // 3
      ]);
    });
};
