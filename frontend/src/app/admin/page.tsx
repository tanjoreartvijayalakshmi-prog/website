"use client";

import { useState, useEffect } from 'react';
import { Plus, Trash2, UploadCloud, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Record<string, unknown>[]>([]);
  const [loading, setLoading] = useState(true);

  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    description: '',
    category: ''
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/products');
      if (res.ok) {
        setProducts(await res.json());
      }
    } catch (error) {
      console.error('Failed to fetch products', error);
    }
  };

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch('http://localhost:5000/api/products');
        if (active && res.ok) {
          setProducts(await res.json());
        }
      } catch (error) {
        console.error('Failed to fetch products', error);
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this artwork?')) return;
    try {
      const res = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        fetchProducts();
        setMessage('Artwork removed successfully.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      if (imagePreview) URL.revokeObjectURL(imagePreview);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);
    try {
      const data = new FormData();
      data.append('title', formData.title);
      data.append('artist', formData.artist);
      data.append('description', formData.description);
      data.append('category', formData.category);
      if (imageFile) {
        data.append('image', imageFile);
      }

      const res = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        body: data,
      });
      if (res.ok) {
        setShowAddForm(false);
        setFormData({ title: '', artist: '', description: '', category: '' });
        setImageFile(null);
        setImagePreview(null);
        setMessage('Artwork published successfully.');
        fetchProducts();
      } else {
        setMessage('Failed to publish artwork. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setMessage('An error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="animate-in fade-in duration-500 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8 flex-col sm:flex-row gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold text-foreground">Manage Artworks</h1>
          <p className="text-foreground/60 text-sm mt-1">Publish and curate your gallery collection.</p>
        </div>
        <button
          onClick={() => {
            setShowAddForm(!showAddForm);
            setMessage(null);
          }}
          className="bg-gold text-foreground px-5 py-2.5 text-sm font-medium tracking-widest uppercase hover:bg-primary hover:text-background transition-colors flex items-center gap-2 shadow-lg"
        >
          <Plus className="w-4 h-4" /> {showAddForm ? 'Cancel' : 'Add Artwork'}
        </button>
      </div>

      {message && (
        <div className="flex items-center gap-3 bg-gold/10 border border-gold/30 text-foreground px-4 py-3 rounded-lg mb-8">
          <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
          <span className="text-sm font-medium">{message}</span>
          <button className="ml-auto text-foreground/50 hover:text-foreground text-lg leading-none" onClick={() => setMessage(null)}>&times;</button>
        </div>
      )}

      {showAddForm && (
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl border border-gold/20 mb-8">
          <h2 className="text-xl font-heading font-bold text-foreground mb-2">Add New Artwork</h2>
          <div className="w-12 h-0.5 bg-gold mb-6"></div>
          <form onSubmit={handleAddSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-foreground/60 mb-2 font-bold">Title</label>
              <input
                required
                type="text"
                className="w-full border border-foreground/15 p-3 rounded-md bg-background text-foreground focus:outline-none focus:border-gold transition-colors"
                value={formData.title}
                onChange={e => setFormData({ ...formData, title: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-foreground/60 mb-2 font-bold">Artist Name</label>
              <input
                required
                type="text"
                className="w-full border border-foreground/15 p-3 rounded-md bg-background text-foreground focus:outline-none focus:border-gold transition-colors"
                value={formData.artist}
                onChange={e => setFormData({ ...formData, artist: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-foreground/60 mb-2 font-bold">Category / Medium</label>
              <input
                required
                type="text"
                className="w-full border border-foreground/15 p-3 rounded-md bg-background text-foreground focus:outline-none focus:border-gold transition-colors"
                placeholder="e.g. Tanjore Art, Oil on Canvas"
                value={formData.category}
                onChange={e => setFormData({ ...formData, category: e.target.value })}
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs uppercase tracking-widest text-foreground/60 mb-2 font-bold">Upload Image</label>
              <label className="flex flex-col items-center justify-center w-full border-2 border-dashed border-foreground/20 rounded-md bg-background p-6 cursor-pointer hover:border-gold transition-colors">
                {imagePreview ? (
                  <div className="relative w-full max-w-xs aspect-[4/5] overflow-hidden rounded-md">
                    <Image src={imagePreview} alt="Preview" fill className="object-cover" />
                  </div>
                ) : (
                  <>
                    <UploadCloud className="w-10 h-10 text-gold mb-3" />
                    <span className="text-sm text-foreground/60 font-medium">Click to choose an image</span>
                    <span className="text-xs text-foreground/40 mt-1">JPG, PNG, WEBP supported</span>
                  </>
                )}
                <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
              </label>
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs uppercase tracking-widest text-foreground/60 mb-2 font-bold">Description</label>
              <textarea
                required
                rows={3}
                className="w-full border border-foreground/15 p-3 rounded-md bg-background text-foreground focus:outline-none focus:border-gold transition-colors"
                value={formData.description}
                onChange={e => setFormData({ ...formData, description: e.target.value })}
              ></textarea>
            </div>
            <div className="md:col-span-2 flex justify-end">
              <button
                type="submit"
                disabled={submitting}
                className="bg-primary text-background px-6 py-3 uppercase tracking-widest text-sm font-medium hover:bg-gold hover:text-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Publishing...' : 'Publish Artwork'}
              </button>
            </div>
          </form>
        </div>
      )}

      {loading ? (
        <p className="text-foreground/60">Loading artworks...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={String(product._id)} className="bg-white rounded-lg shadow-md border border-foreground/10 overflow-hidden flex flex-col group hover:shadow-xl transition-shadow">
              <div className="relative aspect-[4/5] bg-background">
                <Image src={String((product.images as Record<string, unknown>[])[0]?.url) || '/images/WhatsApp Image 2026-07-28 at 13.39.43.jpeg'} alt={String(product.title)} fill className="object-cover" />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-lg text-foreground">{String(product.title)}</h3>
                  <p className="text-sm text-foreground/60 mb-3">{String(product.artist)}</p>
                  <span className="inline-block text-[11px] uppercase tracking-widest text-gold border border-gold/30 px-2 py-0.5 rounded-full">
                    {String(product.medium || 'Artwork')}
                  </span>
                </div>
                <button
                  onClick={() => handleDelete(String(product._id))}
                  className="mt-4 flex items-center justify-center gap-2 w-full py-2 border border-red-300 text-red-600 hover:bg-red-50 transition-colors rounded-md text-sm"
                >
                  <Trash2 className="w-4 h-4" /> Remove
                </button>
              </div>
            </div>
          ))}
          {products.length === 0 && (
            <p className="text-foreground/60 col-span-full py-8 text-center bg-white rounded-lg border border-dashed border-foreground/20">
              No artworks found. Click &quot;Add Artwork&quot; to create one.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
