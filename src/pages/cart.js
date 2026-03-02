import { useCart } from "@/context/CartContext"
import { motion } from "framer-motion"

export default function CartPage() {
  const { cart, removeItem, increaseQty, decreaseQty, setCart } = useCart()

  const incrementQty = (product) => increaseQty(product.id)
  const decrementQty = (product) => decreaseQty(product.id)

  const clearCart = () => setCart([])

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  if (!cart.length)
    return (
      <p className="p-6 text-center text-lg text-[#3E2C23]">
        Your cart is empty
      </p>
    )

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-[#C68E17]">
        Your Cart
      </h1>

      <div className="space-y-4">
        {cart.map((product) => (
          <motion.div
            key={product.id}
            className="flex items-center justify-between border p-4 rounded shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-20 w-20 object-contain"
            />

            <div className="flex-1 px-4">
              <h2 className="font-bold text-[#3E2C23]">
                {product.title}
              </h2>
              <p className="text-[#3E2C23]">
                ${product.price}
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <motion.button
                onClick={() => decrementQty(product)}
                className="px-3 py-1 bg-[#3E2C23] text-[#F7E7CE] rounded hover:bg-[#C68E17] hover:text-[#3E2C23] transition"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                -
              </motion.button>

              <span className="text-[#3E2C23] font-medium">
                {product.qty}
              </span>

              <motion.button
                onClick={() => incrementQty(product)}
                className="px-3 py-1 bg-[#3E2C23] text-[#F7E7CE] rounded hover:bg-[#C68E17] hover:text-[#3E2C23] transition"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                +
              </motion.button>
            </div>

            <motion.button
              onClick={() => removeItem(product.id)}
              className="ml-4 px-3 py-1 bg-[#3E2C23] text-[#F7E7CE] rounded hover:bg-[#C68E17] hover:text-[#3E2C23] transition"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Remove
            </motion.button>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 text-right space-y-3">
        <p className="text-xl font-bold text-[#3E2C23]">
          Total: ${totalPrice.toFixed(2)}
        </p>

        <motion.button
          onClick={clearCart}
          className="mt-4 px-4 py-2 bg-[#3E2C23] text-[#F7E7CE] rounded hover:bg-[#C68E17] hover:text-[#3E2C23] transition"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Clear Cart
        </motion.button>
      </div>
    </div>
  )
}