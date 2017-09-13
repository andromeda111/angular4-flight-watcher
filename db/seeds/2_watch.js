
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('watch').del()
    .then(function () {
      // Inserts seed entries
      return knex('watch').insert([
        {
          id: 1,
          watch_img: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZDY3ODM2YTgtYTU5NC00MTE4LTkzNjktMzNhZWZmMzJjMWRjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
          watch_title: 'Snakes On A Plane',
          movie_id: 2
        }
      ]);
    }).then(() => {
      return knex.raw(
        'SELECT setval('watch_id_seq', (SELECT MAX(id) FROM watch));'
      );
    });
};
