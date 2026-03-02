import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { motion } from "framer-motion"
import AddToCartButton from "@/components/AddToCartButton"
import { fetchProduct } from "@/lib/fetchProducts"

export default function ProductDetail() {
  const router = useRouter()
  const { id } = router.query

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!id) return

    async function getProduct() {
      try {
        const data = await fetchProduct(id)
        if (!data) throw new Error("Product not found")
        setProduct(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    getProduct()
  }, [id])

  if (loading) return <p>Loading product...</p>
  if (error) return <p className="text-red-600">{error}</p>
  if (!product) return null

  return (
    <motion.div
      className="grid md:grid-cols-2 gap-8 p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        src={product.image}
        alt={product.title}
        className="h-80 object-contain"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      />

      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="my-4">{product.description}</p>
        <p className="text-xl font-semibold">${product.price}</p>
        <AddToCartButton product={product} />
      </motion.div>
    </motion.div>
  )
}