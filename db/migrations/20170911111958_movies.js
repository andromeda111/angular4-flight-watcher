
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', table => {
    table.increments()
    table.string('img').notNullable()
    table.string('title').notNullable().default('')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies')
};
