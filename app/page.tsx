// app/page.tsx
"use client"
import Image from 'next/image';
import { ShoppingBag, Search, Heart, ChevronLeft, ChevronRight, Star, StarHalf, Plus } from 'lucide-react';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: 'New' | 'Sale';
}

const products: Product[] = [
  {
    id: 1,
    name: 'Sunflower Pot',
    category: 'Flower',
    price: 1799.00,
    rating: 4.9,
    reviews: 42,
    image: 'https://drive.google.com/thumbnail?id=1c6pGYmmlVnggp4dtOfxkFMKgk1p29uLS',
    badge: 'New'
  },
  {
    id: 2,
    name: 'Cozy Bear Plush',
    category: 'Teddy',
    price: 1299.00,
    rating: 5,
    reviews: 18,
    image: 'https://drive.google.com/thumbnail?id=1zS2HaTa4DKA7oP0TmkWyjsuYWku5t5Ev'
  },
  {
    id: 3,
    name: 'Deadpool tapestry',
    category: 'Tapestry',
    price: 3499.00,
    rating: 4,
    reviews: 7,
    image: 'https://drive.google.com/thumbnail?id=1OTNGRilQgHsLsC90-jJAx1mGXQJrv-jd',
    badge: 'Sale'
  },
  {
    id: 4,
    name: 'Baby Penguin',
    category: 'Animals',
    price: 1899.00,
    rating: 5,
    reviews: 124,
    image: 'https://i.pinimg.com/1200x/f3/d4/b0/f3d4b01fa85f017d4fd60dd13097694c.jpg'
  },
  {
    id: 5,
    name: 'Spiderman key chain',
    category: 'Key Chain',
    price: 399.00,
    rating: 5,
    reviews: 152,
    image: 'https://i.pinimg.com/736x/bb/f3/ef/bbf3ef7030c950824c01ed7709055355.jpg'
  }
];

const categories = [
  { name: 'Flower', icon: '🌸' },
  { name: 'Animals', icon: '🐾' },
  { name: 'Teddy', icon: '🧸' },
  { name: 'Tapestry', icon: '🎨' },
  { name: 'Key Chain', icon: '🔑'}
];

const renderStars = (rating: number) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
  }
  
  if (hasHalfStar) {
    stars.push(<StarHalf key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
  }
  
  const remainingStars = 5 - Math.ceil(rating);
  for (let i = 0; i < remainingStars; i++) {
    stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
  }
  
  return stars;
};

export default function HomePage() {
  const [currentCategory, setCurrentCategory] = useState("all")
  return (
    <div className="bg-stone-50 text-gray-800 min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-3xl text-[#D4A373]">🧸ྀི</span>
            <span className="text-2xl font-bold tracking-wide font-serif">CrochetbySimran.</span>
          </div>
        </div>
      </nav>

      {/* Categories Bar */}
      <div className="bg-[#FAEDCD] border-b border-[#CCD5AE]">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {categories.map((category) => (
              <a
                key={category.name}
                className="px-6 py-2 rounded-full bg-white hover:bg-[#D4A373] hover:text-white transition-all shadow-sm font-medium flex items-center gap-2 group"
                // onClick={() => {
                //   setCurrentCategory(category.name)
                //   console.log(currentCategory)
                // }}
                href='#products'
              >
                <span className="text-lg">{category.icon}</span>
                {category.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <header className="relative h-[400px] flex items-center justify-center bg-gray-100 overflow-hidden">
        <Image
          alt="Hero background"
          className="object-cover "
          src="https://i.pinimg.com/736x/b3/91/9f/b3919f7b0b340cb3499f06097df5bf5d.jpg"
          fill
        />
        {/* <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md text-stone-800 font-serif">
            Handmade with Love
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-stone-700 font-light">
            Discover unique crochet treasures for your home
          </p>
          <a href='#products' className="bg-[#D4A373] text-white px-8 py-3 rounded-md hover:bg-[#c08d5d] transition shadow-lg text-lg">
            Shop Now
          </a>
        </div> */}
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 flex-grow">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 font-serif">Featured Products</h2>
            <p className="text-gray-500 mt-2">Explore our latest handcrafted items</p>
          </div>
          <div className="hidden md:flex gap-2">
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <section id='products' className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className={`bg-white ${(currentCategory === "all" || currentCategory === product.category) ? "" : "hidden"}} rounded-lg shadow-sm hover:shadow-md transition group overflow-hidden border border-gray-100`}
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <Image
                  alt={product.name}
                  className="object-cover group-hover:scale-105 transition duration-500"
                  src={product.image}
                  fill
                />
                {product.badge && (
                  <span
                    className={`absolute top-3 left-3 text-xs px-2 py-1 rounded font-medium ${
                      product.badge === 'New'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {product.badge}
                  </span>
                )}
                <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition shadow-sm hover:text-red-500">
                  <Heart className="w-4 h-4" />
                </button>
              </div>
              <div className="p-4">
                <p className="text-xs text-[#D4A373] uppercase tracking-wider font-semibold mb-1">
                  {product.category}
                </p>
                <h3 className="text-lg font-bold text-gray-800 mb-1">{product.name}</h3>
                <div className="flex items-center mb-3">
                  {renderStars(product.rating)}
                  <span className="text-xs text-gray-400 ml-1">({product.reviews})</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-gray-900">
                      ₹{product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <button className="w-8 h-8 bg-[#D4A373] rounded-full flex items-center justify-center text-white hover:bg-[#c08d5d] transition">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl text-[#D4A373]">🧸ྀི</span>
                <span className="text-xl font-bold text-white tracking-wide font-serif">
                  CrochetbySimran.
                </span>
              </div>
              <p className="text-sm opacity-80">
                Bringing warmth and handmade charm to your doorstep. Every stitch tells a story.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a className="hover:text-[#D4A373] transition" href="#">About Us</a></li>
                <li><a className="hover:text-[#D4A373] transition" href="#">Shipping Policy</a></li>
                <li><a className="hover:text-[#D4A373] transition" href="#">FAQ</a></li>
                <li><a className="hover:text-[#D4A373] transition" href="#">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Categories</h4>
              <ul className="space-y-2 text-sm">
                {categories.map((category) => (
                  <li key={category.name}>
                    <a className="hover:text-[#D4A373] transition" href="#">
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Connect With Us</h4>
              <p className="text-sm opacity-80 mb-4">
                Follow us on social media for new product drops and behind-the-scenes.
              </p>
              <div className="flex space-x-4">
                <a
                  className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-[#D4A373] hover:text-white transition"
                  href="#"
                >
                  f
                </a>
                <a
                  className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-[#D4A373] hover:text-white transition"
                  href="#"
                >
                  𝕏
                </a>
                <a
                  className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-[#D4A373] hover:text-white transition"
                  href="#"
                >
                  📷
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-stone-800 mt-12 pt-8 text-center text-xs opacity-60 flex flex-col md:flex-row justify-between items-center gap-2">
            <span>© 2024 CrochetbySimran. All rights reserved.</span>
            <a className="hover:text-[#D4A373] transition-colors duration-300" href="https://portfolio-site-pearl-xi.vercel.app/">
              Made by Ritik Singh
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}