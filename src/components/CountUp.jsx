import { useEffect, useRef, useState } from 'react'

function parse(value) {
  const match = String(value).match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/)
  if (!match) {
    return null
  }
  const decimals = (match[2].split('.')[1] || '').length
  return { prefix: match[1], number: Number(match[2]), suffix: match[3], decimals }
}

export default function CountUp({ value, className }) {
  const parts = parse(value)
  const ref = useRef(null)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!parts) {
      return
    }
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || !('IntersectionObserver' in window)) {
      setCurrent(parts.number)
      return
    }
    let frame = 0
    const observer = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) {
        return
      }
      observer.disconnect()
      const start = performance.now()
      const duration = 1400
      function step(now) {
        const t = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - t, 3)
        setCurrent(parts.number * eased)
        if (t < 1) {
          frame = requestAnimationFrame(step)
        }
      }
      frame = requestAnimationFrame(step)
    }, { threshold: 0.4 })
    observer.observe(ref.current)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value])

  if (!parts) {
    return <span className={className}>{value}</span>
  }
  return (
    <span ref={ref} className={className}>
      {parts.prefix}
      {current.toFixed(parts.decimals)}
      {parts.suffix}
    </span>
  )
}
