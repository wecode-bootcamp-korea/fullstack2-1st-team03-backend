import express from 'express';
import mainRouter from './mainRouter';
import pingRouter from './pingRouter';
import cartRouter from './cartRouter';
import reviewRouter from './reviewRouter';
import detailRouter from './detailRouter';

const router = express.Router();

router.get('/', (req, res) => res.send('Welcome to Market Dooly &#128516;'));
router.use('/ping', pingRouter);
router.get('/main', mainRouter);
router.use('/cart', cartRouter);
router.use('/products/:id/reviews', reviewRouter);
router.use('/cart', cartRouter);
router.use('/products/:id/reviews', reviewRouter);
router.use('/products', detailRouter)

export default router;