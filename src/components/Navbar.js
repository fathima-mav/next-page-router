import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { useCart } from "@/context/CartContext"
import { useSearch } from "@/context/SearchContext"
import { fetchProducts } from "@/lib/fetchProducts"
import { FiSearch, FiX, FiShoppingCart, FiMenu } from "react-icons/fi"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const { cart } = useCart()
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0)
  const { searchQuery, setSearchQuery } = useSearch()

  const [allProducts, setAllProducts] = useState([])
  const [suggestions, setSuggestions] = useState([])
  const [showDropdown, setShowDropdown] = useState(false)
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const dropdownRef = useRef()

  useEffect(() => {
    async function getProducts() {
      const data = await fetchProducts()
      setAllProducts(data)
    }
    getProducts()
  }, [])

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

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false)
        setMobileSearchOpen(false)
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-[#3E2C23] text-[#F7E7CE] shadow-lg border-b border-[#C68E17] px-4 md:px-6 py-3 flex items-center justify-between flex-wrap">

      {/* Left: Logo + Search */}
      <div className="flex items-center flex-1 space-x-4 md:space-x-2">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 text-xl font-bold text-[#C68E17]">
          <h2 className="text-4xl md:text-5xl font-extralight tracking-[0.6em] uppercase text-[#F7E7CE]">
            VELORA
          </h2>
        </Link>

        {/* Unified Search Input (Desktop + Mobile) */}
        <div
          className={`relative flex-1 max-w-lg m-2 ${mobileSearchOpen ? 'block' : 'hidden md:block'}`}
          ref={dropdownRef}
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full px-4 py-3 rounded-lg border border-[#C68E17] focus:outline-none focus:ring-2 focus:ring-[#C68E17] text-[#F7E7CE] bg-[#3E2C23]"
          />
          {showDropdown && (
            <motion.div
              className="absolute top-full left-0 w-full bg-[#F7E7CE] text-[#3E2C23] shadow-lg rounded-b-lg max-h-60 overflow-y-auto z-50"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {suggestions.length > 0 ? (
                suggestions.map((p) => (
                  <Link
                    key={p.id}
                    href={`/products/${p.id}`}
                    className="block px-4 py-2 hover:bg-[#C68E17] hover:text-[#F7E7CE] transition"
                    onClick={() => setShowDropdown(false)}
                  >
                    <span className="font-medium">{p.title}</span>{" "}
                    <span className="text-sm text-gray-600 capitalize">({p.category})</span>
                  </Link>
                ))
              ) : (
                <p className="px-4 py-2 text-[#C68E17]">No results found</p>
              )}
            </motion.div>
          )}
        </div>
      </div>

      {/* Right: Nav links + Cart + Mobile Icons */}
      <div className="flex items-center space-x-4 md:space-x-6">
        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[#C68E17]">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Cart Icon */}
        <div className="relative flex-shrink-0">
          <Link href="/cart" className="relative text-2xl text-[#F7E7CE] hover:text-[#C68E17] transition-colors">
            <FiShoppingCart />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-[#F7E7CE] text-[#3E2C23] text-xs px-2 py-1 rounded-full font-semibold">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Icons */}
        <div className="flex md:hidden items-center space-x-2">
          <button onClick={() => setMobileSearchOpen(!mobileSearchOpen)}>
            {mobileSearchOpen ? <FiX size={20} /> : <FiSearch size={20} />}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <FiMenu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-[#3E2C23] flex flex-col items-start px-4 py-2 space-y-2 md:hidden z-40"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="w-full py-2 hover:text-[#C68E17] border-b border-[#C68E17]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}