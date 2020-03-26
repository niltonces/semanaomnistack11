const express = require ('express');

const app = express();

app.use(express.json());

/**
 * Rota / Recurso
 */

/**
  * Métodos HTTP:
  * GET: Buscar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Apagar uma informação no back-end
*/

/**
 * Tipos de Parâmetros:
 * Query Params: Parâmtros nomeados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos.
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
*/

/**
 * Banco de Dados
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDb, CouchDB, etc.
 */

/**
 * Driver: 
 */

app.post('/users', (request, response) => {
    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Juca Pato'
    });

});

app.listen(3333);
