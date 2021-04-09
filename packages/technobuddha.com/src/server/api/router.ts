import express          from 'express';
import authentication   from './router/authentication';
import music            from './router/music';

export const api = express.Router();

api.use('/authentication', authentication);
api.use('/music', music);

api.use(
    (_req, res) => {
        res.status(404).render('error/404.hbs');
    }
);

export default api;
