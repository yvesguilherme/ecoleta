import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

/**
 * Fazer depois melhorias:
 * >> Service Pattern
 * >> Repository Pattern (Data Mapper)
 */

/**
 * Padrão dos nomes dos métodos utilizados pela comunidade:
 * index: listagem
 * show: listar apenas 1 (um)
 * create ou store
 * update
 * delete ou destroy
 */
const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

/**
 * Rota: Endereço completo da requisição.
 * Recurso: Qual entidade estamos acessando do sistema
 */
routes.get('/items', itemsController.index);
routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;