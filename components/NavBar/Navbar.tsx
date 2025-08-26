"use client"
/* eslint-disable  @typescript-eslint/no-explicit-any */
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
)

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-2">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
              <img src="./cuddles_logo.svg" alt="cuddles logo" />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-black hover:text-purple font-bold">
              About Us
            </a>
            <a href="#" className="text-black hover:text-purple font-bold">
              Curriculum
            </a>
            <a href="#" className="text-black hover:text-purple font-bold">
              Partnerships
            </a>
            <a href="#" className="text-black hover:text-purple font-bold">
              Safety
            </a>
            <a href="#" className="text-black hover:text-purple font-bold">
              Assistance
            </a>
            <a href="#" className="text-black hover:text-purple font-bold">
              Contact us
            </a>
          </nav>

          {/* Hamburger / Cross Button */}
          <button
            className="md:hidden bg-transparent text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <motion.svg
              initial={false}
              animate={isMobileMenuOpen ? "open" : "closed"}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 23 23"
            >
              <Path
                variants={{
                  closed: { d: "M 2 2.5 L 20 2.5" },
                  open: { d: "M 3 16.5 L 17 2.5" },
                }}
                transition={{ duration: 0.3 }}
              />
              <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.2 }}
              />
              <Path
                variants={{
                  closed: { d: "M 2 16.346 L 20 16.346" },
                  open: { d: "M 3 2.5 L 17 16.346" },
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.svg>
          </button>
        </div>

        {/* Animated Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <a
                  href="#"
                  className="block px-3 py-2 text-black hover:text-purple font-bold hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-black hover:text-purple font-bold hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Curriculum
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-black hover:text-purple font-bold hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Partnerships
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-black hover:text-purple font-bold hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Safety
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-black hover:text-purple font-bold hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Assistance
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-black hover:text-purple font-bold hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact us
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default NavBar
