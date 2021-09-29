import React, { useState, MouseEvent } from "react";
import { Link as GatsbyLink } from "gatsby";

import AppBar from "@mui/material/AppBar";
import Link from '@mui/material/Link';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  DrawerBackDrop: {
    '& .MuiBackdrop-root': {
      backgroundColor: 'transparent'
    },
    '& .MuiPaper-root': {
      backgroundColor: '#37475D',
      color: '#FFF'
    }
  }
}) 

const Header = () => {
  const theme = useTheme();
  const classes = useStyles();
  const [anchor, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <AppBar position='static'>
      <Container disableGutters={true}>
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
                  sx={{ color: '#FFF', ml: 'auto', mr: 1, fontSize: '18px' }}
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
                <Drawer
                  anchor='left'
                  open={Boolean(anchor)}
                  onClose={handleClose}
                  className={classes.DrawerBackDrop}
                  PaperProps={{
                    style: {
                      minHeight: '100vh',
                      minWidth: '100vw',
                      top: '55px',
                    }
                  }}
                  sx={{ 
                    height: `calc(100% - 64px)`,
                    top: 64,
                    '& .MuiBackdrop-root': {
                      backgroundColor: 'transparent'
                    },
                    '& .MuiPaper-root': {
                      backgroundColor: theme.palette.primary.main,
                      color: '#FFF'
                    }
                  }}
                >
                  <MenuItem
                    onClick={handleClose}
                    component={GatsbyLink}
                    to='/pricing'
                  >
                    Pricing
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    component={GatsbyLink}
                    to='/support'
                  >
                    Support
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    component={GatsbyLink}
                    to='/contact'
                  >
                    888-888-8888
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    component={GatsbyLink}
                    to='/demo'
                  >
                    Get Started
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    component={GatsbyLink}
                    to='/login'
                  >
                    Login
                  </MenuItem>
                </Drawer>
              </>
            ) : (
              <>
                <Link
                  component={GatsbyLink}
                  to='/pricing'
                  variant='h6'
                  sx={{ color: '#FFF', mx: 4, fontSize: '18px' }}
                >
                  Pricing
                </Link>
                <Link
                  component={GatsbyLink}
                  to='/suport'
                  variant='h6'
                  sx={{ color: '#FFF', mx: 4, fontSize: '18px' }}
                >
                  Support
                </Link>
                <Link
                  component={GatsbyLink}
                  to='/suport'
                  variant='h6'
                  sx={{ color: '#FFF', mx: 4, fontSize: '18px' }}
                >
                  888-888-8888
                </Link>
                <Button
                  component={GatsbyLink}
                  to='/demo'
                  color='secondary'
                  variant='contained'
                  disableElevation
                  sx={{ ml: 'auto', borderRadius: '2em' }}
                >
                  Get Started
                </Button>
                <Link
                  component={GatsbyLink}
                  to='/login'
                  sx={{ color: '#FFF', ml: 4, borderLeft: '2px solid #FFF', paddingLeft: 4 }}
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
