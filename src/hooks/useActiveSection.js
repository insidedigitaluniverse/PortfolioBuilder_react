import { useEffect, useState } from 'react'

export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  const key = ids.join(',')

  useEffect(() => {
    const list = key.split(',')
    function onScroll() {
      let current = list[0]
      list.forEach((id) => {
        const element = document.getElementById(id)
        if (element && element.getBoundingClientRect().top <= window.innerHeight * 0.35) {
          current = id
        }
      })
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        current = list[list.length - 1]
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [key])

  return active
}
