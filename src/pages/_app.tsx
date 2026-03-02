import { useState, useEffect } from "react"
import "@/styles/globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { CartProvider } from "@/context/CartContext"
import LoadingScreen from "@/components/LoadingScreen"
import CartDrawer from "@/components/CartDrawer"
import { SearchProvider } from "@/context/SearchContext"
import SEO from "@/components/SEO"

export default function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  // 👇 Get SEO from page if defined
  const seo = Component.seo || {}

  return (
    <>
      {/* Global / Dynamic SEO */}
      <SEO {...seo} />

      {loading && <LoadingScreen />}

      {!loading && (
        <CartProvider>
          <SearchProvider>
            <div className="bg-[#F7E7CE] text-[#3E2C23] min-h-screen">
              <Navbar />
              <CartDrawer />
              <main>
                <Component {...pageProps} />
              </main>
              <Footer />
            </div>
          </SearchProvider>
        </CartProvider>
      )}
    </>
  )
}