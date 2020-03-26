
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable(); //relacionamto
        
        table.foreign('ong_id').references('id').inTable('ongs'); //primary key referencia coluna id dentro da table ong
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');  
};
