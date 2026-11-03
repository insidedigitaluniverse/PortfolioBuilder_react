import { cx } from '../utils.js'
import { SunIcon, MoonIcon } from './Icons.jsx'

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'
  let label = 'Switch to dark theme'
  if (isDark) {
    label = 'Switch to light theme'
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={label}
      title={label}
      className={cx('theme-toggle', isDark && 'dark')}
      onClick={onToggle}
    >
      <span className="theme-toggle-icon sun">
        <SunIcon size={14} />
      </span>
      <span className="theme-toggle-icon moon">
        <MoonIcon size={14} />
      </span>
      <span className="theme-toggle-knob" />
    </button>
  )
}
