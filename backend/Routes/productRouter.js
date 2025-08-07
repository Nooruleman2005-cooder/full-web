import express from 'express';
import upload from '../Middlewares/upload.js';
import authMiddleware from '../Middlewares/authMiddleware.js'
import {createProduct , getAllProducts} from '../Controllers/productController.js';

const router = express.Router();

// ********* oute to create product with image********
router.post('/' , authMiddleware, upload.single('image'), createProduct);
router.get('/', getAllProducts)

export default router
