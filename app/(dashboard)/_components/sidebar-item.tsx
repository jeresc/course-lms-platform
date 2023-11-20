import { cn } from '@/lib/utils'
import { type LucideIcon } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

interface SidebarItemProps {
  icon: LucideIcon
  label: string
  href: string
}

export function SidebarItem({ icon: Icon, label, href }: SidebarItemProps) {
  const pathname = usePathname()
  const router = useRouter()

  const isActive =
    (pathname === '/' && href === '/') ||
    pathname === href ||
    pathname?.startsWith(`${href}/`)

  const onClick = () => {
    router.push(href)
  }

  return (
    <button
      onClick={onClick}
      type='button'
      className={cn(
        'font-[500 hover:text-slate-600] flex items-center gap-x-2 pl-6 text-sm text-slate-500 transition-all hover:bg-slate-300/20 hover:text-slate-600',
        isActive &&
          'bg-sky-200/20 text-sky-700 hover:bg-sky-200/20 hover:text-sky-700',
      )}
    >
      <div className='flex items-center gap-x-2 py-4'>
        <Icon
          size={22}
          className={cn('text-slate-500', isActive && 'text-sky-700')}
        />
      </div>
      {label}
    </button>
  )
}
