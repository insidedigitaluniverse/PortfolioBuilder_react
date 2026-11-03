import { useEffect, useState } from 'react'

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function useTyping(words, speed = 85, pause = 1600) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [reduced] = useState(prefersReducedMotion)

  useEffect(() => {
    if (reduced || words.length === 0) {
      return
    }
    const word = words[index % words.length]
    let delay = speed
    if (deleting) {
      delay = speed / 2
    }
    if (!deleting && text === word) {
      delay = pause
    }
    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true)
        return
      }
      if (deleting && text === '') {
        setDeleting(false)
        setIndex(index + 1)
        return
      }
      if (deleting) {
        setText(word.slice(0, text.length - 1))
      } else {
        setText(word.slice(0, text.length + 1))
      }
    }, delay)
    return () => clearTimeout(timer)
  }, [text, deleting, index, words, speed, pause, reduced])

  if (reduced) {
    if (words.length > 0) {
      return words[0]
    }
    return ''
  }
  return text
}
