import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product';

dotenv.config();

const fallbackArtworks = [
  { id: "1", title: "Saraswathi", artist: "Vijayalakshmi", medium: "Classic Tanjore", image: "/images/WhatsApp Image 2026-08-04 at 09.50.56 (1).jpeg" },
  { id: "2", title: "Murugar", artist: "Vijayalakshmi", medium: "Classic Tanjore", image: "/images/WhatsApp Image 2026-08-04 at 09.51.53.jpeg" },
  { id: "3", title: "Goddess Kamatchi", artist: "Vijayalakshmi", medium: "Classic Tanjore", image: "/images/WhatsApp Image 2026-08-04 at 09.59.11.jpeg" },
  { id: "4", title: "Krishna", artist: "Vijayalakshmi", medium: "Classic Tanjore", image: "/images/WhatsApp Image 2026-08-04 at 09.59.110.jpeg" },
  { id: "5", title: "Lakshmi", artist: "Vijayalakshmi", medium: "Classic Tanjore", image: "/images/WhatsApp Image 2026-08-04 at 10.00.59.jpeg" },
  { id: "6", title: "Ganesh", artist: "Vijayalakshmi", medium: "Classic Tanjore", image: "/images/WhatsApp Image 2026-08-04 at 09.50.56.jpeg" },
  { id: "7", title: "Vijayalakshmi", artist: "Vijayalakshmi", medium: "Classic Tanjore", image: "/images/WhatsApp Image 2026-08-04 at 09.50.56 (2).jpeg" },
  { id: "8", title: "Shiva Parvathi", artist: "Vijayalakshmi", medium: "Classic Tanjore", image: "/images/WhatsApp Image 2026-07-28 at 13.39.43.jpeg" },
];

const seedDatabase = async () => {
  try {
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/art-gallery';
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB for seeding...');

    // Delete existing items to avoid duplicates if they want a clean slate (optional)
    // await Product.deleteMany({});
    
    for (const art of fallbackArtworks) {
      const exists = await Product.findOne({ title: art.title });
      if (!exists) {
        await Product.create({
          title: art.title,
          slug: art.title.toLowerCase().replace(/ /g, '-'),
          artist: art.artist,
          description: `Beautiful ${art.medium} piece featuring ${art.title}.`,
          medium: art.medium,
          dimensions: { width: 100, height: 100 },
          images: [{
            url: art.image,
            public_id: `seed_${art.id}`,
            isPrimary: true
          }],
          stock: 1
        });
        console.log(`Added: ${art.title}`);
      }
    }
    
    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
