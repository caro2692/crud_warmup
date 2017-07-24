

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE wine CASCADE; ALTER SEQUENCE wine_id_seq restart with 6')
    .then(function () {
      // Inserts seed entries
      return knex('wine').insert([
        {
          id: 1,
          serial_number: 'xxx2398kdk',
          vineyard:'Rombauer',
          owner_id:1,
        },
        {
          id: 2,
          serial_number: 'askjdlxik2020',
          vineyard:'Silver Oak',
          owner_id:3,
        },
        {
          id: 3,
          serial_number: 'xxx2398k99kkdk',
          vineyard:'La Crema',
          owner_id:1,
        },
        {
          id: 4,
          serial_number: '7878askjdlxik2020',
          vineyard:'Patsy Farms',
          owner_id:2,
        },
        {
          id: 5,
          serial_number: 'axxxskjdlxik2020',
          vineyard:'Black Horse',
          owner_id:4,
        }
      ]);
    });
};
