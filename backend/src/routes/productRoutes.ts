import express from 'express';
import multer from 'multer';
import path from 'path';
import { getProducts, createProduct, deleteProduct } from '../controllers/productController';

const router = express.Router();

const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

router.route('/').get(getProducts).post(upload.single('image'), createProduct);
router.route('/:id').delete(deleteProduct);

export default router;
