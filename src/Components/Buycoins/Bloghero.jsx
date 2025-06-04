import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
 // Assuming this component is for the header

// Placeholder for product image (you'll replace this with actual image paths)
import goldCoinImage from './../../assets/coin-1g.png'; // Make sure you have an image at this path

const productData = [
  {
    id: 1,
    name: '1 Gram PixaliveGold Coin',
    purity: '24K, 99.99%',
    price: '10,630.4',
    deliveryInfo: '2-5+ Delivers',
    image: goldCoinImage,
    productType: 'Bullion', // Added for filtering
    shape: 'Coin',
    weight: '1g',
  },
  {
    id: 2,
    name: '1 Gram PixaliveGold Coin',
    purity: '24K, 99.99%',
    price: '10,630.4',
    deliveryInfo: '2-5+ Delivers',
    image: goldCoinImage,
    productType: 'Bullion', // Added for filtering
    shape: 'Coin',
    weight: '1g',
  },
  {
    id: 3,
    name: '1 Gram PixaliveGold Coin',
    purity: '24K, 99.99%',
    price: '10,630.4',
    deliveryInfo: '2-5+ Delivers',
    image: goldCoinImage,
    productType: 'Bullion', // Added for filtering
    shape: 'Coin',
    weight: '1g',
  },
  {
    id: 4,
    name: '1 Gram PixaliveGold Coin',
    purity: '24K, 99.99%',
    price: '10,630.4',
    deliveryInfo: '2-5+ Delivers',
    image: goldCoinImage,
    productType: 'Bullion', // Added for filtering
    shape: 'Coin',
    weight: '1g',
  },
  // Add more product data as needed to fill the grid
];

const productTypes = [
  'All',
  'Banyan Tree',
  'Cast Bar',
  'Ganesha',
  'Lakshmi',
  'Lotus',
  'Peacock',
  'Ram Darbar',
  'Rose',
  'Shankh',
  'Raksha Bandhan',
  'Sovereign',
  'Tola',
  'Guru Nanak Dev',
];

export default function ProductListingPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProductType, setSelectedProductType] = useState('All');
  const [selectedSortBy, setSelectedSortBy] = useState('Bullion'); // Corresponds to "Sort by" in image
  const [selectedShape, setSelectedShape] = useState(''); // Added for new filters
  const [selectedPriceRange, setSelectedPriceRange] = useState(''); // Added for new filters
  const [selectedWeight, setSelectedWeight] = useState(''); // Added for new filters

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedProductType('All');
    setSelectedSortBy('Bullion');
    setSelectedShape('');
    setSelectedPriceRange('');
    setSelectedWeight('');
  };

  const filteredProducts = productData
    .filter((product) => {
      const matchesProductType =
        selectedProductType === 'All' ||
        product.productType.toLowerCase() === selectedProductType.toLowerCase();
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      // Add logic for shape, price, weight if needed (currently not implemented in filter)
      return matchesProductType && matchesSearch;
    })
    .sort((a, b) => {
      // Sorting logic based on selectedSortBy can be added here if needed
      // For now, it will just maintain the original order if no specific sort is applied
      return 0;
    });

  return (
    <>
      
      <div className="min-h-screen bg-[#f6f6f6] text-black pb-8">
        {/* Hero Section (similar to original, but context is product listing) */}
        <div className="max-w-[1280px] mx-auto px-4 py-8">
          <div className="w-full flex flex-col md:flex-row items-start md:gap-24">
            {/* Left: Vertical Label */}
            <div className="w-full md:w-[150px] flex-shrink-0 mb-4 md:mb-0">
              <p className="text-sm ml-2 text-gray-400 whitespace-nowrap">Pixalive Blog</p> {/* Kept as per image */}
            </div>

            {/* Right: Main Heading */}
            <div className="w-full">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black leading-snug max-w-4xl">
                Insights, updates, and stories from the pioneers of a next-gen gold network platform — where innovation meets real-world value.
              </h1> {/* Kept as per image */}
            </div>
          </div>
        </div>

        {/* Search bar */}
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="relative md:w-1/4 p-2 mb-4">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-3 py-2 text-sm mt-3 w-full border-b border-gray-300 focus:outline-none focus:border-black bg-transparent" // Adjusted styling
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {/* <hr className="mt-3" /> Removed as border-b handles it */}
          </div>
        </div>

        {/* Main content (Sidebar + Product Cards) */}
        <div className="max-w-[1280px] mx-auto px-4 flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="md:w-1/4 space-y-6">
            {/* Filter */}
            <div className="bg-white p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-semibold text-gray-700">Filter</h2>
                <button
                  onClick={clearFilters}
                  className="text-sm text-gray-500 hover:underline"
                >
                  Clear Filter
                </button>
              </div>
              <hr className="border-gray-300 mb-4" />

              {/* Product Series Type */}
              <h3 className="text-sm text-gray-600 mb-2 font-medium">Product Series Type</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {productTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedProductType(type)}
                    className={`px-3 py-1 text-sm border ${
                      selectedProductType === type
                        ? 'bg-black text-white'
                        : 'bg-white text-black border-gray-300'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              {/* Sort by */}
              <h3 className="text-sm text-gray-600 mb-2 font-medium">Sort by</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="sortBy"
                    value="Bullion"
                    checked={selectedSortBy === 'Bullion'}
                    onChange={() => setSelectedSortBy('Bullion')}
                    className="form-radio text-black focus:ring-0" // Tailwind form-radio class
                  />
                  Bullion
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="sortBy"
                    value="Devotional"
                    checked={selectedSortBy === 'Devotional'}
                    onChange={() => setSelectedSortBy('Devotional')}
                    className="form-radio text-black focus:ring-0"
                  />
                  Devotional
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="sortBy"
                    value="Gifting"
                    checked={selectedSortBy === 'Gifting'}
                    onChange={() => setSelectedSortBy('Gifting')}
                    className="form-radio text-black focus:ring-0"
                  />
                  Gifting
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="sortBy"
                    value="Classic"
                    checked={selectedSortBy === 'Classic'}
                    onChange={() => setSelectedSortBy('Classic')}
                    className="form-radio text-black focus:ring-0"
                  />
                  Classic
                </label>
              </div>
              <hr className="border-gray-300 my-4" /> {/* Separator */}

              {/* Shape Filter (Placeholder) */}
              <h3 className="text-sm text-gray-600 mb-2 font-medium">Shape</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <label className="flex items-center gap-2">
                  <input type="radio" name="shape" disabled className="form-radio" />
                  Circle
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="shape" disabled className="form-radio" />
                  Bar
                </label>
                {/* Add more shape options */}
              </div>
              <hr className="border-gray-300 my-4" /> {/* Separator */}

              {/* Price Filter (Placeholder) */}
              <h3 className="text-sm text-gray-600 mb-2 font-medium">Price</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <label className="flex items-center gap-2">
                  <input type="radio" name="price" disabled className="form-radio" />
                  ₹0 - ₹10,000
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="price" disabled className="form-radio" />
                  ₹10,001 - ₹50,000
                </label>
                {/* Add more price range options or a slider */}
              </div>
              <hr className="border-gray-300 my-4" /> {/* Separator */}

              {/* Weight Filter (Placeholder) */}
              <h3 className="text-sm text-gray-600 mb-2 font-medium">Weight</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <label className="flex items-center gap-2">
                  <input type="radio" name="weight" disabled className="form-radio" />
                  1g
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="weight" disabled className="form-radio" />
                  2g
                </label>
                {/* Add more weight options */}
              </div>
            </div>
          </div>

          {/* Product Cards */}
          <div className="md:w-3/4 w-full grid mb-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
            {filteredProducts.length === 0 ? (
              <div className="col-span-full text-center text-gray-500 text-lg">
                No products available.
              </div>
            ) : (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-md shadow-sm overflow-hidden flex flex-col items-center justify-between p-4" // Adjusted card styling
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-24 h-24 object-contain mb-4" // Smaller image as per reference
                  />
                  <div className="text-center w-full">
                    <p className="text-sm text-gray-600 mb-1">{product.purity}</p>
                    <h3 className="text-md font-medium text-gray-800 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-xl font-semibold text-black mb-4">
                      ₹{product.price}
                    </p>
                    <button className="bg-black text-white py-2 px-4 w-full text-sm hover:bg-gray-800 transition-colors">
                      Add to Card
                    </button>
                    <p className="text-xs text-gray-500 mt-2">{product.deliveryInfo}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}