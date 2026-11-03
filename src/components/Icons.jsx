function Icon({ children, size = 20, filled = false }) {
  let fill = 'none'
  let stroke = 'currentColor'
  if (filled) {
    fill = 'currentColor'
    stroke = 'none'
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

export function GitHubIcon({ size }) {
  return (
    <Icon size={size} filled>
      <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.53 11.53 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5z" />
    </Icon>
  )
}

export function LinkedInIcon({ size }) {
  return (
    <Icon size={size}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </Icon>
  )
}

export function XIcon({ size }) {
  return (
    <Icon size={size}>
      <path d="M4 4l11.7 16H20L8.3 4H4z" />
      <path d="M4 20l6.8-7.2M20 4l-6.6 7" />
    </Icon>
  )
}

export function InstagramIcon({ size }) {
  return (
    <Icon size={size}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <path d="M17.5 6.5h.01" />
    </Icon>
  )
}

export function GlobeIcon({ size }) {
  return (
    <Icon size={size}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </Icon>
  )
}

export function MailIcon({ size }) {
  return (
    <Icon size={size}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="M22 6l-10 7L2 6" />
    </Icon>
  )
}

export function PhoneIcon({ size }) {
  return (
    <Icon size={size}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </Icon>
  )
}

export function MapPinIcon({ size }) {
  return (
    <Icon size={size}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </Icon>
  )
}

export function DownloadIcon({ size }) {
  return (
    <Icon size={size}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="M7 10l5 5 5-5M12 15V3" />
    </Icon>
  )
}

export function ArrowRightIcon({ size }) {
  return (
    <Icon size={size}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Icon>
  )
}

export function ChevronDownIcon({ size }) {
  return (
    <Icon size={size}>
      <path d="M6 9l6 6 6-6" />
    </Icon>
  )
}

export function ArrowUpIcon({ size }) {
  return (
    <Icon size={size}>
      <path d="M12 19V5M6 11l6-6 6 6" />
    </Icon>
  )
}

export function ExternalIcon({ size }) {
  return (
    <Icon size={size}>
      <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
    </Icon>
  )
}

export function CodeIcon({ size }) {
  return (
    <Icon size={size}>
      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
    </Icon>
  )
}

export function SunIcon({ size }) {
  return (
    <Icon size={size}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </Icon>
  )
}

export function MoonIcon({ size }) {
  return (
    <Icon size={size}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </Icon>
  )
}

export function MenuIcon({ size }) {
  return (
    <Icon size={size}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </Icon>
  )
}

export function CloseIcon({ size }) {
  return (
    <Icon size={size}>
      <path d="M6 6l12 12M18 6L6 18" />
    </Icon>
  )
}

export function BriefcaseIcon({ size }) {
  return (
    <Icon size={size}>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </Icon>
  )
}

export function CapIcon({ size }) {
  return (
    <Icon size={size}>
      <path d="M22 10L12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5c3 2 9 2 12 0v-5" />
    </Icon>
  )
}

export function YouTubeIcon({ size }) {
  return (
    <Icon size={size}>
      <path d="M22.5 6.4a2.8 2.8 0 0 0-2-2C18.8 4 12 4 12 4s-6.8 0-8.5.4a2.8 2.8 0 0 0-2 2A29 29 0 0 0 1 12a29 29 0 0 0 .5 5.6 2.8 2.8 0 0 0 2 2c1.7.4 8.5.4 8.5.4s6.8 0 8.5-.4a2.8 2.8 0 0 0 2-2A29 29 0 0 0 23 12a29 29 0 0 0-.5-5.6z" />
      <path d="M10 15l5-3-5-3z" />
    </Icon>
  )
}

export function BehanceIcon({ size }) {
  return (
    <Icon size={size}>
      <path d="M2 6h5.5a2.75 2.75 0 0 1 0 5.5H2zM2 11.5h6a3.25 3.25 0 0 1 0 6.5H2z" />
      <path d="M15 7h6M14 14h8a4 4 0 1 0-1.2 2.9" />
    </Icon>
  )
}

export function AwardIcon({ size }) {
  return (
    <Icon size={size}>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.5 13.5L17 22l-5-3-5 3 1.5-8.5" />
    </Icon>
  )
}

export function SparkIcon({ size }) {
  return (
    <Icon size={size}>
      <path d="M12 3l2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5z" />
    </Icon>
  )
}

const socialMeta = [
  ['linkedin', 'LinkedIn', LinkedInIcon],
  ['github', 'GitHub', GitHubIcon],
  ['instagram', 'Instagram', InstagramIcon],
  ['twitter', 'X (Twitter)', XIcon],
  ['youtube', 'YouTube', YouTubeIcon],
  ['behance', 'Behance', BehanceIcon],
  ['website', 'Website', GlobeIcon],
]

export function socialLinks(socials) {
  return socialMeta
    .filter(([key]) => socials[key])
    .map(([key, label, IconComponent]) => ({ key, label, url: socials[key], IconComponent }))
}
