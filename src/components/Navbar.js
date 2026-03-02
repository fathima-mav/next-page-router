

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { useCart } from "@/context/CartContext"
import { useSearch } from "@/context/SearchContext"
import { fetchProducts } from "@/lib/fetchProducts"
import { FiSearch, FiX, FiShoppingCart } from "react-icons/fi"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const { cart } = useCart()
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0)
  const { searchQuery, setSearchQuery } = useSearch()

  const [allProducts, setAllProducts] = useState([])
  const [suggestions, setSuggestions] = useState([])
  const [showDropdown, setShowDropdown] = useState(false)
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
  const dropdownRef = useRef()

  // Fetch products once
  useEffect(() => {
    async function getProducts() {
      const data = await fetchProducts()
      setAllProducts(data)
    }
    getProducts()
  }, [])

  // Update suggestions as user types
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSuggestions([])
      setShowDropdown(false)
      return
    }

    const filtered = allProducts.filter(
      (p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.category && p.category.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    setSuggestions(filtered)
    setShowDropdown(filtered.length > 0)
  }, [searchQuery, allProducts])

  // Close dropdown if click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false)
        setMobileSearchOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <nav className="relative flex items-center justify-between px-4 md:px-6 py-4 bg-[#3E2C23] text-[#F7E7CE] shadow-lg border-b border-[#C68E17]">

      {/* Logo */}
      <Link href="/" className="text-xl font-bold text-[#C68E17]">
        <h2 className="text-4xl md:text-5xl font-extralight tracking-[0.6em] uppercase text-[#F7E7CE]">
            VELORA
          </h2>
      </Link>

      {/* Desktop Search */}
      <div className="hidden md:flex flex-1 mx-6 flex-col relative" ref={dropdownRef}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search products..."
          className="flex-1 px-4 py-2 rounded-lg border border-[#C68E17] focus:outline-none focus:ring-2 focus:ring-[#C68E17] text-[#F7E7CE]"
        />
        {showDropdown && (
          <motion.div
            className="absolute top-full left-0 w-full bg-[#F7E7CE] text-[#3E2C23] shadow-lg rounded-b-lg max-h-60 overflow-y-auto z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {suggestions.map((p) => (
              <Link
                key={p.id}
                href={`/products/${p.id}`}
                className="block px-4 py-2 hover:bg-[#C68E17] hover:text-[#F7E7CE] transition"
                onClick={() => setShowDropdown(false)}
              >
                <span className="font-medium">{p.title}</span>{" "}
                <span className="text-sm text-gray-600 capitalize">({p.category})</span>
              </Link>
            ))}
            {suggestions.length === 0 && (
              <p className="px-4 py-2 text-[#C68E17]">No results found</p>
            )}
          </motion.div>
        )}
      </div>

      {/* Mobile Search Icon */}
      <div className="flex md:hidden items-center space-x-4">
        <button onClick={() => setMobileSearchOpen(!mobileSearchOpen)}>
          {mobileSearchOpen ? <FiX size={20} /> : <FiSearch size={20} />}
        </button>
      </div>

      {/* Mobile Search Input with Slide Animation */}
      <AnimatePresence>
        {mobileSearchOpen && (
          <motion.div
            className="absolute top-full left-0 w-full px-4 mt-2 md:hidden z-50"
            ref={dropdownRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full px-4 py-2 rounded-lg border border-[#C68E17] focus:outline-none focus:ring-2 focus:ring-[#C68E17] text-[#F7E7CE] bg-[#3E2C23]"
            />
            {showDropdown && (
              <div className="bg-[#F7E7CE] text-[#3E2C23] shadow-lg rounded-b-lg max-h-60 overflow-y-auto mt-1">
                {suggestions.map((p) => (
                  <Link
                    key={p.id}
                    href={`/products/${p.id}`}
                    className="block px-4 py-2 hover:bg-[#C68E17] hover:text-[#F7E7CE] transition"
                    onClick={() => setShowDropdown(false)}
                  >
                    <span className="font-medium">{p.title}</span>{" "}
                    <span className="text-sm text-gray-600 capitalize">({p.category})</span>
                  </Link>
                ))}
                {suggestions.length === 0 && (
                  <p className="px-4 py-2 text-[#C68E17]">No results found</p>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Links & Cart Icon */}
      <div className="flex items-center space-x-4 md:space-x-6">
        <Link href="/" className="hover:text-[#C68E17]">Home</Link>
        <Link href="/products" className="hover:text-[#C68E17]">Products</Link>


        <Link href="/about" className="hover:text-[#C68E17]">About</Link>
        <Link href="/contact" className="hover:text-[#C68E17]">Contact</Link>
        {/* Styled Cart Icon */}
        <Link href="/cart" className="relative text-2xl text-[#F7E7CE] hover:text-[#C68E17] transition-colors">
          <FiShoppingCart />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-[#F7E7CE] text-[#3E2C23] hover:text-[#C68E17]  text-xs px-2 py-1 rounded-full font-semibold">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  )
}