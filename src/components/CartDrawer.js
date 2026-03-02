

import { motion, AnimatePresence } from "framer-motion"
import { useCart } from "@/context/CartContext"
import { useRouter } from "next/router"

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeItem,
    increaseQty,
    decreaseQty,
    subtotal,
    setCart, // needed for Clear Cart
  } = useCart()

  const router = useRouter()

  const clearCart = () => setCart([]) // Clear all items

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black z-40"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed right-0 top-0 h-full w-[400px] bg-[#F7E7CE] z-50 p-8 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <h2 className="text-xl font-light mb-8 text-[#3E2C23] tracking-wide">
              Your Cart
            </h2>

            {/* Empty Cart */}
            {cart.length === 0 ? (
              <p className="text-[#6F4E37]">Your cart is empty.</p>
            ) : (
              <div className="space-y-6 flex-1 overflow-y-auto">
                {cart.map((item) => (
                  <div key={item.id} className="border-b pb-4">
                    {/* Product Info */}
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-[#3E2C23]">{item.title}</p>
                        <p className="text-sm text-[#6F4E37]">
                          ${item.price} × {item.qty}
                        </p>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-xs uppercase tracking-widest text-[#C68E17]"
                      >
                        Remove
                      </button>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="px-2 py-1 bg-[#3E2C23] text-white text-xs rounded"
                      >
                        –
                      </button>
                      <span className="text-sm">{item.qty}</span>
                      <button
                        onClick={() => increaseQty(item.id)}
                        className="px-2 py-1 bg-[#3E2C23] text-white text-xs rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Subtotal + Checkout + Clear Cart */}
            {cart.length > 0 && (
              <div className="pt-6 border-t mt-6 space-y-3">
                {/* Subtotal */}
                <div className="flex justify-between text-[#3E2C23] font-semibold mb-2">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={() => {
                    setIsCartOpen(false)
                    router.push("/cart")
                  }}
                  className="w-full py-4 border border-[#3E2C23] uppercase tracking-widest text-xs hover:bg-[#3E2C23] hover:text-[#F7E7CE] transition"
                >
                  Checkout
                </button>

                {/* Clear Cart Button */}
                <button
                  onClick={clearCart}
                  className="w-full py-3 border border-[#C68E17] uppercase tracking-widest text-xs hover:bg-[#C68E17] hover:text-[#F7E7CE] transition"
                >
                  Clear Cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}