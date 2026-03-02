

import React from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function Categories({ categories }) {
  const router = useRouter()

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.section
      className="max-w-7xl mx-auto mt-24 px-4 md:px-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <h2 className="text-2xl font-bold mb-8 text-center md:text-left text-[#3E2C23]">
        Shop by Category
      </h2>

      <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <motion.div
            key={category.id}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition flex flex-col items-center justify-center p-6 bg-white"
            onClick={() => router.push(`/products?category=${category.slug}`)}
          >
            <img
              src={category.image}
              alt={category.name}
              className="h-24 w-24 object-contain mb-4"
            />
            <h3 className="text-center font-semibold text-[#3E2C23]">{category.name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}