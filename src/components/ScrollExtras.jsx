import { useEffect, useState } from 'react'
import { cx } from '../utils.js'
import { ArrowUpIcon } from './Icons.jsx'

export default function ScrollExtras() {
  const [progress, setProgress] = useState(0)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    function onScroll() {
      const max = document.documentElement.scrollHeight - window.innerHeight
      let value = 0
      if (max > 0) {
        value = window.scrollY / max
      }
      setProgress(value)
      setShowTop(window.scrollY > window.innerHeight * 0.8)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <a href="#home" className={cx('back-to-top', showTop && 'show')} aria-label="Back to top" title="Back to top">
        <ArrowUpIcon />
      </a>
    </>
  )
}
