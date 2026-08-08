import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct extends Document {
  title: string;
  slug: string;
  artist: string;
  description: string;
  price?: number;
  discount?: number;
  medium: string;
  dimensions: {
    width: number;
    height: number;
    depth?: number;
    unit: string;
  };
  categories: mongoose.Types.ObjectId[];
  tags: string[];
  images: {
    url: string;
    public_id: string;
    isPrimary: boolean;
  }[];
  stock: number;
  isAvailable: boolean;
  isFeatured: boolean;
  isTrending: boolean;
  seoFields: {
    title: string;
    description: string;
    keywords: string[];
  };
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new Schema<IProduct>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    artist: { type: String, required: true, default: 'Unknown Artist' },
    description: { type: String, required: true },
    price: { type: Number, default: 0 },
    discount: { type: Number, min: 0, max: 100, default: 0 },
    medium: { type: String, required: true }, // e.g., "Oil on Canvas"
    dimensions: {
      width: { type: Number, required: true },
      height: { type: Number, required: true },
      depth: { type: Number },
      unit: { type: String, default: 'cm' }, // e.g., 'cm' or 'inches'
    },
    categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
    tags: [{ type: String }],
    images: [
      {
        url: { type: String, required: true },
        public_id: { type: String, required: true },
        isPrimary: { type: Boolean, default: false },
      },
    ],
    stock: { type: Number, required: true, min: 0, default: 1 }, // Often 1 for unique artworks
    isAvailable: { type: Boolean, default: true },
    isFeatured: { type: Boolean, default: false },
    isTrending: { type: Boolean, default: false },
    seoFields: {
      title: String,
      description: String,
      keywords: [String],
    },
  },
  { timestamps: true }
);

// Middleware to set isAvailable based on stock
productSchema.pre('save', function () {
  if (this.stock <= 0) {
    this.isAvailable = false;
  } else {
    this.isAvailable = true;
  }
});

export default mongoose.model<IProduct>('Product', productSchema);
