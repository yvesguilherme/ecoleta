import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

/** Bibliotecas externas. */
import { errors } from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota utiliazada para arquivos estáticos no sistema.
 * Ex: .PDF, .SVG, .DOC, etc.
 */
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333);

