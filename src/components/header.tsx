import React, { useState, MouseEvent } from "react";
import { Link as GatsbyLink } from "gatsby";

import AppBar from "@mui/material/AppBar";
import Link from '@mui/material/Link';
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles"

interface HeaderProps {
  siteTitle: string
}

const Header = ({ siteTitle }: HeaderProps) => {
  const [anchor, setAnchor] = useState(null);
  const open = Boolean(anchor);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchor(event.currentTarget);
  }

  return (
    <AppBar position='static'>
      <Container>
        <Toolbar>
          <Typography
            sx={{ mr: 3, fontSize: '18px' }}
          >
            BobaTapGo
          </Typography>
          {
            isMobile ? (
              <>
                <Link
                  component={GatsbyLink}
                  to='/suport'
                  variant='h6'
                  sx={{ color: '#FFF', ml: 'auto', mr: '3', fontSize: '18px' }}
                >
                  Get Started
                </Link>
                <IconButton
                  size='large'
                  edge='end'
                  color='inherit'
                  aria-label='menu'
                  onClick={handleMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id='menu-appbar'
                  anchorEl={anchor}
                  open={open}
                >
                  <MenuItem
                    onClick={() => setAnchor(null)}
                    component={GatsbyLink}
                    to='/pricing'
                  >
                    Pricing
                  </MenuItem>
                  <MenuItem
                    onClick={() => setAnchor(null)}
                    component={GatsbyLink}
                    to='/support'
                  >
                    Support
                  </MenuItem>
                  <MenuItem
                    onClick={() => setAnchor(null)}
                    component={GatsbyLink}
                    to='/contact'
                  >
                    888-888-8888
                  </MenuItem>
                  <MenuItem
                    onClick={() => setAnchor(null)}
                    component={GatsbyLink}
                    to='/demo'
                  >
                    Get Started
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <Link
                  component={GatsbyLink}
                  to='/pricing'
                  variant='h6'
                  sx={{ color: '#FFF', mx: 3, fontSize: '18px' }}
                >
                  Pricing
                </Link>
                <Link
                  component={GatsbyLink}
                  to='/suport'
                  variant='h6'
                  sx={{ color: '#FFF', mx: 3, fontSize: '18px' }}
                >
                  Support
                </Link>
                <Link
                  component={GatsbyLink}
                  to='/suport'
                  variant='h6'
                  sx={{ color: '#FFF', mx: 3, fontSize: '18px' }}
                >
                  888-888-8888
                </Link>
                <Link
                  component={GatsbyLink}
                  to='/demo'
                  variant='h6'
                  sx={{ color: '#FFF', ml: 'auto', fontSize: '18px' }}
                >
                  Get Started
                </Link>
                <Link
                  component={GatsbyLink}
                  to='/login'
                  sx={{ color: '#FFF', ml: 3 }}
                >
                  <PersonOutlineIcon />
                </Link>
              </>
            )
          }

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header
