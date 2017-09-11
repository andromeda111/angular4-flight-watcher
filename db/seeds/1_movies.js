
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {
          id: 1,
          img: 'https://upload.wikimedia.org/wikipedia/en/f/f5/Airplane%21.jpg',
          title: 'Airplane!'
        },
        {
          id: 2,
          img: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZDY3ODM2YTgtYTU5NC00MTE4LTkzNjktMzNhZWZmMzJjMWRjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
          title: 'Snakes on a Plane'
        },
        {
          id: 3,
          img: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_.jpg',
          title: 'Catch Me If You Can'
        }
      ]);
    });
};
