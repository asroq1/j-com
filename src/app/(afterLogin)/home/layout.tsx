import { ReactNode } from 'react'

type HomelayoutProps = {
  children: ReactNode
}

const Homelayout = ({ children }: HomelayoutProps) => {
  return <div>홈 레이아웃{children}</div>
}

export default Homelayout
