import express from 'express';

/** Bibliotecas externas. */
import multer from 'multer';
import multerConfig from './config/multer';
import { celebrate, Joi } from 'celebrate';

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
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

/**
 * Rota: Endereço completo da requisição.
 * Recurso: Qual entidade estamos acessando do sistema
 */
routes.get('/items', itemsController.index);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

routes.post(
  '/points',
  upload.single('image'),
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.number().required(),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      city: Joi.string().required(),
      uf: Joi.string().required().max(2),
      items: Joi.string().required()
    })
  },
    {
      abortEarly: false
    }),
  pointsController.create
);

export default routes;