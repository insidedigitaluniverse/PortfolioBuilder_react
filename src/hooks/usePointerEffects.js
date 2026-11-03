import { useEffect } from 'react'

export function usePointerEffects() {
  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) {
      return
    }

    function onMove(event) {
      const card = event.target.closest('.card')
      if (!card) {
        return
      }
      const rect = card.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      card.style.setProperty('--mx', `${x}px`)
      card.style.setProperty('--my', `${y}px`)
      if (card.classList.contains('tilt')) {
        const rx = ((y / rect.height) - 0.5) * -8
        const ry = ((x / rect.width) - 0.5) * 8
        card.style.setProperty('--rx', `${rx}deg`)
        card.style.setProperty('--ry', `${ry}deg`)
      }
    }

    function onLeave(event) {
      const card = event.target.closest('.tilt')
      if (card && !card.contains(event.relatedTarget)) {
        card.style.setProperty('--rx', '0deg')
        card.style.setProperty('--ry', '0deg')
      }
    }

    document.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerout', onLeave, { passive: true })
    return () => {
      document.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerout', onLeave)
    }
  }, [])
}
