import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Calendar, MapPin, Clock, Users, Gift, Sparkles } from 'lucide-react'

const Home: NextPage = () => {
  const [showDetails, setShowDetails] = useState(false)
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const noButtonRef = useRef<HTMLButtonElement>(null)

  const eventData = {
    title: "Chào Mừng Ngày Phụ Nữ Việt Nam 20-10",
    subtitle: "Cùng nhau tạo nên những khoảnh khắc đáng nhớ",
    date: "20/10/2025",
    time: "11:30",
    location: "Văn phòng công ty",
    description: "Rất mong chị em dành ra thời gian tham gia chương trình đặc biệt này. Chúng ta sẽ có những hoạt động thú vị, phần quà hấp dẫn và những phút giây vui vẻ bên nhau!",
    activities: [
      "Chương trình văn nghệ đặc sắc",
      "Trò chơi team building thú vị", 
      "Phần quà may mắn",
      "Tiệc buffet ngon miệng",
      "Chụp ảnh kỷ niệm"
    ],
    logoUrl: "/PeaSoft Vietnam.webp"
  }

  const moveButton = () => {
    if (noButtonRef.current) {
      const button = noButtonRef.current
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight
      const buttonRect = button.getBoundingClientRect()
      
      // Calculate random position anywhere on screen (with some margin)
      const margin = 50 // Keep button within screen bounds
      const maxX = windowWidth - buttonRect.width - margin
      const maxY = windowHeight - buttonRect.height - margin
      
      const randomX = Math.random() * maxX + margin
      const randomY = Math.random() * maxY + margin
      
      // Convert to relative position from current position
      const currentX = buttonRect.left
      const currentY = buttonRect.top
      
      setNoButtonPosition({ 
        x: randomX - currentX, 
        y: randomY - currentY 
      })
    }
  }

  const handleNoButtonHover = () => {
    moveButton()
  }

  const handleNoButtonClick = () => {
    // Move even further when clicked
    if (noButtonRef.current) {
      const button = noButtonRef.current
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight
      const buttonRect = button.getBoundingClientRect()
      
      // Calculate random position anywhere on screen (with margin)
      const margin = 30 // Smaller margin for click = can go closer to edges
      const maxX = windowWidth - buttonRect.width - margin
      const maxY = windowHeight - buttonRect.height - margin
      
      const randomX = Math.random() * maxX + margin
      const randomY = Math.random() * maxY + margin
      
      // Convert to relative position from current position
      const currentX = buttonRect.left
      const currentY = buttonRect.top
      
      setNoButtonPosition({ 
        x: randomX - currentX, 
        y: randomY - currentY 
      })
    }
  }

  // Countdown timer
  useEffect(() => {
    const targetDate = new Date('2025-10-20T11:30:00').getTime()
    
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now
      
      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)
        
        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)
    
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <Head>
        <title>Lời Mời Tham Gia Sự Kiện 20-10</title>
        <meta name="description" content="Mời tham gia sự kiện chào mừng ngày phụ nữ Việt Nam 20-10" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
        </div>

        <AnimatePresence mode="wait">
          {!showDetails ? (
            <motion.div
              key="invitation"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4"
            >
              {/* Logo */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="mb-8"
              >
                <img 
                  src={eventData.logoUrl} 
                  alt="Logo công ty" 
                  className="h-32 w-auto"
                />
              </motion.div>

              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center mb-8"
              >
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                  <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                    Chào Mừng
                  </span>
                </h1>
                <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 mb-2">
                  Ngày Phụ Nữ Việt Nam
                </h2>
                <div className="flex items-center justify-center gap-2 text-3xl md:text-5xl font-bold text-pink-600">
                  <Heart className="animate-bounce-slow" />
                  <span>20-10</span>
                  <Heart className="animate-bounce-slow" />
                </div>
              </motion.div>

              {/* Event info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 mb-8 max-w-md w-full"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-pink-500" />
                    <span className="text-lg font-semibold text-gray-700">{eventData.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-purple-500" />
                    <span className="text-lg font-semibold text-gray-700">{eventData.time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-blue-500" />
                    <span className="text-lg font-semibold text-gray-700">{eventData.location}</span>
                  </div>
                </div>
              </motion.div>


              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 items-center"
              >
                {/* No button - runs away */}
                <motion.button
                  ref={noButtonRef}
                  animate={{
                    x: noButtonPosition.x,
                    y: noButtonPosition.y,
                    rotate: noButtonPosition.x * 0.2
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 15,
                    duration: 0.3
                  }}
                  onMouseEnter={handleNoButtonHover}
                  onClick={handleNoButtonClick}
                  className="bg-gradient-to-r from-gray-400 to-gray-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg flex items-center gap-2 group relative cursor-pointer hover:from-gray-500 hover:to-gray-600 transition-all duration-200"
                  style={{ 
                    position: 'relative',
                    zIndex: 10
                  }}
                >
                  <span className="text-sm animate-bounce">😢</span>
                  <span className="relative z-10">Không tham gia</span>
                  <span className="text-sm animate-bounce">😢</span>
                </motion.button>

                {/* Yes button - attractive */}
                <motion.button
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -2, 2, 0],
                    boxShadow: "0 20px 40px rgba(236, 72, 153, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowDetails(true)}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 group relative"
                >
                  <Sparkles className="w-6 h-6 animate-wiggle" />
                  <span className="relative z-10">Tham Gia Ngay</span>
                  <Sparkles className="w-6 h-6 animate-wiggle" />
                  
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                  
                  <div className="absolute -top-2 -left-2 w-4 h-4 text-pink-300 animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    💖
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 text-purple-300 animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    💕
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 text-pink-300 animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    💗
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 text-purple-300 animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">
                    💝
                  </div>
                </motion.button>
              </motion.div>

              {/* Fun messages */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="mt-6 text-center space-y-2"
              >
            
                <p className="text-pink-500 text-sm font-semibold animate-pulse">
                  ✨ Không click vào "Không tham gia" được đâu chị em đừng thử bấm nha hehe! ✨
                </p>
              </motion.div>

              {/* Decorative hearts */}
              <div className="absolute top-20 left-10 animate-float">
                <Heart className="w-8 h-8 text-pink-300" />
              </div>
              <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
                <Heart className="w-6 h-6 text-purple-300" />
              </div>
              <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
                <Heart className="w-7 h-7 text-blue-300" />
              </div>
              
              {/* Fun emojis */}
              <div className="absolute top-32 right-10 animate-bounce text-2xl opacity-60">
                🎉
              </div>
              <div className="absolute bottom-32 right-32 animate-bounce text-xl opacity-60" style={{ animationDelay: '0.5s' }}>
                ✨
              </div>
              <div className="absolute top-60 left-32 animate-bounce text-lg opacity-60" style={{ animationDelay: '1.5s' }}>
                🌸
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="details"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 min-h-screen py-8 px-4"
            >
              <div className="max-w-4xl mx-auto">
                {/* Back button */}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  onClick={() => setShowDetails(false)}
                  className="mb-8 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  ← Quay lại
                </motion.button>

                {/* Main content */}
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-blue-600 via-red-600 to-blue-800 p-8 text-center text-white">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    >
                      <img 
                        src={eventData.logoUrl} 
                        alt="Logo công ty" 
                        className="h-28 w-auto mx-auto mb-4"
                      />
                    </motion.div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">{eventData.title}</h1>
                    <p className="text-xl opacity-90">{eventData.subtitle}</p>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Countdown Timer */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="mb-8"
                    >
                      <div className="bg-gradient-to-r from-blue-500 via-red-500 to-blue-700 rounded-2xl p-6 shadow-xl">
                        <div className="text-center text-white mb-4">
                          <h3 className="text-xl font-bold mb-2">⏰ Đếm ngược đến sự kiện</h3>
                          <p className="text-blue-100">Còn lại bao lâu nữa nhỉ?</p>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                          <div className="bg-white/20 rounded-xl p-4 text-center">
                            <div className="text-3xl font-bold text-white">{timeLeft.days}</div>
                            <div className="text-sm text-blue-100">Ngày</div>
                          </div>
                          <div className="bg-white/20 rounded-xl p-4 text-center">
                            <div className="text-3xl font-bold text-white">{timeLeft.hours}</div>
                            <div className="text-sm text-blue-100">Giờ</div>
                          </div>
                          <div className="bg-white/20 rounded-xl p-4 text-center">
                            <div className="text-3xl font-bold text-white">{timeLeft.minutes}</div>
                            <div className="text-sm text-blue-100">Phút</div>
                          </div>
                          <div className="bg-white/20 rounded-xl p-4 text-center">
                            <div className="text-3xl font-bold text-white">{timeLeft.seconds}</div>
                            <div className="text-sm text-blue-100">Giây</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Event info */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="grid md:grid-cols-3 gap-6 mb-8"
                    >
                      <div className="bg-pink-50 rounded-xl p-6 text-center">
                        <Calendar className="w-8 h-8 text-pink-500 mx-auto mb-3" />
                        <h3 className="font-bold text-gray-800 mb-1">Ngày</h3>
                        <p className="text-pink-600 font-semibold">{eventData.date}</p>
                      </div>
                      <div className="bg-purple-50 rounded-xl p-6 text-center">
                        <Clock className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                        <h3 className="font-bold text-gray-800 mb-1">Giờ</h3>
                        <p className="text-purple-600 font-semibold">{eventData.time}</p>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-6 text-center">
                        <MapPin className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                        <h3 className="font-bold text-gray-800 mb-1">Địa điểm</h3>
                        <p className="text-blue-600 font-semibold">{eventData.location}</p>
                      </div>
                    </motion.div>

                    {/* Description */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="mb-8"
                    >
                      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                        <Heart className="w-6 h-6 text-pink-500" />
                        Lời mời
                      </h2>
                      <p className="text-gray-700 text-lg leading-relaxed bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl">
                        {eventData.description}
                      </p>
                    </motion.div>

                    {/* Activities */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="mb-8"
                    >
                      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                        <Gift className="w-6 h-6 text-purple-500" />
                        Chương trình
                      </h2>
                      <div className="grid md:grid-cols-2 gap-4">
                        {eventData.activities.map((activity, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + index * 0.1 }}
                            className="bg-white rounded-xl p-4 shadow-md border-l-4 border-pink-400 flex items-center gap-3"
                          >
                            <Sparkles className="w-5 h-5 text-pink-500" />
                            <span className="text-gray-700 font-medium">{activity}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>


                    {/* Call to action */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                      className="text-center"
                    >
                      <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-3">
                          Hẹn gặp lại các chị em vào ngày 20-10! 💕
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Chúng ta sẽ có những khoảnh khắc đáng nhớ và vui vẻ bên nhau
                        </p>
                        <div className="flex justify-center gap-4">
                          <Users className="w-6 h-6 text-pink-500" />
                          <Heart className="w-6 h-6 text-pink-500 animate-bounce" />
                          <Users className="w-6 h-6 text-pink-500" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default Home
