interface IProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: IProps) {
  return (
    <div className='flex h-full items-center justify-center'>{children}</div>
  )
}
