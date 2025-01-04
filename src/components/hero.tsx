'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Star } from 'lucide-react'

export default function Hero() {
  return (
    <div className="min-h-screen bg-[#0B0D12]">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-white">
            WagerWise
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/pro" className="text-gray-300 hover:text-white">
            WagerWise Pro
          </Link>
          <Link href="/features" className="text-gray-300 hover:text-white">
            Features
          </Link>
          <Link href="/testimonials" className="text-gray-300 hover:text-white">
            Testimonials
          </Link>
          <Link href="/blog" className="text-gray-300 hover:text-white">
            Blog
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
        </div>

        <Link
          href="/sign-in"
          className="rounded-full bg-[#7EB6FF] px-4 py-2 text-sm font-medium text-black hover:bg-[#7EB6FF]/90"
        >
          Sign in
        </Link>
      </nav>

      {/* Hero Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left side content */}
          <div className="max-w-2xl lg:max-w-xl">
            <h1 className="text-6xl font-bold tracking-tight text-white sm:text-4xl lg:text-7xl">
              The Ultimate
              <br />
              Sports Betting
              <br />
              <span className="text-[#7EB6FF]">Community</span>
            </h1>
            
            <div className="mt-10 flex items-center gap-6">
              <Link
                href="/signup"
                className="rounded-full bg-[#7EB6FF] px-6 py-3 text-base font-semibold text-black hover:bg-[#7EB6FF]/90"
              >
                Start tracking for free
              </Link>
              
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-[#7EB6FF] text-[#7EB6FF]"
                    />
                  ))}
                </div>
                <span className="text-xl font-semibold text-white">4.9</span>
                <span className="text-gray-400">14K+ reviews</span>
              </div>
            </div>
          </div>

          {/* Right side images */}
          <div className="mt-16 lg:mt-0 relative flex justify-center items-center">
            <div className="relative">
              <Image
                src="/images/hero/HeroScreens.png"
                alt="App interface mockup"
                width={420}
                height={420}
                className="relative z-10"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

