

import { useCart } from "@/context/CartContext"

export default function AddToCartButton({ product }) {
  const { addToCart } = useCart()

  return (
    <button
      onClick={() => addToCart(product)}
      className="relative w-full mt-6 py-4 border border-[#3E2C23]
                 text-[#3E2C23] uppercase tracking-widest text-xs
                 overflow-hidden group rounded-lg
                 transition-colors duration-400"
    >
      {/* Text */}
      <span className="relative z-10 transition-colors duration-400 group-hover:text-[#F7E7CE]">
        Add to Cart
      </span>

      {/* Background slide animation */}
      <span
        className="absolute inset-0 bg-[#3E2C23]
                   -translate-y-full group-hover:translate-y-0
                   transition-transform duration-500 ease-out z-0"
      />
    </button>
  )
}