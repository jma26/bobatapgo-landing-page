/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Header from "./header"

const theme = createTheme({
  palette: {
    primary: {
      main: "#37475D",
      light: "#37475D",
      dark: "#00000D",
      contrastText: "#FFFFFF"
    },
    secondary: {
      main: "#F94E4E",
      light: "#FF827A",
      dark: "#BF0525",
      contrastText: "#FFFFFF"
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
    },
    divider: "#BDBDBD"
  }
})

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const data: any = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const siteTitle: string = data.site.siteMetadata?.title || 'Title'

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header siteTitle={siteTitle} />
      <div>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default Layout
