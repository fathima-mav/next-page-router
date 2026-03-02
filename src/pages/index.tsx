

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePageCoffeePremium() {
  const features = [
    {
      id: 1,
      title: "Elegant Design",
      description: "Timeless, minimal layouts that feel premium.",
    },
    {
      id: 2,
      title: "Smooth Experience",
      description: "Fast, responsive, and warm interactions.",
    },
    {
      id: 3,
      title: "Refined Simplicity",
      description: "Less is more, with a touch of luxury.",
    },
  ];

  return (
    <main className="font-sans text-gray-900 scroll-smooth">

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7741615/pexels-photo-7741615.jpeg"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#2A1E17]/70"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-7xl font-extralight tracking-[0.2em] uppercase mb-6 text-[#F7E7CE]"
          >
            Welcome to Our World
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl text-[#EAD8C0]/90 mb-8 max-w-2xl leading-relaxed"
          >
            Minimal. Classy. Warm tones crafted for timeless elegance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link
              href="#features"
              className="inline-block px-10 py-4 text-sm tracking-[0.2em] uppercase
                         bg-[#C68E17] text-white
                         hover:bg-[#b07d14]
                         transition-all duration-500 rounded-md"
            >
              Learn More
            </Link>
          </motion.div>

        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-28 bg-[#F4E3D3]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-14 text-center">
          {features.map((f, i) => (
            <motion.div
              key={f.id}
              className="space-y-4 p-8 bg-white rounded-2xl 
                         shadow-[0_10px_30px_rgba(62,44,35,0.08)]
                         hover:shadow-[0_15px_40px_rgba(62,44,35,0.15)]
                         transition duration-500"
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
            >
              <h3 className="text-2xl font-light tracking-wide text-[#3E2C23]">
                {f.title}
              </h3>
              <p className="text-[#6F4E37] text-lg leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-28 bg-[#2A1E17] text-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extralight tracking-[0.15em] uppercase mb-6 text-[#F7E7CE]"
        >
          Ready to get started?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg text-[#EAD8C0] mb-8"
        >
          Experience warm, minimal and elevated design today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="inline-block border border-[#C68E17] 
                       text-[#F7E7CE] px-10 py-4 text-sm 
                       tracking-[0.2em] uppercase
                       hover:bg-[#C68E17] hover:text-white
                       transition-all duration-500 rounded-md"
          >
            Contact Us
          </Link>
        </motion.div>

      </section>

    </main>
  );
}