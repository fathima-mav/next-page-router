

import Link from "next/link"
import { motion } from "framer-motion"
import AddToCartButton from "@/components/AddToCartButton"

export default function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative bg-[#EAD8C0] p-8 rounded-2xl
                 border border-[#3E2C23]/10
                 shadow-[0_8px_30px_rgba(62,44,35,0.08)]
                 hover:shadow-[0_15px_40px_rgba(62,44,35,0.15)]
                 transition-all duration-500
                 h-full flex flex-col"
    >

      {/* Softer Corner Accent */}
      <div className="absolute top-0 left-0 w-10 h-10 
                      bg-gradient-to-br from-[#C68E17]/70 to-transparent 
                      rounded-br-2xl"></div>

      {/* Inner Depth */}
      <div className="absolute inset-0 rounded-2xl 
                      shadow-inner shadow-[#3E2C23]/5 
                      pointer-events-none"></div>

      {/* Image */}
      <Link href={`/products/${product.id}`}>
        <div className="overflow-hidden rounded-xl h-60 flex items-center justify-center">
          <motion.img
            src={product.image}
            alt={product.title}
            className="max-h-full object-contain transition duration-700"
            whileHover={{ scale: 1.07 }}
          />
        </div>
      </Link>

      {/* Content */}
      <div className="mt-8 space-y-4 flex flex-col flex-grow">

        {/* Title */}
        <h2 className="text-xl font-light text-[#3E2C23] tracking-wide leading-snug">
          {product.title}
        </h2>

        {/* Minimal Divider */}
        <div className="w-8 h-[1px] bg-[#C68E17]/70 
                        transition-all duration-500 
                        group-hover:w-14"></div>

        {/* Push Bottom Content */}
        <div className="mt-auto space-y-4">

          {/* Price */}
          <p className="text-[#6F4E37] text-lg tracking-wide">
            ${product.price}
          </p>

          <AddToCartButton product={product} />

        </div>

      </div>
    </motion.div>
  )
}