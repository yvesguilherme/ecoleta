import knex from 'knex';
import path from 'path';

/**
 * Conexão com o banco de dados.
 */
const connection = knex({
  client: 'sqlite3',
  connection: {
    /**
     * __dirname: sempre retorna o caminho do arquivo que está executando ele.
     */
    filename: path.resolve(__dirname, 'database.sqlite'),
  },
  useNullAsDefault: true
});

export default connection;