import './globals.css';
import React from "react"
import Nav from '@/components/nav';
import { ThemeProvider } from "@/components/theme"
import { ModeToggle } from '@/components/theme-mode';
// import { SkeletonLoading } from '@/components/loading';





interface LayoutProp{
  children:React.ReactNode
}


const RootLayout = ({ children }:LayoutProp) => {
  return(
    <html>
      <body>
    
          <main className="app">

            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <div> 
             {/* <SkeletonLoading /> */}

                <Nav />
              </div>
              <ModeToggle />
            {children}
          </ThemeProvider>
           
          </main>
      </body>
    </html>
  )
}


export default RootLayout;