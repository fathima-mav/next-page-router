

import { FiInstagram, FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi"

export default function Footer() {
  return (
    <footer className="bg-[#2A1E17] text-[#F7E7CE] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Logo Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extralight tracking-[0.6em] uppercase text-[#F7E7CE]">
            VELORA
          </h2>
          <p className="mt-5 text-xs tracking-[0.4em] text-[#C68E17] uppercase">
            Redefining Modern Elegance
          </p>
        </div>

        {/* Footer Grid */}
        <div className="grid md:grid-cols-3 gap-16 text-sm">

          {/* About */}
          <div>
            <h3 className="mb-6 uppercase tracking-[0.3em] text-xs text-[#C68E17]">
              About
            </h3>
            <p className="text-[#EAD8C0] leading-relaxed">
              VELORA creates refined fashion pieces designed to express 
              confidence and individuality. Timeless silhouettes with a modern soul.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 uppercase tracking-[0.3em] text-xs text-[#C68E17]">
              Explore
            </h3>
            <ul className="space-y-4">
              {["Shop", "About", "Contact"].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item === "Shop" ? "/" : `/${item.toLowerCase()}`}
                    className="relative inline-block text-[#EAD8C0] hover:text-[#F7E7CE] transition-colors duration-300
                               after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0
                               after:bg-[#C68E17] after:transition-all after:duration-400
                               hover:after:w-full"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-6 uppercase tracking-[0.3em] text-xs text-[#C68E17]">
              Join the List
            </h3>

            <form className="flex border-b border-[#6F4E37] pb-3">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent flex-1 outline-none text-sm text-[#F7E7CE] placeholder:text-[#B89C85]"
              />
              <button
                type="submit"
                className="relative uppercase tracking-[0.3em] text-xs text-[#EAD8C0] hover:text-[#F7E7CE] transition
                           after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0
                           after:bg-[#C68E17] after:transition-all after:duration-400
                           hover:after:w-full"
              >
                Subscribe
              </button>
            </form>

            {/* Social Icons */}
            <div className="flex space-x-5 mt-10 text-[#B89C85]">
              {[FiInstagram, FiFacebook, FiTwitter, FiLinkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="hover:text-[#C68E17] transition duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-[#3E2C23] mt-20 pt-8 text-center text-xs text-[#B89C85] tracking-[0.3em] uppercase">
          © {new Date().getFullYear()} VELORA
        </div>

      </div>
    </footer>
  )
}