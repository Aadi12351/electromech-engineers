import React from 'react'
import {
  motion,
  useScroll,
  useSpring,
} from 'framer-motion'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(
    scrollYProgress,
    {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    }
  )

  return (
    <motion.div
      aria-hidden="true"
      style={{
        scaleX,
      }}
      className="
        fixed
        left-0
        right-0
        top-0
        z-[100]
        h-[2px]
        origin-left
        bg-[#c8a45c]
      "
    />
  )
}

export default ScrollProgress