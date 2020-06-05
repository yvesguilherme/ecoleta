import path from 'path';

/**
 * Comando para executar as migrations:
 * 
 * >> npx knex migrate:latest --knexfile (caminho_arquivo_knexfile) knexfile.ts
 */
module.exports = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite'),
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  seeds: {
    directory: path.resolve(__dirname, 'src', 'database', 'seeds')
  },
  useNullAsDefault: true
};