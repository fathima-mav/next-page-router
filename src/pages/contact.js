import { motion } from "framer-motion"

export default function ContactPage() {
  return (
    <main className="bg-[#2A1E17] text-[#F7E7CE] min-h-screen">

      {/* Header */}
      <section className="py-28 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extralight tracking-[0.6em] uppercase"
        >
          Contact
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-xs tracking-[0.4em] uppercase text-[#C68E17]"
        >
          We’d Love to Hear From You
        </motion.p>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="border-b border-[#6F4E37] pb-3">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-transparent outline-none text-[#F7E7CE] placeholder:text-[#B89C85] text-sm tracking-wide"
            />
          </div>

          <div className="border-b border-[#6F4E37] pb-3">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent outline-none text-[#F7E7CE] placeholder:text-[#B89C85] text-sm tracking-wide"
            />
          </div>

          <div className="border-b border-[#6F4E37] pb-3">
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full bg-transparent outline-none text-[#F7E7CE] placeholder:text-[#B89C85] text-sm tracking-wide resize-none"
            />
          </div>

          <div className="pt-6">
            <button
              type="submit"
              className="relative uppercase tracking-[0.4em] text-xs text-[#EAD8C0] hover:text-[#F7E7CE] transition
                         after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0
                         after:bg-[#C68E17] after:transition-all after:duration-500
                         hover:after:w-full"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </section>

      {/* Contact Info Section */}
      <section className="bg-[#3E2C23] py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-4 text-[#EAD8C0]"
        >
          <p className="tracking-widest uppercase text-xs text-[#C68E17]">
            Customer Care
          </p>

          <p className="text-sm">
            support@velora.com
          </p>

          <p className="text-sm">
            +1 (000) 123-4567
          </p>
        </motion.div>
      </section>

    </main>
  )
}