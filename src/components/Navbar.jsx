"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'motion/react'

export const Navbar = () => {
  const pathname = usePathname()
  
  const navItems = [
    {
      title: "Home",
      href: "/"
    },
    {
      title: "Projects",
      href: "/projects"
    },
    {
      title: "Contact",
      href: "/contact"
    }
  ]
  
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className='flex text-white items-center justify-between bg-gradient-to-r from-gray-900 via-black to-gray-900 backdrop-blur-md border-b border-gray-700/30 px-6 md:px-12 min-h-16 w-full sticky top-0 z-50 shadow-xl'
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Link 
          href="/"
          className='text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent hover:from-white hover:to-white transition-all duration-500 ease-in-out'
        >
          AG
        </Link>
      </motion.div>
      
      <div className='flex items-center space-x-1 md:space-x-2'>
        {navItems.map((item, idx)=>(
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1, ease: "easeOut" }}
          >
            <Link 
              href={item.href} 
              className={`relative px-4 py-2 rounded-lg text-sm md:text-base font-medium transition-all duration-500 ease-in-out ${
                pathname === item.href
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {pathname === item.href && (
                <motion.span 
                  layoutId="activeBackground"
                  className="absolute inset-0 bg-gradient-to-r from-gray-800/80 to-gray-700/80 rounded-lg"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.title}</span>
              {pathname === item.href && (
                <motion.span 
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.nav>
  )
}
