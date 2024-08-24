import React from 'react'
import Footer from './footer'
import Header from './header'

export interface MarketingLayoutProps extends React.PropsWithChildren {}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
