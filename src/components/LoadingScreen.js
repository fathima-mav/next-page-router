

import { motion } from "framer-motion"

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#3E2C23]"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-[#F7E7CE] text-3xl tracking-[0.3em] uppercase font-light"
      >
        Your Brand
      </motion.h1>
    </motion.div>
  )
}