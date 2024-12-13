import React, { ReactNode } from 'react'

const RootLayout = ({children}:{children: ReactNode } ) => {
  return (
    <main>
        NavBar
        {children}
        footer
    </main>
  )
}

export default RootLayout