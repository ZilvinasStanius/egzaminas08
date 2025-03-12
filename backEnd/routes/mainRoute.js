import express from 'express';
import postRoute from './postRoute.js'
import userRoute from './userRoute.js';

const router = express.Router();

router.use('/post', postRoute);
router.use('/user', userRoute);

export default router;