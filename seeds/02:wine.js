

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE wine CASCADE; ALTER SEQUENCE wine_id_seq restart with 6')
    .then(function () {
      // Inserts seed entries
      return knex('wine').insert([
        {
          id: 1,
          name: 'Machete',
          vineyard:'Orin Swift',
          vintage: 2014,
          blend: 'Syrah',
          rating: 94,
          region: 'Calistoga California',
          img_url: 'http://www.orinswift.com/assets/client/File/Machete/Machete%20Bottle%20Shot%202012.jpg'
        },
        {
          id: 2,
          name: 'Lewis',
          vineyard:'Lewis',
          vintage: 2013,
          blend: 'Cabernet Sauvignon',
          rating: 95,
          region: 'Napa Valley',
          img_url: 'https://dmue3tlm98-flywheel.netdna-ssl.com/wp-content/uploads/2016/09/1222488x.jpg'
        },
        {
          id: 3,
          name: 'Tenshen',
          vineyard:'White Horse',
          vintage: 2015,
          blend: 'Chardonney',
          rating: 92,
          region: 'White Central Coast',
          img_url: 'http://static1.squarespace.com/static/575252e99f7266276378234d/590de2ac29687fab6afa0147/590de392d2b8578e6466c474/1495686481508/?format=1000w'
        },
        {
          id: 4,
          name: 'Kono',
          vineyard:'Duckhorn',
          vintage: 2015,
          blend: 'Sauvignon Blank',
          rating: 90,
          region: 'Marlborough',
          img_url: 'https://wine-searcher1.freetls.fastly.net/images/labels/58/47/kono-sauvignon-blanc-marlborough-new-zealand-10735847.jpg'

        },
        {
          id: 5,
          name: 'Hahn',
          vineyard:'Ravines',
          vintage: 2014,
          blend: 'Pinot Noir',
          rating: 92,
          region: 'Santa Lucia Highlands',
          img_url: 'http://www.lcbo.com/content/dam/lcbo/products/226555.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg'
        }
      ]);
    });
};
