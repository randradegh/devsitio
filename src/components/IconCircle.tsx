interface IconCircleProps {
  icon: 'users' | 'lock' | 'puzzle' | 'building' | 'megaphone' | 'book' | 'code' | 'globe' | 'robot' | 'database'
  color: 'blue' | 'green' | 'purple'
  size?: 'sm' | 'md' | 'lg'
}

const iconPaths = {
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </>
  ),
  lock: (
    <>
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </>
  ),
  puzzle: (
    <>
      <path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"></path>
    </>
  ),
  building: (
    <>
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
      <path d="M6 12h12"></path>
      <path d="M6 16h12"></path>
      <path d="M6 8h12"></path>
      <path d="M10 2v4"></path>
      <path d="M14 2v4"></path>
    </>
  ),
  megaphone: (
    <>
      <path d="m3 11 18-5v12L3 14v-3z"></path>
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path>
    </>
  ),
  book: (
    <>
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
    </>
  ),
  code: (
    <>
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </>
  ),
  robot: (
    <>
      <rect width="18" height="10" x="3" y="11" rx="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      <path d="M12 11v4"></path>
      <path d="M8 15h.01"></path>
      <path d="M16 15h.01"></path>
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
    </>
  ),
}

const colorClasses = {
  blue: {
    bg: 'bg-blue-950',
    border: 'border-blue-400/50',
    icon: 'text-blue-300',
    glow: 'shadow-[0_0_20px_rgba(96,165,250,0.3)]',
  },
  green: {
    bg: 'bg-emerald-950',
    border: 'border-emerald-400/50',
    icon: 'text-emerald-300',
    glow: 'shadow-[0_0_20px_rgba(52,211,153,0.3)]',
  },
  purple: {
    bg: 'bg-purple-950',
    border: 'border-purple-400/50',
    icon: 'text-purple-300',
    glow: 'shadow-[0_0_20px_rgba(168,85,247,0.3)]',
  },
}

const sizeClasses = {
  sm: 'w-12 h-12',
  md: 'w-16 h-16',
  lg: 'w-20 h-20',
}

export default function IconCircle({ icon, color, size = 'md' }: IconCircleProps) {
  const colors = colorClasses[color]
  const sizeClass = sizeClasses[size]

  return (
    <div className={`${sizeClass} ${colors.bg} ${colors.border} border-2 rounded-full flex items-center justify-center relative group-hover:scale-110 transition-transform ${colors.glow}`}>
      <div className={`absolute inset-0 ${colors.border.replace('/50', '/20')} rounded-full blur-md opacity-60`}></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size === 'sm' ? '20' : size === 'md' ? '24' : '28'}
        height={size === 'sm' ? '20' : size === 'md' ? '24' : '28'}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`${colors.icon} relative z-10`}
      >
        {iconPaths[icon]}
      </svg>
    </div>
  )
}

