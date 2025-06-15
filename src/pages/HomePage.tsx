import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import Banner from '../components/ui/Banner';
import CategoryTabs from '../components/ui/CategoryTabs';
import ProductGrid from '../components/product/ProductGrid';

const HomePage: React.FC = () => {
  const { products, loading, error, searchProducts, getProductsByCategory, getFeaturedProducts, filterProductsByArea } = useProducts();
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const searchQuery = searchParams.get('search');
    const category = searchParams.get('category');
    const area = searchParams.get('area') || localStorage.getItem('selectedArea') || 'Chittoor';
    
    // First filter by area
    let areaFilteredProducts = filterProductsByArea(area);
    
    // Then apply search or category filters
    if (searchQuery) {
      setFilteredProducts(searchProducts(searchQuery).filter(p => 
        !p.areas || p.areas.includes(area)
      ));
    } else if (category) {
      setFilteredProducts(getProductsByCategory(category).filter(p => 
        !p.areas || p.areas.includes(area)
      ));
    } else {
      setFilteredProducts(areaFilteredProducts);
    }
  }, [searchParams, products]);

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  const featuredProducts = getFeaturedProducts();
  const searchQuery = searchParams.get('search');
  const category = searchParams.get('category');

  return (
    <div>
      {/* Main Banner */}
      {!searchQuery && !category && (
        <div className="container mx-auto px-4 py-6">
          <Banner
            title="Taste First, Trust Next"
            subtitle="Fresh, local food delivered in just 5-10 minutes. Order your favorites from Zomio today!"
            ctaText="Order Now"
            ctaLink="/?category=beverages"
            backgroundImage="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            isLarge={true}
          />
        </div>
      )}

      {/* Category Navigation */}
      <div className="container mx-auto px-4">
        <CategoryTabs />
      </div>

      {/* Product Listings */}
      <div className="container mx-auto px-4 py-8">
        {searchQuery ? (
          <>
            <h2 className="text-2xl font-bold mb-6">Search Results for "{searchQuery}"</h2>
            <ProductGrid products={filteredProducts} isLoading={loading} />
          </>
        ) : category ? (
          <>
            <h2 className="text-2xl font-bold mb-6 capitalize">{category}</h2>
            <ProductGrid products={filteredProducts} isLoading={loading} />
          </>
        ) : (
          <>
            {/* Featured Products Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
              <ProductGrid products={featuredProducts} isLoading={loading} />
            </section>

            {/* Regular Products */}
            <section>
              <h2 className="text-2xl font-bold mb-6">All Products</h2>
              <ProductGrid products={filteredProducts} isLoading={loading} />
            </section>
          </>
        )}
      </div>

      {/* Promotion Banner */}
      <div className="container mx-auto px-4 py-8">
        <Banner
          title="Quick, Fresh & Local"
          subtitle="Enjoy our special regional beverages and snacks with lightning-fast delivery"
          ctaText="Browse Menu"
          ctaLink="/?category=snacks"
          backgroundImage="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
    </div>
  );
};

export default HomePage;