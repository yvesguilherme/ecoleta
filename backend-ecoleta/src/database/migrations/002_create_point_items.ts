import Knex from 'knex';

// CRIAR A TABELA
export async function up(knex: Knex) {
  return knex.schema.createTable('point_items', table => {
    table.increments('id').primary();

    table.integer('point_id') // Cria uma chave estrangeira na tabela points no campo id
      .notNullable()
      .references('id')
      .inTable('points');

    table.integer('item_id') // Cria uma chave estrangeira na tabela items no campo id
      .notNullable()
      .references('id')
      .inTable('items');
  });
}

// VOLTAR ATRÁS (FAZER TODO O INVERSO DO UP, POR EXEMPLO DELETAR A TABELA)
export async function down(knex: Knex) {
  return knex.schema.dropTable('point_items');
}