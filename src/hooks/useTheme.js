import { useEffect, useState } from 'react'

const KEY = 'portfolio-theme'

function readTheme(fallback) {
  try {
    const saved = localStorage.getItem(KEY)
    if (saved === 'light' || saved === 'dark') {
      return saved
    }
  } catch {
    return fallback
  }
  return fallback
}

export function useTheme(fallback) {
  const [theme, setTheme] = useState(() => readTheme(fallback))

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem(KEY, theme)
    } catch {
      return
    }
  }, [theme])

  function toggle() {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return [theme, toggle]
}
