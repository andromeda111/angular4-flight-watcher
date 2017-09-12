
exports.up = function(knex, Promise) {
  return knex.schema.createTable('watch', table => {
    table.increments()
    table.string('watch_img').notNullable()
    table.string('watch_title').notNullable().default('')
    table.integer('movie_id').references('id').inTable('movies').defaultTo(null).onDelete('set null')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('watch')
};
