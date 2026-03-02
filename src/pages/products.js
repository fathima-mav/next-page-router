import { useState, useEffect } from "react"
import { useSearch } from "@/context/SearchContext"
import { fetchProducts } from "@/lib/fetchProducts"
import ProductCard from "@/components/ProductCard"
import FadeIn from "@/components/FadeIn"

export default function ProductsPage() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { searchQuery } = useSearch()

  useEffect(() => {
    async function getProducts() {
      try {
        const data = await fetchProducts()
        setProducts(data)
        setFilteredProducts(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    getProducts()
  }, [])

  useEffect(() => {
    if (!products.length) return

    if (!searchQuery.trim()) {
      setFilteredProducts(products)
    } else {
      setFilteredProducts(
        products.filter(
          (p) =>
            p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (p.category &&
              p.category.toLowerCase().includes(searchQuery.toLowerCase()))
        )
      )
    }
  }, [searchQuery, products])

  if (loading)
    return (
      <p className="text-center mt-20 animate-pulse text-[#6F4E37]">
        Loading...
      </p>
    )

  if (error)
    return (
      <p className="text-center mt-20 text-red-600">
        {error}
      </p>
    )

  if (!filteredProducts.length)
    return (
      <p className="text-center mt-20">
        No products found for "{searchQuery}"
      </p>
    )

  return (
    <section className="max-w-7xl mx-auto px-12 py-24">
      <FadeIn>
        <h1 className="text-4xl font-light text-[#3E2C23] tracking-wide mb-16">
          Our Collection
        </h1>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {filteredProducts.map((product, index) => (
          <FadeIn key={product.id} delay={index * 0.08}>
            <ProductCard product={product} />
          </FadeIn>
        ))}
      </div>
    </section>
  )
}