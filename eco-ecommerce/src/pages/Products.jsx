import React, { useState, useEffect, lazy, Suspense, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import "../Styles/Products.css";

// Lazy load ProductCard component
const ProductCard = lazy(() => import("../components/ProductCard"));

// API endpoint stored as a constant to avoid repetition
const API_BASE_URL = "http://localhost:5000/api/products";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [endReached, setEndReached] = useState(false);
  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");
  
  // Items per page
  const ITEMS_PER_PAGE = 8;

  // Reset everything when category changes
  useEffect(() => {
    setProducts([]);
    setPageNumber(1);
    setHasMore(true);
    setEndReached(false);
    setLoading(false);
    setInitialLoading(true);
    setError(null);
    
    // Also disconnect any existing observer
    if (observer.current) {
      observer.current.disconnect();
    }
  }, [category]);

  // Intersection observer setup
  const observer = useRef();
  
  const lastProductElementRef = useCallback(node => {
    // If we're loading, already reached the end, or have no more products, don't observe
    if (loading || endReached || !hasMore) return;
    
    // Disconnect the previous observer
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver(entries => {
      // Only trigger if element is intersecting, we have more products, and we're not already loading
      if (entries[0].isIntersecting && hasMore && !loading && !endReached) {
        setPageNumber(prevPageNumber => prevPageNumber + 1);
      }
    }, { 
      threshold: 0.1,  // Trigger when at least 10% of the element is visible
      rootMargin: '100px' // Start loading before element is visible
    });
    
    if (node) observer.current.observe(node);
  }, [loading, hasMore, endReached]);

  // Fetch products
  useEffect(() => {
    // If we already know we've reached the end, don't fetch
    if (endReached) {
      return;
    }
    
    // Clean up function flag
    let isActive = true;
    const controller = new AbortController();
    
    const fetchProducts = async () => {
      // Set appropriate loading state
      if (pageNumber === 1) {
        setInitialLoading(true);
      } else {
        setLoading(true);
      }
      
      try {
        // Construct URL with proper query parameters
        const params = new URLSearchParams();
        
        if (category) {
          params.append("category", category);
        }
        
        params.append("page", pageNumber.toString());
        params.append("limit", ITEMS_PER_PAGE.toString());
        
        // Make the fetch request
        const response = await fetch(
          `${API_BASE_URL}?${params.toString()}`,
          { signal: controller.signal }
        );
        
        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }
        
        const newProducts = await response.json();
        
        // Only update state if component is still mounted
        if (isActive) {
          // Determine if we've reached the end of available products
          const reachedEnd = newProducts.length === 0 || newProducts.length < ITEMS_PER_PAGE;
          
          if (reachedEnd) {
            setHasMore(false);
            setEndReached(true);
            
            // Immediately remove observer to prevent any further loading
            if (observer.current) {
              observer.current.disconnect();
              observer.current = null;
            }
          }
          
          // Update products list
          setProducts(prevProducts => {
            // For first page, replace entirely
            if (pageNumber === 1) {
              return newProducts;
            }
            
            // For subsequent pages, filter duplicates and append
            const existingIds = new Set(prevProducts.map(p => p.id));
            const filteredNewProducts = newProducts.filter(p => !existingIds.has(p.id));
            
            // If no new products were added, we've reached the end
            if (filteredNewProducts.length === 0 && pageNumber > 1) {
              setHasMore(false);
              setEndReached(true);
            }
            
            return [...prevProducts, ...filteredNewProducts];
          });
        }
      } catch (err) {
        if (isActive && err.name !== 'AbortError') {
          console.error('Error fetching products:', err);
          setError('Failed to load products. Please try again.');
          setHasMore(false);
          setEndReached(true);
        }
      } finally {
        if (isActive) {
          setLoading(false);
          setInitialLoading(false);
        }
      }
    };
    
    fetchProducts();
    
    // Cleanup
    return () => {
      isActive = false;
      controller.abort();
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [category, pageNumber, endReached]);

  return (
    <div className="products-container">
      <h2>{category ? `Products in ${category}` : "All Products"}</h2>
      
      {/* Initial loading state for first page */}
      {initialLoading && (
        <div className="initial-loading">
          <p>Loading products...</p>
        </div>
      )}
      
      {/* Products list */}
      {!initialLoading && (
        <div className="products-list">
          {products.length > 0 ? (
            products.map((product, index) => (
              <div 
                key={product.id}
                // Only add observer ref to last item if we haven't reached the end
                ref={products.length === index + 1 && !endReached ? lastProductElementRef : null}
                className="product-wrapper"
              >
                <Suspense fallback={<div className="product-placeholder">Loading...</div>}>
                  <ProductCard product={product} />
                </Suspense>
              </div>
            ))
          ) : (
            <div className="no-products">
              <p>No products found in this category.</p>
            </div>
          )}
        </div>
      )}
      
      {/* Loading indicator - only show if NOT at end */}
      {!initialLoading && loading && !endReached && (
        <div className="bottom-loading">
          <p>Loading more products...</p>
        </div>
      )}
      
      {/* End of category message */}
      {!initialLoading && !loading && endReached && products.length > 0 && (
        <div className="end-message">
          <p>All products in this category have been loaded</p>
        </div>
      )}
      
      {/* Error message */}
      {error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default Products;