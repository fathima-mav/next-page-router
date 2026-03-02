import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <main className="bg-[#2A1E17] text-[#F7E7CE] min-h-screen">

      {/* Hero Section */}
      <section className="py-28 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extralight tracking-[0.6em] uppercase text-[#F7E7CE]"
        >
          VELORA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-xs tracking-[0.4em] uppercase text-[#C68E17]"
        >
          Redefining Modern Elegance
        </motion.p>
      </section>

      {/* Story Section */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-8 text-[#EAD8C0] leading-relaxed text-lg"
        >
          <p>
            VELORA was born from a desire to create fashion that speaks softly,
            yet leaves a lasting impression. We believe style is not about excess —
            it is about intention.
          </p>

          <p>
            Each collection is thoughtfully curated to reflect refined simplicity,
            blending timeless silhouettes with contemporary structure. Our pieces
            are designed for individuals who move with quiet confidence.
          </p>

          <p>
            Rooted in elegance and inspired by modern minimalism, VELORA exists
            to redefine everyday luxury — where sophistication meets subtle warmth.
          </p>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-[#3E2C23] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-light tracking-[0.3em] uppercase text-[#C68E17] mb-10"
          >
            Our Philosophy
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-[#F7E7CE] text-lg leading-relaxed"
          >
            We design with purpose. We create with care. We value quality over
            quantity and elegance over noise. Every garment reflects craftsmanship,
            confidence, and timeless expression.
          </motion.p>
        </div>
      </section>

    </main>
  )
}