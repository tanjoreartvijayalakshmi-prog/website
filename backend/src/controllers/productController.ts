import { Request, Response } from 'express';
import Product from '../models/Product';

// @desc    Get all products
// @route   GET /api/products
// @access  Public
export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find({}).sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Create a product
// @route   POST /api/products
// @access  Admin
export const createProduct = async (req: Request, res: Response) => {
  try {
    const { title, artist, description, category } = req.body;
    
    let imageUrl = '/images/hero_bg.png';
    let imagePublicId = 'placeholder';
    
    if (req.file) {
      const base64Image = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
      imageUrl = base64Image;
      imagePublicId = req.file.originalname || 'uploaded_image';
    } else if (req.body.imageUrl) {
      imageUrl = req.body.imageUrl;
    }

    const product = new Product({
      title,
      slug: title.toLowerCase().replace(/ /g, '-'),
      artist: artist || 'Unknown Artist',
      description,
      medium: category || 'Mixed Media',
      dimensions: { width: 100, height: 100 },
      images: [
        {
          url: imageUrl,
          public_id: imagePublicId,
          isPrimary: true
        }
      ],
      stock: 1,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Admin
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      await Product.deleteOne({ _id: product._id });
      res.json({ message: 'Product removed' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Admin
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { title, artist, description, category } = req.body;
    const product = await Product.findById(req.params.id);

    if (product) {
      product.title = title || product.title;
      product.artist = artist || product.artist;
      product.description = description || product.description;
      product.medium = category || product.medium;
      
      if (title) {
        product.slug = title.toLowerCase().replace(/ /g, '-');
      }

      if (req.file) {
        const base64Image = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
        product.images = [{
          url: base64Image,
          public_id: req.file.originalname || 'uploaded_image',
          isPrimary: true
        }];
      }

      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};
