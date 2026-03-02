import { useCart } from "@/context/CartContext"
import { useState } from "react"

export default function AddToCartButton({ product }) {
  const { addToCart } = useCart()
  const [pressed, setPressed] = useState(false)

  return (
    <button
      onClick={() => addToCart(product)}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      className="relative w-full mt-6 py-4 border border-[#3E2C23]
                 text-[#3E2C23] uppercase tracking-widest text-xs
                 overflow-hidden group rounded-lg
                 transition-colors duration-400"
    >
      {/* Text */}
      <span
        className={`relative z-10 transition-colors duration-400
                    ${pressed ? "text-[#F7E7CE]" : "group-hover:text-[#F7E7CE]"}`}
      >
        Add to Cart
      </span>

      {/* Background slide animation */}
      <span
        className={`absolute inset-0 bg-[#3E2C23]
                    -translate-y-full transition-transform duration-500 ease-out z-0
                    ${pressed ? "translate-y-0" : "group-hover:translate-y-0"}`}
      />
    </button>
  )
}